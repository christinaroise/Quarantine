<script>
    import { filterComponent } from '~/services/stores.js'
    import {onMount} from 'svelte'
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
    
    const api_key = 'f015a847676d491f9b581d535c9361ac'
     //'dc4286d2d7a04d47bb2ca997c66ecc73' 
     // 'e840db49fb1f48c99a39a73ddf05c0a4' 

    let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)\w*)\s*/
    let articles = []  

    onMount(() => {
        ApiService.get(`https://newsapi.org/v2/top-headlines?country=${FilterService.getSelectedCountry()}&apiKey=${api_key}`).then(result => {
            articles = result.articles
            if(FilterService.isCovidEnabled == true){
                console.log('********************************')
                console.log(isCovidEnabled)
                articles = articles.filter( a => !coronaRegExp.test(a.title))
                articles = articles.filter( a => !coronaRegExp.test(a.description)) 
            }
        }) 
    }) 

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
            <FilterBar bind:value={articles}/>
        </stackLayout>
    </cardView>

    <stackLayout class="wrapperDash">
        <scrollView scrollBarIndicatorVisible={false}>
            {#if $filterComponent == true}
                <PrimaryList
                items={articles}/>
            {:else if $filterComponent == false}
                <stackLayout>
                    <TodaysWeather/>
                    <PrimarySlider
                    header='Recommended'
                    items={articles}/>
                    <SecondarySlider 
                    header="Today's news"
                    items={articles}/>
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