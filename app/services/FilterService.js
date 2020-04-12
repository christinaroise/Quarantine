const appSettings = require('tns-core-modules/application-settings')

export const FilterService = {
    setSortType: function(value){
        appSettings.setString('type', value)
    },
    getSortValue: function(){
        let value = appSettings.getBoolean('sortEnabled')
        if(value != null){
            return value
        }else{
            return false 
        }
    },
    setSelectedCountry: function(value){
        appSettings.setString('country', value)
        console.log(value)
    },
    getSelectedCountry: function(){
        let countryCode = 'us'
        let valueFromAppSettings = appSettings.getString('country')
        if(valueFromAppSettings != null){
            return valueFromAppSettings
        }
        return countryCode
    },
    setCovidEnabled: function(value){
        appSettings.setBoolean('covidEnabled', value)
    },
    isCovidEnabled: function(){
        let value = appSettings.getBoolean('covidEnabled')
        if(value != null){
            return value
        }else{
            return false
        }
    },
    setTrumpEnabled: function(value){
        appSettings.setBoolean('trumpEnabled', value)
    },
    isTrumpEnabled: function(){
        let value = appSettings.getBoolean('trumpEnabled')
        if(value != null){
            return value
        }else{
            return false
        }
    },
    setLanguage: function(value){
        appSettings.setString('language', value)
    },
    getLanguage: function(){
        return appSettings.getString('language')
    }
}