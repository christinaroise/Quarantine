<script>
// I probably could have broken this component into smaller files, but this is the only component in the app that will ever contain anything related to weather. If Quarantine were to ever evolve as a news app and become somewhat of a news/weather app, then this component would definitely have to adjust accordingly, but for now it's good. 

    import { onMount } from 'svelte'
    import { weather_api_key } from '~/services/stores/store'
    import { ApiService } from '~/services/ApiService'
    import { WeatherService } from '~/services/WeatherService'
    //GeoLocation DOES NOT WORK
    import * as geolocation from "nativescript-geolocation"
    import { Accuracy } from "tns-core-modules/ui/enums"
    

    let currentWeather = ""
    let currentTemp = ""
    let currentIcon = ""
    let currentDescription= ""

    let today = ""
    let time = ""

// I don't prefer the default icons that comes with the open weather api, so this function, not only fetches the weather data, it also goes through most of its descriptions in order to set my own icons. The icons are from flaticon. Further information and credit is given in Readme.md
    const getWeatherData = () => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=${weather_api_key}`
        fetch(weatherURL)
            .then(result => result.json())
            .then(json =>{
                currentWeather = json.weather[0].main
                currentTemp = Math.round(json.main.temp)
                currentDescription = json.weather[0].description
                if(currentDescription == 'clear sky'){
                    currentIcon = '~/assets/weatherIcons/png/clearSky.png'
                }else if(currentDescription == 'few clouds'){
                    currentIcon = '~/assets/weatherIcons/png/fewClouds.png'
                }else if(currentDescription == 'scattered clouds' || 'overcast clouds'){
                    currentIcon = '~/assets/weatherIcons/png/scatteredClouds.png'
                }else if(currentDescription == 'broken clouds'){
                    currentIcon = '~/assets/weatherIcons/png/brokenClouds.png'
                }else if(currentDescription == 'shower rain'){
                    currentIcon = '~/assets/weatherIcons/png/showerRain.png'
                }else if(currentDescription == rain){
                    currentIcon = '~/assets/weatherIcons/png/rain.png'
                }else if(currentDescription == 'thunderstorm'){
                    currentIcon = '~/assets/weatherIcons/png/thunderstorm.png'
                }else if(currentDescription == 'snow'){
                    currentIcon = '~/assets/weatherIcons/png/snow.png'
                }else if(currentDescription == 'Mist' || 'Smoke' || 'Haze' || 'Dust' || 'Fog' || 'Sand' || 'Dust' || 'Ash' || 'Squall' || 'Tornado'){
                    currentIcon = '~/assets/weatherIcons/png/mist.png'
                }
            })
            .catch(error => console.log(error))
    }

//This function sets day and time so that it is visually represented for the user. 
    function setDayAndTime(language){
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
    
    onMount(() => {
        getWeatherData()
        setDayAndTime("en")
        geolocation.enableLocationRequest().then(() => {
            var gg = geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.any, maximumAge: 5000, timeout: 20000 })
        })
    })

</script>


<cardView
radius="25"
shadowOffsetHeight="2" 
shadowOpacity="0.2" 
shadowRadius="8"
elevation="10">
    <flexBoxLayout class="weatherWrapper heightAuto">
        <stackLayout class="icon">
            <image 
            class='icon' 
            height="40" 
            width="40" 
            src='{currentIcon}' 
            alt='weather icon' 
            stretch='aspectFill'/> 
        </stackLayout>
        <stackLayout class="weatherContainer">
            <flexBoxLayout class="weatherFlexInfo">
                <stackLayout>
                    <label 
                    class="temp timesNewRoman" 
                    text='{currentTemp}°'/>   
                </stackLayout>
                <stackLayout  class="weather">
                    <label 
                    class="timesNewRoman" 
                    text='{currentWeather}'/>
                </stackLayout>
            </flexBoxLayout>
            <label 
            class="body timesNewRoman description" 
            text='{currentDescription}'/>
        </stackLayout>
        <stackLayout class="locationContainer">
            <label 
            class="location timesNewRoman" 
            text="Oslo, Norway"/>
            <label 
            class="body timesNewRoman" 
            text='{today}, {time}' />
        </stackLayout>
    </flexBoxLayout>
</cardView>


<style>
    cardView{
        margin: 30 15 30 15;
        align-items: center;
        height: 100;
    }
    .weatherWrapper{
        height: auto;
        align-items: center;
        flex-direction: row;
        background-color: white;
        border-radius: 10%;
        padding-left: 10;
    }
    .icon{
        vertical-align: top;
        height: 100%;
        margin-top: 5;
        margin-right: 5;
    }

    .weatherContainer{
        flex: 1;
        height: 100%;
        vertical-align: center;
    }

    .temp{
        font-size: 45;
        vertical-align: bottom; 
    }

    .weather{
        font-size: 20;
        font-weight: 500;
        vertical-align: bottom; 
    }
    .description{
        margin-bottom: 10;
        text-transform: capitalize;
    }

    .locationContainer{
        flex: 1;
        text-align: right;
        height: 100%;
        vertical-align: bottom;
        padding-bottom: 8;
        padding-right: 15;
    }
    .location{
        font-size: 15;
        font-weight: 500;
    }
    
</style>