let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)\w*)\s*/

let trumpRegEx = /\s*(\w(((D|d)onald)|(T|t)rump)|(POTUS)\w*)\s*/


articles = articles.filter( a => !coronaRegExp.test(a.title))
articles = articles.filter( a => !coronaRegExp.test(a.description)) 




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