<script>
    import { ApplicationSettings } from "tns-core-modules";
    import { onMount } from 'svelte'
    import { navigate }  from 'svelte-native'
    import { ApiService } from '~/services/ApiService'
    import { ArticleService } from '~/services/ArticleService'
    import {
        api_key,
        filterComponent, 
        dashboardFilterIsActive, 
        libraryFilterIsActive, 
        articles,
        todaysArticles, 
        sources, 
        libraryList, 
        savedSources, 
        bookmarkList,
        listToBeDisplayed,
        covid19Filter,
        covid19Value,
        trumpFilter,
        trumpValue,
        newestValue,
        popularValue,
        country,
        countryCode,
        countryName,
        articlesCollapse,
        filterCategoryValue,
        filterCountryName,
        thereAreNoSources } from '~/services/stores/store.js'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import Dashboard from './tabs/Dashboard'
    import Browse from './tabs/Browse'
    import Library from './tabs/Library'
    import Bookmarks from './tabs/Bookmarks'
    import Profile from './tabs/Profile'
    import { registerNativeViewElement } from 'svelte-native/dom' 

    registerNativeViewElement("cardView", () => 
        require("@nstudio/nativescript-cardview").CardView
    )

    let selectedTab = 0
    let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)\w*)\s*/
    
    let trumpRegExp = /\s*(\w*((T|t|)rump)|((D|d)onald)|(POTUS)\w*)\s*/

    const appSettings = require('tns-core-modules/application-settings')

    const updateData = () =>{
        console.log('*** UPDATING DATA ***')
        let headlinesList = []
        let everythingList = []
        
        const topHeadlines = `https://newsapi.org/v2/top-headlines?country=${$country}&apiKey=${api_key}`
        //const everything = `https://newsapi.org/v2/everything?domains=${SourceService.trimURLSource(item.url)}&apiKey=${api_key}`
        
        fetch(topHeadlines)
            .then( headlinesList => headlinesList.json() )
            .then( headlinesList => {
                $articles = headlinesList.articles
                $todaysArticles = $articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
                
                let filteredTitleList = []

                if($covid19Filter == true){
                    filteredTitleList = headlinesList.articles.filter( a => !coronaRegExp.test(a.title))
                    $articles = filteredTitleList.filter( a => !coronaRegExp.test(a.description)) 

                    $todaysArticles = $articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
                }
                
                if($trumpFilter == true){
                    filteredTitleList = headlinesList.articles.filter( a => !trumpRegExp.test(a.title))
                    $articles = filteredTitleList.filter( a => !trumpRegExp.test(a.description)) 
                    
                    $todaysArticles = $articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
                } 
            })
            .catch( error => console.log(error) )
    }

    $:{
        $filterComponent = false
        $articlesCollapse = false
        $thereAreNoSources = false
        console.log($thereAreNoSources)
        console.log(selectedTab)
    }

    onMount(async () => {
        let userHasEnabeledFiltering = false
    
        if(appSettings.getBoolean('default-covid19')){
            $covid19Value = appSettings.getBoolean('default-covid19')
            userHasEnabeledFiltering = true
        }
        if(appSettings.getBoolean('default-trump')){
            $trumpValue = appSettings.getBoolean('default-trump')
            userHasEnabeledFiltering = true
        }
        if(appSettings.getBoolean('default-newest')){
            $newestValue = appSettings.getBoolean('default-newest')
            userHasEnabeledFiltering = true
        }
        if(appSettings.getBoolean('default-popular')){
            $popularValue = appSettings.getBoolean('default-popular')
            userHasEnabeledFiltering = true
        }
        if(appSettings.getString('default-countryCode')){
            $countryCode = appSettings.getString('default-countryCode')
            $countryName  = appSettings.getString('default-countryName')
            userHasEnabeledFiltering = true
        }

        if(userHasEnabeledFiltering == false){
            ApiService.getTopHeadlinesData().then((res)=>{
                $articles = res.articles
                $todaysArticles = res.articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
            })
        }else{
            updateData()
        }
    
        ApiService.getNewspaperData().then((res)=>{
                $sources = res.sources
            })
        $libraryList = await LocalStorage.getCompleteLibraryList()
        $bookmarkList = await LocalStorage.getBookmarks()
        $savedSources = LocalStorage.getLibraryListLTE()
    }) 

    const resetSources = () => {
        ApiService.getNewspaperData().then((res)=>{
                $sources = res.sources
            })
    }

</script>

<page actionBarHidden={true}>
    <tabs bind:selectedIndex={selectedTab} tabsPosition="bottom">
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
                <Profile/>
            </gridLayout>
        </tabContentItem>
    </tabs>
</page>

<style>
    TabStrip {
        background-color: white;
        selected-item-color: black;
        un-selected-item-color: lightgray;
        highlight-color: #C8A374;
    }
</style>
