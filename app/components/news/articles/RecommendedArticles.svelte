<script>
    import { onMount } from 'svelte'
    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    const api_key = 'dc4286d2d7a04d47bb2ca997c66ecc73'

    let articles = []

        const getData = () => {
            articles = []
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
            fetch(url)
                .then( response => response.json() )
                .then( json => {
                    articles = json.articles
                    articles = articles.filter( a => !coronaRegExp.test(a.title))
                    articles = articles.filter( a => !coronaRegExp.test(a.description))
                })
                .catch( error => console.log(error) )
        } 

    onMount(() => {
        getData()
    })


</script>

<stackLayout orientation="horizontal" class='articles'>  
    {#each articles as article}
        <stackLayout class='article'>
            <image class='image rounded' height='150' src='{article.urlToImage}' alt='cover' stretch='aspectFill' />
            <flexBoxLayout>
                <stackLayout class="articleInfo">
                    <label textWrap="{true}" class='h3' text='{article.title}' />
                    <label class='body' text='{article.author}'/>
                </stackLayout>
                <label class="articleDate" text='{article.publishedAt}'/>
            </flexBoxLayout>
        </stackLayout>
    {:else}
        <activityIndicator busy={true} />
    {/each}
</stackLayout>

<style>
    .article{
        width: 225;
        height: auto;
        margin-right: 10;
        justify-content: space-between;
        background-color: white;
        border-radius: 5%;
    }
    .articleInfo{
        flex: 1;
        width: 90%;
    }
    .articleDate{
        flex: 1;
    }
    .image{
        background-color: lightgray;
    }

</style>