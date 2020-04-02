<script>
    import { onMount } from 'svelte'
    import { showModal } from 'svelte-native'
    import { ArticleService } from '~/services/ArticleService'
    import { ApiService } from '~/services/ApiService'
    import Article from '~/modals/Article'

    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
    const api_key = 'e840db49fb1f48c99a39a73ddf05c0a4' // 'dc4286d2d7a04d47bb2ca997c66ecc73'

    let articles = []

    onMount(() => {
        ApiService.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`).then(result => {
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
    <label class="h2 timesNewRoman marginLeft" text="Today's News"/>
    <scrollView orientation="horizontal" scrollBarIndicatorVisible={false}>
        <stackLayout orientation="horizontal" class='marginRight'>  
            {#each articles as article}
                <stackLayout 
                on:tap={ () => showArticle(article)} 
                class='article'>
                <absoluteLayout>
                        <image class='image rounded' width="166" height='100' src='{article.urlToImage}' alt='cover' stretch='aspectFill' />
                        <label class="sourceTag body" text='{article.source.name}'/>
                    </absoluteLayout>
                    <stackLayout>
                        <label textWrap="{true}" class='h4 timesNewRoman' text='{ArticleService.trimTitle(article.title)}...'/>
                        <label class='body timesNewRoman' text='{ArticleService.trimAuthor(article.author)}'/>
                    </stackLayout>
                </stackLayout>
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </stackLayout>
    </scrollView>
</stackLayout>

<style>
    .article{
        width: 166;
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

</style>