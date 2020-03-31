<script>
    import { onMount } from 'svelte'
    import { showModal } from 'svelte-native'
    import Article from '~/modals/Article'

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
                    articles = articles.filter(a => isCurrentDate(a.publishedAt))
                })
                .catch( error => console.log(error) )
        } 

    function isCurrentDate(date) {
        // console.log(date)
        var todaysDate = new Date()
        var str = date;
        str = str.replace("T","-")
        const res = str.split("-");
        // console.log(str)
        // console.log("Date is " + res[2])
        if(res[2] == todaysDate.getDate()){
            return true
        }else{
            return false
        }
        }
    function trimTitle(title){
        let string = title;    
        let length = 38;
        let trimmedString = string.substring(0, length); 
        
        return trimmedString
    }
    function trimAuthor(author){
        let string = author

        if(string == null){
            return "Author unknown"
        }else{
            const res = string.split(",")
            return res[0]
        }
    }

    onMount(() => {
        getData()
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

<stackLayout orientation="horizontal" class='articles'>  
    {#each articles as article}
        <stackLayout 
        on:tap={ () => showArticle(article)} 
        class='article'>
           <absoluteLayout>
                <image class='image rounded' width="166" height='100' src='{article.urlToImage}' alt='cover' stretch='aspectFill' />
                <label class="sourceTag body" text='{article.source.name}'/>
            </absoluteLayout>
            <stackLayout class="articleInfo">
                <label textWrap="{true}" class='h3' text='{trimTitle(article.title)}...' />
                <label class='body' text='{trimAuthor(article.author)}'/>
            </stackLayout>
        </stackLayout>
    {:else}
        <activityIndicator busy={true} />
    {/each}
</stackLayout>

<style>
    .article{
        width: 166;
        margin-left: 15;
        justify-content: space-between;
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
    .articleInfo{
        padding-top: 5;
        height: 120;
    }
    .h3{
        font-weight: 500;
        font-size: 16;
        color: #232323;
    }

</style>