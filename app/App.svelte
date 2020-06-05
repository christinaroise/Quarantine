<script>
    import { ApplicationSettings } from "tns-core-modules";
    import { registerNativeViewElement } from 'svelte-native/dom' 
    import { onMount } from 'svelte';
    import { navigate }  from 'svelte-native';
    import { ApiService } from '~/services/ApiService';
    import { ArticleService } from '~/services/ArticleService';
    import { FilterService } from '~/services/FilterService';
    import {
        isFilterComponentActivated,
        enableCovid19Filter,
        enableTrumpFilter,
        country,
        countryCode,
        countryName,
        sortByValue,
        filteredSearchReturnsNoSources } from '~/services/stores/filterStore.js'
    import {
        articles, 
        sources, 
        libraryList, 
        savedSources, 
        bookmarkList, } from '~/services/stores/listsStore.js'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import Dashboard from './tabs/Dashboard'
    import Browse from './tabs/Browse'
    import Library from './tabs/Library'
    import Bookmarks from './tabs/Bookmarks'
    import Filter from './tabs/Filter'

    let selectedTab = 0

    const appSettings = require('tns-core-modules/application-settings')

    $:{
        $isFilterComponentActivated = false
        $filteredSearchReturnsNoSources = false
        console.log($filteredSearchReturnsNoSources)
        console.log(selectedTab)
    }

    registerNativeViewElement("cardView", () => 
        require("@nstudio/nativescript-cardview").CardView
    )
    onMount(async () => {
        
        /*if(appSettings.getBoolean('default-covid19')){
            $enableCovid19Filter = await appSettings.getBoolean('default-covid19')
        }

        if(appSettings.getBoolean('default-trump')){
            $enableTrumpFilter = await appSettings.getBoolean('default-trump')
        }*/
        if(appSettings.getString('default-countryCode')){
            $countryCode = await appSettings.getString('default-countryCode')
            $countryName  = await appSettings.getString('default-countryName')
        }
        if(appSettings.getNumber('default-sortBy')){
            $sortByValue = await appSettings.getNumber('default-sortBy')
        }

        FilterService.getArticles()

        ApiService.getNewspaperData()
        
        $libraryList = await LocalStorage.getCompleteLibraryList()
        $bookmarkList = await LocalStorage.getBookmarks()
        $savedSources = LocalStorage.getLibraryListLTE()
    })

    //tabsPosition="bottom" iOSTabBarItemsAlignment="center"

</script>

<page actionBarHidden={true}>
    <bottomNavigation 
    bind:selectedIndex={selectedTab} >
        <tabStrip>
            <tabStripItem>
                <image src="~/assets/icons/homeDark.png" class="fas t-36"/>
            </tabStripItem>
            <tabStripItem>
                <image src='~/assets/icons/search.png'  class="fas t-36"/>
            </tabStripItem>
            <tabStripItem>
                <image src='~/assets/icons/newspaper.png'  class="fas t-36"/>
            </tabStripItem>
            <tabStripItem>
                <image src='~/assets/icons/bookmark.png' class="fas t-36"/>
            </tabStripItem>
            <tabStripItem>
                <image src='~/assets/icons/userDark.png' class="fas t-36"/>
            </tabStripItem>
        </tabStrip>

        <tabContentItem>
            <gridLayout>
                <Dashboard/>
        </tabContentItem>
        <tabContentItem>
            <gridLayout>
                <Browse/>
            </gridLayout>
        </tabContentItem>
         <tabContentItem>
            <gridLayout>
                <Library/>
            </gridLayout>
        </tabContentItem>
        <tabContentItem>
            <gridLayout>
                <Bookmarks/>
            </gridLayout>
        </tabContentItem>
        <tabContentItem>
            <gridLayout>
                <Filter/>
            </gridLayout>
        </tabContentItem>
    </bottomNavigation>
</page>

<style>
    TabStrip {
        background-color: white;
        selected-item-color: black;
        un-selected-item-color: lightgray;
        highlight-color: #C8A374;
    }
</style>
