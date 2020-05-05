import { ApplicationSettings } from "tns-core-modules";
import { ModalService } from './ModalService'
import { SourceService } from './SourceService'
import { ApiService } from './ApiService'
import { api_key, bookmarkList, saveOrRemoveText } from './store'

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
            ModalService.showConfirmedLibraryModal(sourceItem)
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
    saveArticle: function(articleItem){
        if(appSettings.getString("SavedArticles") == null || appSettings.getString("SavedArticles").length == 0 || appSettings.getString("SavedArticles") == "[null]"){
            appSettings.setString("SavedArticles","[]")
        }
        let articleList = appSettings.getString("SavedArticles")
        let articleListAsJson = this.pushArticleToList(articleItem, articleList)
        appSettings.setString("SavedArticles", JSON.stringify(articleListAsJson))

        return  JSON.parse(appSettings.getString("SavedArticles"))
    },
    pushArticleToList: function(articleItem, articleListAsJson){
        let list = JSON.parse(articleListAsJson)
        let doesExist = false
        for(var i = 0; i < list.length; i ++){
            if(list[i].url == articleItem.url){
                doesExist = true
            }
        }
        if(!doesExist){
            //saveOrRemoveText = "Remove"
            list.push(articleItem)
            ModalService.showConfirmedBookmarkModal(articleItem)
            // THIS MODAL NEEDS WORK
        }
        return list
    },
    popArticleFromList: function(articleItem, bookmarkList){
        let list = bookmarkList
        let newList = []
        let isRemoved = false
        for(var i = 0; i < list.length; i ++){
            if(list[i].url != articleItem.url){
                isRemoved = true
                newList.push(list[i])
            }
        }
        if(isRemoved == true){
            ModalService.showConfirmedRemoveModal(articleItem)
        }

        let newListAsString = JSON.stringify(newList)
        appSettings.setString("SavedArticles", newListAsString)

        return newList
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