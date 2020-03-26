<script>
    import { onMount } from 'svelte'
    import '../../style/BoxShadow.js'


    let currentWeather = ""
    let currentTemp = ""
    let currentIcon = ""
    let currentDescription= ""

    const weather_api_key = '90bffc08d53ce7853e1b33ba0c3c2ba8'

    const getWeatherData = () => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=${weather_api_key}`
        fetch(weatherURL)
            .then(result => result.json())
            .then(json =>{
                console.log(json.weather)
                currentWeather = json.weather[0].main
                currentTemp = json.main.temp
                currentIcon = `http://openweathermap.org/img/wn/04n@2x.png`
                currentDescription = json.weather[0].description

            })
            .catch(error => console.log(error))
    }
    
    onMount(() => {
        getWeatherData()
    })

</script>

<flexBoxLayout id="shadow" class="TodaysWeatherContainer">
    <stackLayout class="weatherContainer">
        <flexBoxLayout>
            <image class='image icon' width="50" height="50" src='http://openweathermap.org/img/wn/04n@2x.png' alt='cover' stretch='aspectFill'/>
            <label class="temp" text='{currentTemp}°'/>
            <label class="weather" text='{currentWeather}'/>
        </flexBoxLayout>
        <label class="description" text='{currentDescription}'/>
    </stackLayout>
    <stackLayout class="locationContainer">
        <label text="Location"/>
        <label text="date, time" />
    </stackLayout>

</flexBoxLayout>

<style>
    .TodaysWeatherContainer{
        margin: 10;
        padding: 10;
        flex-direction: row;
        margin-bottom: 10;
        border-width: 1;
        height: 90;
        align-items: center;
    }
    .image{
        background-color: black;
    }
    .weather{
        flex: 1;
    }
    .locationContainer{
        flex: 1;
        text-align: right;
    }
    .temp{
        font-size: 30;
    }
</style>