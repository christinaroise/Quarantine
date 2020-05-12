import { api_key } from '~/services/store.js'
import { FilterService } from '~/services/FilterService'
import { SourceService } from './SourceService.js'

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
                    let articles = response
                    return resolve(articles)
                }
            })
        }) 
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
                    return resolve(topHeadlines)
                }
            })         
        });
    }
}