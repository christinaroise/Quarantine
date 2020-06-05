import { api_key } from '~/services/stores/store'
import { countryCode } from '~/services/stores/filterStore'
import { articles, todaysArticles } from '~/services/stores/listsStore'
import { get } from 'svelte/store';
import { ArticleService } from '~/services/ArticleService'
import { LocalStorage } from '~/services/localStorage/LocalStorage'

const appSettings = require('tns-core-modules/application-settings')

let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)|(COVID-19)|(COVID)\w*)\s*/
let trumpRegExp = /\s*(\w*((T|t|)rump)|((D|d)onald)|(POTUS)\w*)\s*/

export const FilterService = {
    filterArticles: function (articleList){
        let filterListStage1 = []
        let filterListStage2= []
        let filterListStage3 = [] 
    
        let result = []

        let covid = appSettings.getBoolean("default-covid19")
        let trump = appSettings.getBoolean("default-covid19")

        if(covid == true && trump == false){
            filterListStage1 = articleList.filter( a => !coronaRegExp.test(a.title))
            result = filterListStage1.filter( a => !coronaRegExp.test(a.description))
        }
        else if(trump == true && covid == false){
            filterListStage1 = articleList.filter( a => !trumpRegExp.test(a.title))
            result = filterListStage1.filter( a => !trumpRegExp.test(a.description))
        }
        else if(covid == true && trump == true){
            filterListStage1 = articleList.filter( a => !coronaRegExp.test(a.title))
            filterListStage2 = filterListStage1.filter( a => !coronaRegExp.test(a.description))
            filterListStage3 = filterListStage2.filter( a => !trumpRegExp.test(a.title))
            result = filterListStage3.filter( a => !trumpRegExp.test(a.description))
        }
        else{
            result = articleList
        }
        
        return result
    },
    getArticles: function(){
        const topHeadlines = `https://newsapi.org/v2/top-headlines?country=${get(countryCode)}&pageSize=50&apiKey=${api_key}`;
        fetch(topHeadlines)
            .then( res => res.json() )
            .then( res => {
                articles.set(this.filterArticles(res.articles));

                let onlyTodaysDateArticles  = get(articles)
                onlyTodaysDateArticles.filter(a => ArticleService.isCurrentDate(a.publishedAt))

                todaysArticles.set(onlyTodaysDateArticles)
                
                LocalStorage.getCompleteLibraryList();
            })
        .catch( error => console.log(error) )
    }
}