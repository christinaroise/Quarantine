# Svelte-Native Firestore & NewsAPI & OpenWeatherAPI & NativeScript GeoLocation

This is a news App, developed during the COVID-19 lockdown, for iOS/Android that connects to firebase/firestore with fetch call to the built in REST API.

It uses the <a href='https://svelte-native.technology/docs'>svelte-native</a> framework to build a native application. Svelte-native is built on top of <a href="https://nativescript.ord">Nativescript</a>, so you need to go through the setup guide there in order to install the TNS CLI Tools.

Other used add-ons/plug-ins: 
- Navbar icons are from <a href='https://fontawesome.com/docs'>Font Awesome</a>
- Weather icons are made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> and <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
- The fonts Open Sans and Montserrat are from <a href='https://fonts.google.com'>Google Fonts</a>

## NB! This app is NOT finished and is missing a few major methods and some cleaning up
## To-do list
- Universal:
    - active-style color of icons in BottomNavigation
    - addToList buttons needs appropriate functions and styling
- Dashboard:
    - reset scroll position in filteredComponent(read: PrimaryList)
    - Recommended section
        - this will be run by the kind of newspapers and articles that are saved to localStorage
    - geoLocation does not fetch the device's position
    - add Discover component
- Browse:
    - Buttons need to change text or icon and color when source(newspaper) is added to Library
    - Filtermodal:
        - Buttons need active-styling
        - cancle button different styling
- Library: 
    - missing working functions in optionsModal
- Bookmarks:
    - Articles need to be saved to localStorage and shown in Bookmarks
    - List of articles in bookmarks may need a new component as the styling will be different than previous lists. 
    - articles will have a showArticle Modal
    - add share/copy url button to articles
- FilterBar:
    - Buttons need active-styling
    - add "all/reset" option to filterBar
- Modals:
    - modals in modals does not work (first modal needs to be force closed when second modal is activated). this link might be the answer:
    https://play.nativescript.org/?template=play-ng&id=RbISYY&v=2
- Android/iOS:
    - Button styling on Android needs changing
    - a few topBars need style changing on Android  

## Set up
```html
npm install 
tns run [ios|android]
```

## Project structure [NOT 100% COMPLETE]
This is a multi page application.
- app/App.svelte handles the navigation between screens by using a bottomNavigation bar.
- screens:
    - Dashboard.svelte
    - Browse.svelte
    - Library.svelte
    - Bookmarks.svelte
    - Profile.svelte (I've chosen to name it Profile in case this screen will contain more than just filter options in the future.)
- Components are shared between screens and modals as they mostly share the same styling and elements. 
- Components are, for now, broken into two categories: universal and weather. 
- The weather compoent consist of the card that shows in Dashboard.svelte only, and gets data in onMount from OpenWeather api. Theres also a setTimeAndDate function as well as GeoLocation. GeoLocation currently has a bug - this will be fixed. I chose a folder of its own for weather in case I'd expand the app's features at a later time. 
- The universal folder contains all the components that are shared accross the different screens and modals. Bars, buttons, cards, containers, lists, sliders.. They all carry props from parent. I suspect some props could be placed in stores.js, but I haven't gotten to take a look at it just yet. 
- getData functions can also be stored in stores.js. In other words: there's some cleaning up to do. 
- Two jsons have been created, they hold the information about country names and code, and categories so to simplify the overall code. 
- The Modals-folder are broken into smaller components in cardModal-folder and larger Modals that covers the entire screen. 
- Most JavaScript is put in files under the services-folder as many components and screens share the same js. 

You are not able to do anything further with the items - i.e delete, update or add - so the example just serves as a demo of how you can include data in a semi advanced app

<a href="https://www.dropbox.com/s/i43wy7bzeov04dj/Screen%20Recording%202020-04-15%20at%2008.40.51.mov?dl=0">Link to demovideo of Quarantine News app</a>
