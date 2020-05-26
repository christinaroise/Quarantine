import { ApplicationSettings } from "tns-core-modules";
import { alert } from '@nativescript/core/ui/dialogs'
import { get } from 'svelte/store';
import { 
    bookmarkList, 
    savedSources, 
    libraryList, 
    popularValue, 
    covid19Filter, 
    trumpFilter, 
    api_key, 
    coronaRegExp, 
    trumpRegExp } from '~/services/stores/store'
import { SourceService } from '~/services/SourceService'
import { ApiService } from '~/services/ApiService'

const appSettings = require('tns-core-modules/application-settings')

var customObj = {}

function createEmptyStringInLocalStorage(stringName){
    if(appSettings.getString(stringName) == null || appSettings.getString(stringName).length == 0 || appSettings.getString(stringName) == "[null]"){
        appSettings.setString(stringName,"[]")
    }
}

function doesItemExistInList(list, item){

    let doesExist = false
    for(var i = 0; i < list.length; i ++){
        if(list[i].url == item.url){
            doesExist = true
        }
    }
    return doesExist
}

function createNewList(list, item){
    let removed = false
    let newList = []
    for(var i = 0; i < list.length; i++){
        if(list[i].url != item.url){
            newList.push(list[i])
        }else{
            removed = true
        }
    }
    if(removed){
        showRemovedDialogue(item)
    }
    return newList
}

function pushItemToList(list, item){
    if(!doesItemExistInList(list, item)){
        list.push(item)
        alert({
            title: item.name, /*item.title,*/
            message: "has been added to your location",
            okButtonText: "OK"
        }).then(() => {
            console.log("Alert dialog closed")
        })
    }
}

function showRemovedDialogue(item){
    alert({
        title: item.name,
        message: "has been removed from your library",
        okButtonText: "OK"
    }).then(() => {
        console.log("Alert dialog closed")
    })
}

function getSortBy(){
    let sortBy = "publishedAt"
    if(get(popularValue)){
        sortBy = "popularity"
    }else{
        sortBy = "publishedAt"
    }
    return sortBy
}

function getFilteredArticles(articles){
    let filterListStage1 = []
    let filterListStage2= []
    let filterListStage3 = []

    let result = []

    if(get(covid19Filter) && !get(trumpFilter)){
        filterListStage1 = articles.filter( a => !coronaRegExp.test(a.title))
        result = filterListStage1.filter( a => !coronaRegExp.test(a.description))
    }
    else if(get(trumpFilter) && !get(covid19Filter)){
        filterListStage1 = articles.filter( a => !trumpRegExp.test(a.title))
        result = filterListStage1.filter( a => !trumpRegExp.test(a.description))
    }
    else if(get(covid19Filter) && get(trumpFilter)){
        filterListStage1 = articles.filter( a => !coronaRegExp.test(a.title))
        filterListStage2 = filterListStage1.filter( a => !coronaRegExp.test(a.description))
        filterListStage3 = filterListStage2.filter( a => !trumpRegExp.test(a.title))
        result = filterListStage3.filter( a => !trumpRegExp.test(a.description))
    }
    else{
        result = result.articles
    }

    return result
}

async function getArticlesForEachSource(list){
    let newList = []
    for(var i = 0; i < list.length; i++){
        await ApiService.get(`https://newsapi.org/v2/everything?domains=${SourceService.trimURLSource(list[i].url)}&sortBy=${getSortBy()}&apiKey=${api_key}`).then(result => {
            if(list[i] != "undefined" && list[i].name.length > 0){
                let customObj = {}
                customObj.id = list[i].id
                customObj.name = list[i].name
                customObj.category = list[i].category
                customObj.articles = getFilteredArticles(articles)
                newList.push(customObj)
            }
        }) 
    }
    return newList
}

export const LocalStorage = {
    addOrRemoveItemTo: function(item, string){
        createEmptyStringInLocalStorage(string)
        
        let list = appSettings.getString(string)
        let array = this.pushOrPopNewItem(item, list)
        
        appSettings.setString(string, JSON.stringify(array))

        return  JSON.parse(appSettings.getString(string))
    },
    pushItem: function(item, listAsString){
        let list = JSON.parse(listAsString)
        
        pushItemToList(list, item)
        
        savedSources.set(list)
        
        return list
    },
    popItem: function(item, listAsString){
        let list = JSON.parse(listAsString)

        var newList = createNewList(list, item)

        let newListAsString = JSON.stringify(newList)
        appSettings.setString("SavedNewspapers", newListAsString)
        savedSources.set(newList)
        return newList
    },
    pushOrPopNewItem: function(item, listAsString){
        let list = JSON.parse(listAsString)
        
        if(doesItemExistInList(list, item)){
            list = this.pushItem(item, listAsString)
        }else{
            list = this.popItem(item, listAsString)
        }
        return list
    },
    getLibraryListLTE: () => {
        createEmptyStringInLocalStorage("SavedNewspapers")
        let listAsString = appSettings.getString("SavedNewspapers")
        return JSON.parse(listAsString)
    },
    getCompleteLibraryList: () => {
        createEmptyStringInLocalStorage("SavedNewspapers")
    
        let listAsString = appSettings.getString("SavedNewspapers")
        let list = JSON.parse(listAsString)
        
        let newList = getArticlesForEachSource(list)

        libraryList.set(newList) 
        return newList  
    },
    getBookmarks: async () => {
        createEmptyStringInLocalStorage("SavedArticles")
    
        let listAsJson = appSettings.getString("SavedArticles")
        let list = JSON.parse(listAsJson)
        bookmarkList.set(list)  
        return list
    }
}