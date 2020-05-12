import { ApplicationSettings } from "tns-core-modules";
import { alert } from '@nativescript/core/ui/dialogs'
import { bookmarkList } from './store'
import { SourceService } from './SourceService'
import { ApiService } from './ApiService'
import { api_key } from './store'

const appSettings = require('tns-core-modules/application-settings')


export const LocalStorage = {
    //ADDS AND SHOWS NEWSPAPERS
    addToLibrary: function(sourceItem){
        if(appSettings.getString("SavedNewspapers") == null || appSettings.getString("SavedNewspapers").length == 0 || appSettings.getString("SavedNewspapers") == "[null]"){
            appSettings.setString("SavedNewspapers","[]")
        }
        let sourceList = appSettings.getString("SavedNewspapers")
        let sourceListAsJson = this.pushNewSourceToList(sourceItem, sourceList)
        
        appSettings.setString("SavedNewspapers", JSON.stringify(sourceListAsJson))

        return JSON.parse(appSettings.getString("SavedNewspapers"))
    },
    pushNewSourceToList: function(sourceItem, sourceListAsString){
        let list = JSON.parse(sourceListAsString)
        let doesExist = false
        for(var i = 0; i < list.length; i ++){
            if(list[i].name == sourceItem.name){
                doesExist = true
                alert({
                    title: sourceItem.name,
                    message: "has already been added to your library",
                    okButtonText: "OK"
                }).then(() => {
                    console.log("Alert dialog closed")
                })
            }
        }
        if(!doesExist){
            list.push(sourceItem)
            alert({
                title: sourceItem.name,
                message: "has been added to your library",
                okButtonText: "OK"
            }).then(() => {
                console.log("Alert dialog closed")
            })
        }
        return list
    },
    getLibraryList: async () => {
        if(appSettings.getString("SavedNewspapers") == null ||   appSettings.getString("SavedNewspapers").length == 0){
            appSettings.setString("SavedNewspapers","[]")
        }
    
        let sourceListAsString = appSettings.getString("SavedNewspapers")
        let sourceList = JSON.parse(sourceListAsString)
        let newspaperList = []
    
        for(var i = 0; i < sourceList.length; i++){
            var customObj = {}
    
            await ApiService.get(`https://newsapi.org/v2/everything?domains=${SourceService.trimURLSource(sourceList[i].url)}&apiKey=${api_key}`).then(result => {
                if(sourceList[i] != "undefined" && sourceList[i].name.length > 0){
                    customObj.name = sourceList[i].name
                    customObj.category = sourceList[i].category
                    customObj.articles = result.articles
                    newspaperList.push(customObj)
                }
            }) 
        }
        newspaperList = newspaperList
        return newspaperList  
    },
    //ADDS AND SHOWS ARTICLES
    createBookmarks: function(articleItem){
        if(appSettings.getString("SavedArticles") == null || appSettings.getString("SavedArticles").length == 0 || appSettings.getString("SavedArticles") == "[null]"){
            appSettings.setString("SavedArticles","[]")
        }
        let articleList = appSettings.getString("SavedArticles")
        let articleListAsJson = this.pushOrPopArticle(articleItem, articleList)
        appSettings.setString("SavedArticles", JSON.stringify(articleListAsJson))

        //bookmarkList.set(JSON.parse(appSettings.getString("SavedArticles")))

        return  JSON.parse(appSettings.getString("SavedArticles"))
    },
    pushArticle: function(articleItem, articleListAsJson){
        let list = JSON.parse(articleListAsJson)
        let doesExist = false
        for(var i = 0; i < list.length; i ++){
            if(list[i].url == articleItem.url){
                doesExist = true
            }
        }
        if(!doesExist){
            list.push(articleItem)
            alert({
                title: articleItem.title,
                message: "has been added to your bookmarks",
                okButtonText: "OK"
            }).then(() => {
                console.log("Alert dialog closed")
            })
        }
        bookmarkList.set(list)
        console.log(bookmarkList)
        return list
    },
    popArticle: function(articleItem, articleListAsJson){
        let list = JSON.parse(articleListAsJson)
        let newList = []
        let remove = false
        for(var i = 0; i < list.length; i ++){
            if(list[i].url != articleItem.url){
                remove = true
                newList.push(list[i])
            }
        }
        if(remove == true){
            alert({
                title: articleItem.title,
                message: "has been removed from your bookmarks",
                okButtonText: "OK"
            }).then(() => {
                console.log("Alert dialog closed")
            })
        }

        let newListAsString = JSON.stringify(newList)
        appSettings.setString("SavedArticles", newListAsString)
        bookmarkList.set(newList)    
        return newList
    },
    pushOrPopArticle: function(articleItem, articleListAsJson){
        let list = JSON.parse(articleListAsJson)
        let doesExist = false
        for(var i = 0; i < list.length; i ++){
            if(list[i].url == articleItem.url){
                doesExist = true
            }
        }        
        if(!doesExist){
            list = this.pushArticle(articleItem, articleListAsJson)
            console.log('item has been added')
        }else{
            list = this.popArticle(articleItem, articleListAsJson)
            console.log('item has been removed')
        }
        return list
    },
    getBookmarks: async () => {
        if(appSettings.getString("SavedArticles") == null ||   appSettings.getString("SavedArticles").length == 0){
            appSettings.setString("SavedArticles","[]")
        }
    
        let articleListAsJson = appSettings.getString("SavedArticles")
        let list = JSON.parse(articleListAsJson)
        bookmarkList.set(list)  
        return list
    }, 
}