import { ApplicationSettings } from "tns-core-modules";
import { ModalService } from '~/services/ModalService' 
const appSettings = require('tns-core-modules/application-settings')

export const SourceService = {
    trimURL: function(path){
        let url = path;
        let urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
        let domain = urlParts[0];
        if(domain == 'news.google.com'){
            domain = 'googleedge.com'
        }else if(domain == 'espn.go.com'){
            domain = 'espn.com'
        }else if(domain == 'abcnews.go.com'){
            domain = ''
        }
        domain = domain.replace('www.','')
        return domain     
    },
    trimURLSource: function(path){
        let url = path;
        let urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
        let domain = urlParts[0];
        if(domain == 'espn.go.com'){
            domain = 'espn.com'
        }
        domain = domain.replace('www.','')
        return domain     
    },
    addToLibrary: function(sourceItem){
        console.log('********* BTN HAS BEEN HIT **********')
        if(appSettings.getString("SavedNewspapers") == null || appSettings.getString("SavedNewspapers").length == 0){
            appSettings.setString("SavedNewspapers","[]")
        }
    
        let sourceList = appSettings.getString("SavedNewspapers")
    
        let sourceListAsJson = this.pushNewSourceToList(sourceItem, sourceList)
        
        appSettings.setString("SavedNewspapers", JSON.stringify(sourceListAsJson))
    
        console.log(appSettings.getString("SavedNewspapers"))
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
    }
}