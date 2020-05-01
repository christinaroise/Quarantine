import { ApplicationSettings } from "tns-core-modules";
import { ModalService } from './ModalService'
import { SourceService } from './SourceService'
import { ApiService } from './ApiService'
import { api_key, sourceList} from './store'

const appSettings = require('tns-core-modules/application-settings')

export const LocalStorage = {
    addToLibrary: function(sourceItem){
        console.log(appSettings.getString("SavedNewspapers"))
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
    }
}