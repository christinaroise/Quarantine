import { api_key, articles} from '~/services/stores.js'
import { FilterService } from '~/services/FilterService'

export const ApiService = {
    get: function(url){
        return new Promise( resolve => {
            fetch(url)
            .then( response => response.json() )
            .then( response => {
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    return resolve(response)
                }
            })         
        });
    },
    getTopHeadlinesData: function(){
        return new Promise( resolve => {
            fetch(`https://newsapi.org/v2/top-headlines?country=${FilterService.getSelectedCountry()}&apiKey=${api_key}`)
            .then( response => response.json() )
            .then( response => {
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    let topHeadlines = response
                    if(FilterService.isCovidEnabled == true){
                        topHeadlines = topHeadlines.filter( a => !coronaRegExp.test(a.title))
                        topHeadlines = topHeadlines.filter( a => !coronaRegExp.test(a.description)) 
                    }
                
                    articles.set(JSON.stringify(topHeadlines))
                    return resolve(topHeadlines)
                }
            })         
        });
    }
}