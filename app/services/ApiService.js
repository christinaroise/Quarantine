import { api_key } from '~/services/stores/store'
import { countryCode } from '~/services/stores/filterStore'
import { sources } from '~/services/stores/listsStore'
import { SourceService } from './SourceService'
import { get } from 'svelte/store';
import { LocalStorage } from './localStorage/LocalStorage';
import { FilterService } from '~/services/FilterService';

export const ApiService = {
    get: function(url){
        return new Promise( resolve => {
            fetch(url)
            .then( response => response.json() )
            .then( response => {
                if(response.fault){
                    console.log(response.fault.faultstring)
                    alert({
                        title: "We're sorry",
                        message: "It looks like we cant fetch any data at the moment",
                        okButtonText: "OK"
                    }).then(() => {
                        console.log("Alert dialog closed")
                    })
                }else{
                    return resolve(response)
                }
            })         
        });
    },
    getNewspaperData: async function(){
        return new Promise( async resolve =>{
            fetch(`https://newsapi.org/v2/sources?&apiKey=${api_key}`)
            .then( response => response.json() )
            .then( async response => {
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    sources.set(response.sources)
                    await LocalStorage.isSourceInList()
                    return resolve(get(sources))
                }
            })
        });
    },
    getNewspaperSourceData: function(item){
        return new Promise( resolve => {
            fetch(`https://newsapi.org/v2/everything?domains=${SourceService.trimURLSource(item.url)}&apiKey=${api_key}`)
            .then( response => response.json() )
            .then ( response => {
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    let articles = FilterService.filterArticles(response.articles)
                    return resolve(articles)
                }
            })
        }) 
    },
    getTopHeadlinesData: function(){
        return new Promise( resolve => {
            fetch(`https://newsapi.org/v2/top-headlines?country=${get(countryCode)}&apiKey=${api_key}`)
            .then( response => response.json() )
            .then( response => {
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    let topHeadlines = response
                    return resolve(topHeadlines)
                }
            })         
        });
    }
}