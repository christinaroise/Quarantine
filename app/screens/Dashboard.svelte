<script>
    import { filterComponent, articles } from '~/services/stores.js'
    import { showModal } from 'svelte-native'
    import { ApiService } from '~/services/ApiService'
    import { ArticleService } from '~/services/ArticleService'
    import { FilterService } from '~/services/FilterService'
    import PrimaryList from '~/components/universal/lists/PrimaryList'
    import TodaysWeather from '../components/weather/TodaysWeather'
    import PrimarySlider from '~/components/universal/sliders/PrimarySlider'
    import SecondarySlider from '~/components/universal/sliders/SecondarySlider'
    import FilterBar from '../components/universal/bars/FilterBar'

    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')

    let todaysArticles = []

    function setToDefault(){
        $filterComponent = false
    }

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
           <!-- <FilterBar bind:value={$articles.json()}/> --> 
        </stackLayout>
    </cardView>

    <stackLayout class="wrapperDash">
        <scrollView scrollBarIndicatorVisible={false}>
            {#if $filterComponent == true  && JSON.parse($articles.length > 0)}
                <PrimaryList
                items={$articles}/>
            {:else if $filterComponent == false && JSON.parse($articles.length > 0)}
                <stackLayout>
                    <TodaysWeather/>
                    <PrimarySlider
                    header='Recommended'
                    items={JSON.parse($articles)}/>
                    <SecondarySlider 
                    header="Today's news"
                    items={JSON.parse($articles)}/>
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