<script>
    import { onMount } from 'svelte'
    //GeoLocation
    import * as geolocation from "nativescript-geolocation"
    import { Accuracy } from "tns-core-modules/ui/enums"

    let currentWeather = ""
    let currentTemp = ""
    let currentIcon = ""
    let currentDescription= ""

    let today = ""
    let time = ""

    const weather_api_key = '90bffc08d53ce7853e1b33ba0c3c2ba8'

    const getWeatherData = () => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=${weather_api_key}`
        fetch(weatherURL)
            .then(result => result.json())
            .then(json =>{
                console.log(json.weather)
                currentWeather = json.weather[0].main
                currentTemp = Math.round(json.main.temp)
                currentDescription = json.weather[0].description
                if(currentDescription == 'clear sky'){
                    currentIcon = '~/assets/weatherIcons/png/clearSky.png'
                }else if(currentDescription == 'few clouds'){
                    currentIcon = '~/assets/weatherIcons/png/fewClouds.png'
                }else if(currentDescription == 'scattered clouds'){
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
            console.log(gg.latitude)
        })
    })

</script>


<flexBoxLayout class="weatherWrapper" >
    <stackLayout class="icon">
        <image class='icon' height="40" width="40" src='{currentIcon}' alt='cover' stretch='aspectFill'/> 
    </stackLayout>
    <stackLayout class="weatherContainer">
        <flexBoxLayout class="weatherFlexInfo">
            <stackLayout>
                <label class="temp timesNewRoman" text='{currentTemp}°'/>   
            </stackLayout>
            <stackLayout  class="weather">
                <label class="timesNewRoman" text='{currentWeather}'/>
            </stackLayout>
        </flexBoxLayout>
        <label class="body timesNewRoman description" text='{currentDescription}'/>
    </stackLayout>
    <stackLayout class="locationContainer">
        <label class="location timesNewRoman" text="Oslo, Norway"/>
        <label class="body timesNewRoman" text='{today}, {time}' />
    </stackLayout>
</flexBoxLayout>


<style>
    .weatherWrapper{
        flex-direction: row;
        margin: 18;
        padding: 20 10;
        height: 120;
        align-items: center;
        border-width: 1;
        border-color: lightgray;
        border-radius: 10%;
    }
    .icon{
        vertical-align: top;
        height: 100%;
        padding-top: 8;
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
        text-transform: capitalize;
    }

    .locationContainer{
        flex: 1;
        text-align: right;
        height: 100%;
        vertical-align: bottom;
        margin-bottom: 20;
        margin-right: 10;
    }
    .location{
        font-size: 15;
        font-weight: 500;
    }
    
</style>