
export const WeatherService = {
    setDayAndTime: function(language){
        let currentDay = new Date()
        let weekdayEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        let weekdayNO = ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
        
        if(language == "en"){
            today = weekdayEN[currentDay.getDay()]
            time = currentDay.getHours() + ":" + currentDay.getMinutes()
        }else if(language == "no"){
            today = weekdayNO[currentDay.getDay()]
        }
    }
}