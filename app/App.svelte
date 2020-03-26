<script>
import Dashboard from './pages/Dashboard'
import Pinned from './pages/Pinned'
import Bookmarks from './pages/Bookmarks'
import Profile from './pages/Profile'
import './style/BoxShadow.js'

</script>

<page>
    <actionBar title="" flat="true"/>
    <bottomNavigation>
        <tabStrip>
            <tabStripItem>
                <image src="font://&#xf015;" class="fas t-36"/>
            </tabStripItem>
            <tabStripItem>
                <image src="font://&#xf5da;"  class="fas t-36"/>
            </tabStripItem>
            <tabStripItem>
                <image src="font://&#xf02e;"  class="fas t-36"/>
            </tabStripItem>
            <tabStripItem>
                <image src="font://&#xf007;" class="fas t-36"/>
            </tabStripItem>
        </tabStrip>

        <tabContentItem>
            <gridLayout>
                <Dashboard/>
            </gridLayout>
        </tabContentItem>
        <tabContentItem>
            <gridLayout>
                <Pinned/>
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
    border: none;
}
 
</style>
