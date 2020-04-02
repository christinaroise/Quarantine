<script>
    import { showModal } from 'svelte-native'
    import { ApiService } from '~/services/ApiService'
    import { ArticleService } from '~/services/ArticleService'
    import ArticlesFullWidth from '../components/news/ArticlesFullWidth'
    import TodaysWeather from '../components/weather/TodaysWeather'
    import Recommended from '../components/news/Recommended'
    import TodaysNews from '../components/news/TodaysNews'
    import FilterBar from '../components/universal/FilterBar'
    import FilteredArticles from '~/modals/FilteredArticles'

    const utilsModule = require('tns-core-modules/utils/utils')

    const api_key = 'e840db49fb1f48c99a39a73ddf05c0a4' // 'dc4286d2d7a04d47bb2ca997c66ecc73'

    let articles = [] 
    let filterFunction = false

    export const DashboardFunctions = {
        setToDefault: function(){
            filterFunction = false
        }
    }

</script>

<stackLayout>
    <cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
        <stackLayout class="backgroundcolorWhite">
            <flexBoxLayout class="topBarWrapper">
                <label class="h1 header montserrat" text="NEWS"/>
                <!--
                <flexBoxLayout class="icons">
                    <image width="30" src="~/assets/icons/shield.png" class="fas icon1"/>
                    <image width="30" src='~/assets/icons/location.png' class="fas iconGlobal"/>
                </flexBoxLayout>
                -->
            </flexBoxLayout>
            <FilterBar bind:value={articles} bind:categoryIsTapped={filterFunction}/>
        </stackLayout>
    </cardView>
        
    <stackLayout class="wrapperDash">
        <scrollView scrollBarIndicatorVisible={false}>
            {#if filterFunction == true}
                    <stackLayout class="articles">  
                        {#each articles as article}
                            <ArticlesFullWidth 
                            articleImgSrc={article.urlToImage}
                            articleTitle={ArticleService.trimTitleMin(article.title)}
                            articleAuthor={ArticleService.trimAuthor(article.author)}
                            articleDescription={article.description}/>
                        {:else}
                             <activityIndicator busy={true} />
                        {/each}
                    </stackLayout>
            {:else if filterFunction == false}
                 <stackLayout>
                    <TodaysWeather/>
                    <Recommended />
                    <TodaysNews/>
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
        height: 70;
        margin-left: 15;
        vertical-align: bottom;
    }
    .header{
        margin-top: 25;
        font-size: 24;
        font-weight: 800;
    }
    .wrapperDash{
        margin-bottom: 10;
        background-color: white;
    }

</style>