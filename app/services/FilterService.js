const appSettings = require('tns-core-modules/application-settings')

export const FilterService = {
    setSortType: function(value){
        appSettings.setString('type', value)
    },
    getSortValue: function(){
        return appSettings.getString('type')
    },
    setCountryEnabled: function(value){
        console.log("ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ DDDDDDDDDDDDDD")
        appSettings.setString('country', value)
        console.log(value)
    },
    getCountryValue: function(){
        let countryCode = 'us'
        let valueFromAppSettings = appSettings.getString('country')
        if(valueFromAppSettings != null && valueFromAppSettings.length > 0){
            return valueFromAppSettings
        }
        return countryCode
    },
    setCovidEnabled: function(value){
        appSettings.setBoolean('covidEnabled', value)
    },
    isCovidEnabled: function(){
        return appSettings.getBoolean('covidEnabled')
    },
    setTrumpEnabled: function(value){
        appSettings.setBoolean('trumpEnabled', value)
    },
    isTrumpEnabled: function(){
        return appSettings.setBoolean('trumpEnabled')
    },
    setLanguage: function(value){
        appSettings.setString('language', value)
    },
    getLanguage: function(){
        return appSettings.getString('language')
    }
}