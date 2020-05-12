<script>
import { onMount } from 'svelte'
import { navigate }  from 'svelte-native'
import { ApiService } from '~/services/ApiService'
import { ArticleService } from '~/services/ArticleService'
import {
    filterComponent, 
    dashboardFilterIsActive, 
    libraryFilterIsActive, 
    articles,
    todaysArticles, 
    sources, 
    newspaperList, 
    sourceList, 
    bookmarkList} from '~/services/store.js'
import { LocalStorage } from '~/services/LocalStorage'

import Dashboard from './screens/Dashboard'
import Browse from './screens/Browse'
import Library from './screens/Library'
import Bookmarks from './screens/Bookmarks'
import Profile from './screens/Profile'

import { registerNativeViewElement } from 'svelte-native/dom' 

registerNativeViewElement("cardView", () => 
    require("@nstudio/nativescript-cardview").CardView
)

let selectedTab = 0

$: {
    $filterComponent = false
    console.log(selectedTab)
    }

onMount(async () => {
    ApiService.getTopHeadlinesData().then((res)=>{
        $articles = res.articles
        $todaysArticles = res.articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
        /* $articles.forEach(function (element) {
            element.favorite = false;
            console.log(element)
        });
        $todaysArticles.forEach(function (element) {
            element.favorite = false;
        }); */
    })

    ApiService.getNewspaperData().then((res)=>{
        $sources = res.sources
        /* $sources.forEach(function (element) {
            element.favorite = false;
        }); */
    })
    $newspaperList = await LocalStorage.getLibraryList()
    $bookmarkList = await LocalStorage.getBookmarks()
    //theres an error in sourceList
    $sourceList = await LocalStorage.getLibraryList()
}) 

</script>

<page actionBarHidden={true}>
    <bottomNavigation bind:selectedIndex={selectedTab}>
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
    </bottomNavigation>
</page>

<style>
    tabStripItem{
        background-color: white;
        highlight-color:black;
    }
</style>
