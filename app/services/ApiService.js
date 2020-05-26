import { api_key, covid19Filter, trumpFilter } from '~/services/stores/store.js'
import { SourceService } from './SourceService.js'
import { get } from 'svelte/store';

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
    getNewspaperData: function(){
        return new Promise( resolve =>{
            fetch(`https://newsapi.org/v2/sources?&apiKey=${api_key}`)
            .then( response => response.json() )
            .then( response => {
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    let sources = response
                    
                    return resolve(sources)
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
                    let list = response.articles
                    let filteredList = []
                    let articles = []
                    let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)\w*)\s*/
                    let trumpRegExp = /\s*(\w*((T|t|)rump)|((D|d)onald)|(POTUS)\w*)\s*/
                    
                    if(get(covid19Filter)){
                        filteredList = list.filter( a => !coronaRegExp.test(a.title))
                        articles = filteredList.filter( a => !coronaRegExp.test(a.description))  
                    }else if(get(trumpFilter)){
                        filteredList = list.filter( a => !trumpRegExp.test(a.title))
                        articles = filteredList.filter( a => !trumpRegExp.test(a.description))
                    }else{
                        articles = list
                    }
                    return resolve(articles)
                }
            })
        }) 
    },
    getTopHeadlinesData: function(){
        return new Promise( resolve => {
            fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`)
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