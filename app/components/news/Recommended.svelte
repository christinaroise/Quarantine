<script>
    import { onMount } from 'svelte'
    import { showModal } from 'svelte-native'
    import { ArticleService } from '~/services/ArticleService'
    import { FilterService } from '~/services/FilterService'
    import { ApiService } from '~/services/ApiService'
    import Article from '~/modals/Article'

    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
    const api_key = 'f015a847676d491f9b581d535c9361ac' 
     // 'dc4286d2d7a04d47bb2ca997c66ecc73' 
     // 'e840db49fb1f48c99a39a73ddf05c0a4' 

    let articles = [] 

    onMount(() => {
        ApiService.get(`https://newsapi.org/v2/top-headlines?country=${FilterService.getCountryValue()}&apiKey=${api_key}`).then(result => {
            articles = result.articles
        }) 
    })

    const showArticle = async (article) => {
        await showModal(
            {
                page: Article,
                props:{
                    article:article
                }
            }
        )
    }

</script>

<stackLayout>
    <label class="h2 timesNewRoman marginLeft" text="Recommended"/>
    <scrollView orientation="horizontal" scrollBarIndicatorVisible={false}>
        <stackLayout orientation="horizontal" class='marginRight'>  
            {#each articles as article}
                <stackLayout 
                on:tap={ () => showArticle(article)} 
                class='article'>
                    <absoluteLayout>
                        <image class='image rounded' width="235" height='140' src='{article.urlToImage}' alt='cover' stretch='aspectFill' />
                        <label class="sourceTag body timesNewRoman" text='{article.source.name}'/>
                    </absoluteLayout>
                    <flexBoxLayout class="infoWrapper">
                        <stackLayout class="articleInfo">
                            <label textWrap="{true}" class='h4 timesNewRoman' text='{ArticleService.trimTitle(article.title)}...' />
                            <label class='body timesNewRoman' text='{ArticleService.trimAuthor(article.author)}'/>
                        </stackLayout>
                        <stackLayout>
                            <label class="articleDate timesNewRoman" text='{ArticleService.formatDate(article.publishedAt)}'/>
                        </stackLayout>
                    </flexBoxLayout>
                </stackLayout>
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </stackLayout>
    </scrollView>
</stackLayout>

<style>
    .h2{
        font-weight: 600;
    }
    .article{
        width: 235;
        margin-left: 15;
        justify-content: space-between;
        background-color: white;
        border-radius: 5%;
    }
    .sourceTag{
        background-color: #C8A374;
        color: white;
        font-size: 12;
        margin: 10;
        padding: 2 10;
        border-radius: 5%;
    }
    .infoWrapper{
        padding-top: 5;
    }
    .articleInfo{
        width: 75%;
    }
    .articleDate{
        color: #C8A374;
        text-align: right;
        font-size: 12;
        font-weight: 500;
    }
</style>