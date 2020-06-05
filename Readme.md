# Svelte-Native Firestore & NewsAPI & OpenWeatherAPI & NativeScript GeoLocation

This is a news App, developed during the COVID-19 lockdown, for iOS/Android. It uses local storage and has a fetch-call to the built in REST APIs. 

It uses the <a href='https://svelte-native.technology/docs'>svelte-native</a> framework to build a native application. Svelte-native is built on top of <a href="https://nativescript.ord">Nativescript</a>, so you need to go through the setup guide there in order to install the TNS CLI Tools.

## NB! the app performs poorly on simulator (tns run ios). I advice to use tns preview and use Nativescript's apps Playground and Preview for best experience. 
There are certain issues when running the app on simulator. I dont know if its the software or code as things work better in the app on iPhone and Android. The topbar is centered weirdly on iPhone due to a default margin I cant seem to work around. The label in actionBar is default to the left, with icons to the right. It looks like you cant workd around this without the app looking a little odd on iOS. When running tns run ios, the tabs bar (bottom navigation) is left aligned but when running tns preview the tabs bar is centered.


Other used add-ons/plug-ins: 
- Navbar icons are from <a href='https://fontawesome.com/docs'>Font Awesome</a>
- Weather icons are made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> and <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
- The fonts Open Sans and Montserrat are from <a href='https://fonts.google.com'>Google Fonts</a>

## NB! This app is missing a few minor details and some cleaning up
## To-do list
I planned to have this done in time for the final, but cleaning up code turned in to a much bigger hassle than I expected
- Universal:
    - reset scroll position
- Dashboard:
    - Recommended section is supposed to show articles recommended to each user. I found a few solutions, but none that would be completed in time
    - geoLocation does not fetch the device's position
    - add Discover component similar to the discover section in google News app
- FilterBar:
    - Buttons need active-styling or replaced with a segmentedBar
    - "all" in Library needs to set library to default
    - "all" in Dashboard needs to set Dashboard to default
- Search:
    - Add/Remove button is missing

The idea was to let the user save 3 newspapers and 5 articles to localStorage, and if then wanted to save more they would get the options of either removing one item or create an account. I would then connect their user to firebase (authentication) and then continue to save articles and newspapers in firebase. 

## Set up
```html
npm install 
tns run [ios|android]
```

## Project structure [NOT 100% COMPLETE]
This is a single page application.
- app/App.svelte handles the navigation between tabs by using a Tabs bar.
- tabs/screens:
    - Dashboard.svelte
    - Browse.svelte
    - Library.svelte
    - Bookmarks.svelte
    - Filter.svelte (I've chosen to keep its icon a profile-icon as my idea was to give the user the option of creating a user (Firebase))
- Components are shared between screens and modals as they mostly share the same styling and elements. 
- Components are, mainly, broken into two categories: universal and weather. 
- The weather compoent consist of the card that shows in Dashboard.svelte only, and gets data in onMount from OpenWeather api. There's also a setTimeAndDate function as well as GeoLocation. GeoLocation currently has a bug. I chose a folder of its own for weather in case I'd expand the app's features at a later time - however everything related to weather is in one file and should be broken in to several. 
- The universal folder contains all the components that are shared accross the different screens and modals. Bars, buttons, cards, containers, lists, sliders.. They all carry props from parent.
- The Modals-folder are broken into smaller components in cardModal-folder and larger Modals that covers the entire screen. The filterModal did have some bugs after a solid cleaning up and has been omitted due to lack of time. 
- Most JavaScript is put in files under the services-folder as many components and screens share the same methods. 

<a href="https://www.dropbox.com/s/i43wy7bzeov04dj/Screen%20Recording%202020-04-15%20at%2008.40.51.mov?dl=0">Link to demovideo of Quarantine News app</a>
