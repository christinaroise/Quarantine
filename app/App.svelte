<script>
import Dashboard from './screens/Dashboard'
import Browse from './screens/Browse'
import Bookmarks from './screens/Bookmarks'
import Profile from './screens/Profile'
import './style/BoxShadow.js'

import { registerNativeViewElement } from 'svelte-native/dom'
 
registerNativeViewElement("cardView", () => 
    require("@nstudio/nativescript-cardview").CardView
)

let selectedTab = 0

</script>

<page actionBarHidden={true}>
    <bottomNavigation bind:selectedIndex={selectedTab}>
        <tabStrip>
            <tabStripItem>
                <image src="~/assets/icons/homeDark.png" class="fas t-36"/>
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
