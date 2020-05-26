<script>
    import { filterComponent, articles, todaysArticles, categories, dashboardFilterIsActive} from '~/services/stores/store.js'
    import MainList from '~/components/universal/lists/MainList'
    import TodaysWeather from '../components/weather/TodaysWeather'
    import Slider from '~/components/universal/sliders/Slider'
    import SliderSmall from '~/components/universal/sliders/SliderSmall'
    import FilterBar from '../components/universal/bars/FilterBar'

    function setToDefault(){
        $filterComponent = false
    }
    $dashboardFilterIsActive = true
    //If dashboard filter is active, then dashboard it self is hidden, while a list of articles in shown. This list is filtered by what category is tapped. 

</script>

<stackLayout>
    <cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
        <stackLayout class="backgroundcolorWhite">
            <flexBoxLayout class="topBarWrapper">
                <label 
                on:tap={() => setToDefault()}
                class="h1 header montserrat" 
                text="NEWS"/>
                <!--
                <flexBoxLayout class="icons">
                    <image width="30" src="~/assets/icons/shield.png" class="fas icon1"/>
                    <image width="30" src='~/assets/icons/location.png' class="fas iconGlobal"/>
                </flexBoxLayout>
                -->
            </flexBoxLayout>
            <FilterBar 
            bind:value={$articles}
            bind:setDashValue={$dashboardFilterIsActive}/>
        </stackLayout>
    </cardView>

    <stackLayout class="wrapperDash">
        <scrollView 
        scrollBarIndicatorVisible={false}>
            {#if $filterComponent == true  && $articles.length > 0}
            <!-- This is what you see when you activate the filter function (which is done by tapping the buttons in FilterBar) -->
                <MainList
                class="heightAuto"
                items={$articles}/>
            {:else if $filterComponent == false && $articles.length > 0}
            <!-- This is what you see when you first start the app -->
                <stackLayout class="heightAuto">
                    <TodaysWeather/>
                    <Slider
                    header='Recommended'
                    items={$articles}/> 
                    <SliderSmall 
                    header="Today's news"
                    items={$todaysArticles}/> 
                </stackLayout>
            {/if}
        </scrollView>
    </stackLayout>
</stackLayout>    

<style>
    cardView{
        z-index: 10;
    }
    .backgroundcolorWhite{
        background-color: white;
    }
    .topBarWrapper{
        height: 80;
        margin-left: 15;
        vertical-align: bottom;
    }
    .header{
        margin-top: 35;
        font-size: 24;
        font-weight: 800;
    }
    .wrapperDash{
        background-color: white;
    }

</style>