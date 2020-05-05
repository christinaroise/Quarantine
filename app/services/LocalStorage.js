import { ApplicationSettings } from "tns-core-modules";
import { ModalService } from './ModalService'
import { SourceService } from './SourceService'
import { ApiService } from './ApiService'
import { api_key, bookmarkList } from './store'

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
            }
        }
        if(!doesExist){
            list.push(sourceItem)
            ModalService.showConfirmedModal(sourceItem)
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
        return newspaperList  
    },
    //ADDS AND SHOWS ARTICLES
    saveArticle: function(articleItem){
        if(appSettings.getString("SavedArticles") == null || appSettings.getString("SavedArticles").length == 0 || appSettings.getString("SavedArticles") == "[null]"){
            appSettings.setString("SavedArticles","[]")
        }
        let articleList = appSettings.getString("SavedArticles")
        let articleListAsJson = this.pushNewSourceToList(articleItem, articleList)
        
        appSettings.setString("SavedArticles", JSON.stringify(articleListAsJson))
        return  JSON.parse(appSettings.getString("SavedArticles"))
    },
    pushArticleToList: function(articleItem, articleListAsJson){
        let list = JSON.parse(articleListAsJson)
        let doesExist = false
        for(var i = 0; i < list.length; i ++){
            if(list[i].name == articleItem.name){
                doesExist = true
            }
        }
        if(!doesExist){
            list.push(articleItem)
            ModalService.showConfirmedModal(articleItem)
            // THIS MODAL NEEDS WORK
        }
        return list
    },
    getBookmarks: async () => {
        if(appSettings.getString("SavedArticles") == null ||   appSettings.getString("SavedArticles").length == 0){
            appSettings.setString("SavedArticles","[]")
        }
    
        let articleListAsJson = appSettings.getString("SavedArticles")
        let bookmarkList = JSON.parse(articleListAsJson)

        return bookmarkList  
    },
}