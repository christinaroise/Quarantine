import { ApplicationSettings } from "tns-core-modules";
import { alert } from '@nativescript/core/ui/dialogs'
import { get } from 'svelte/store';
import { api_key } from '~/services/stores/store'
import {
    bookmarkList, 
    savedSources, 
    libraryList,
    sources } from '~/services/stores/listsStore'
import {
    sortByValue } from '~/services/stores/filterStore'
import { SourceService } from '~/services/SourceService'
import { ApiService } from '~/services/ApiService'
import { FilterService } from '~/services/FilterService'

const appSettings = require('tns-core-modules/application-settings')

function createEmptyStringInLocalStorage(stringName){
    let string = ""
    if(appSettings.getString(stringName) == null || appSettings.getString(stringName).length == 0 || appSettings.getString(stringName) == "[null]"){
        string = appSettings.setString(stringName,"[]")
    }
    return string
}

function doesItemExistInList(list, item){
    if(list == null || list.length == 0){
        return false
    }
    let doesExist = false
    for(var i = 0; i < list.length; i ++){
        if(item.url != "undefined" && item.url != null){
            if(list[i].url == item.url){
                doesExist = true
            }
        }else{
            if(list[i].id == item.id){
                doesExist = true
            }
        }
    
    }
    return doesExist
}

function createNewList(list, item){
    let removed = false
    let newList = []
    for(var i = 0; i < list.length; i++){
        if(item.url != "undefined" && item.url != null){
            if(list[i].url != item.url){
                newList.push(list[i])
            }else{
                removed = true
            }
        }else{
            if(list[i].id != item.id){
                newList.push(list[i])
            }else{
                removed = true
            }
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
            title: "Saved",
            message: "Now you'll be able to find it easily",
            okButtonText: "OK"
        }).then(() => {
            console.log("Alert dialog closed")
        })
    }
}

function showRemovedDialogue(item){
    alert({
        title: "Done",
        message: "it is no longer saved on your app",
        okButtonText: "OK"
    }).then(() => {
        console.log("Alert dialog closed")
    })
}

function getSortBy(){
    let sortBy = "publishedAt"
    if(get(sortByValue) == "popularity" ){
        sortBy = "popularity"
    }else{
        sortBy = "publishedAt"
    }
    return sortBy
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
                customObj.articles = FilterService.filterArticles(result.articles)
                newList.push(customObj)
            }
        }) 
    }
    return newList
}

async function isSourceInList(){
    let listOfSources = get(sources)
    let list = await LocalStorage.getLibraryListLTE();

    for(var i = 0; i < listOfSources.length; i++){
        listOfSources[i].isAdded = false;
    };

    for(var i = 0; i < list.length; i++){
        for(var j = 0; j < listOfSources.length; j++){
            if(list[i].name == listOfSources[j].name){
                listOfSources[j].isAdded = true;
            };
        };
    };
    sources.set(listOfSources)
};

export const LocalStorage = {
    addOrRemoveItemTo: function(item, localStorageReference){
        createEmptyStringInLocalStorage(localStorageReference)

        let list = appSettings.getString(localStorageReference)
        let array = this.pushOrPopNewItemToString(item, list)

        appSettings.setString(localStorageReference, JSON.stringify(array))

        this.getCompleteLibraryList()
        this.getBookmarks()
        isSourceInList()

        return  JSON.parse(appSettings.getString(localStorageReference))
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

        savedSources.set(newList)
        return newList
    },
    pushOrPopNewItemToString: function(item, listAsString){
        let list = JSON.parse(listAsString)
        
        if(doesItemExistInList(list, item)){
            list = this.popItem(item, listAsString)
        }else{
            list = this.pushItem(item, listAsString)
        }
        
        return list
    },
    getLibraryListLTE: () => {
        createEmptyStringInLocalStorage("SavedNewspapers")
        let listAsString = appSettings.getString("SavedNewspapers")
        let list = JSON.parse(listAsString)
        return list
    },
    getCompleteLibraryList: async () => {
        createEmptyStringInLocalStorage("SavedNewspapers")
    
        let listAsString = appSettings.getString("SavedNewspapers")
        let list = JSON.parse(listAsString)
        let newList = await getArticlesForEachSource(list)
      
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