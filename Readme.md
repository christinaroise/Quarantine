# Svelte-Native Firestore & NewsAPI & OpenWeatherAPI & NativeScript GeoLocation

This is a news App, developed during the COVID-19 lockdown, for iOS/Android that connects to firebase/firestore with fetch call to the built in REST API.

It uses the <a href='https://svelte-native.technology/docs'>svelte-native</a> framework to build a native application. Svelte-native is built on top of <a href="https://nativescript.ord">Nativescript</a>, so you need to go through the setup guide there in order to install the TNS CLI Tools.

Other used add ons/plug ins: 
- Navbar icons are from <a href='https://fontawesome.com/docs'>Font Awesome</a>
- Weather icons are made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> and <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
- The fonts Open Sans and Montserrat are from <a href='https://fonts.google.com'>Google Fonts</a>


## Set up
```html
npm install 
tns run [ios|android]
```

## Project structure [NOT CORRECT WILL EDIT LATER]
This is a single page application.
Everything is handled in app/App.svelte. This file...
- fetches data from NewsApi and OpenWeather in svelte onMount function
- uses a navigation bar to navigate between pages

You are not able to do anything further with the items - i.e delete, update or add - so the example just serves as a demo of how you can include data in a simple app