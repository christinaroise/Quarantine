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
                // articles = articles.filter( a => !coronaRegExp.test(a.title))
                // articles = articles.filter( a => !coronaRegExp.test(a.description))
            })
            .catch( error => console.log(error) )
    } 

    function trimTitle(title){
        let string = title;  
        let length = 35;
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

    function formatDate(date) {
        let str = date;
        let month = ""
        let day = ""

        str = str.replace("T","-")

        const res = str.split("-");
        const monthNumberValue = parseInt(res[1])
        const dayNumberValue = parseInt(res[2])

        switch (dayNumberValue)
            {
            case 1:
                day = dayNumberValue + 'st'
                break;
            case 2:
                day = dayNumberValue + 'nd'
                break;
            case 3:
                day = dayNumberValue + 'rd'
                break;
            case 4:
                day = dayNumberValue + 'th'
                break;    
            case 5:
                day = dayNumberValue + 'th'
                break;    
            case 6:
                day = dayNumberValue + 'th'
                break; 
            case 7:
                day = dayNumberValue + 'th'
                break;
            case 8:
                day = dayNumberValue + 'th'
                break;
            case 9:
                day = dayNumberValue + 'th'
                break;
            case 10:
                day = dayNumberValue + 'th'
                break;
            case 11:
                day = dayNumberValue + 'th'
                break;
            case 12:
                day = dayNumberValue + 'th'
                break;
            case 13:
                day = dayNumberValue + 'th'
                break;
            case 14:
                day = dayNumberValue + 'th'
                break;
            case 15:
                day = dayNumberValue + 'th'
                break;
            case 16:
                day = dayNumberValue + 'th'
                break;
            case 17:
                day = dayNumberValue + 'th'
                break;
            case 18:
                day = dayNumberValue + 'th'
                break;
            case 19:
                day = dayNumberValue + 'th'
                break;
            case 20:
                day = dayNumberValue + 'th'
                break;
            case 21:
                day = dayNumberValue + 'st'
                break;
            case 22:
                day = dayNumberValue + 'nd'
                break;
            case 23:
                day = dayNumberValue + 'rd'
                break;
            case 24:
                day = dayNumberValue + 'th'
                break;
            case 25:
                day = dayNumberValue + 'th'
                break;
            case 26:
                day = dayNumberValue + 'th'
                break;
            case 27:
                day = dayNumberValue + 'th'
                break;
            case 28:
                day = dayNumberValue + 'th'
                break;
            case 29:
                day = dayNumberValue + 'rd'
                break;
            case 30:
                day = dayNumberValue + 'th'
                break;
            case 31:
                day = dayNumberValue + 'st'
                break;
            default:  
            }
  
        switch (monthNumberValue)
            {
            case 1:
                month = 'Jan'
                break
            case 2:
                month = 'Feb'
                break
            case 3:
                month = 'March'
                break
            case 4:
                month = 'April'
                break
            case 5:
                month = 'May'
                break
            case 6:
                month = 'June'
                break
            case 7:
                month = 'July'
                break
            case 8:
                month = 'Aug'
                break
            case 9:
                month = 'Sept'
                break
            case 10:
                month = 'Oct'
                break
            case 11:
                month = 'Nov'
                break
            case 12:
                month = 'Dec'
                break
            }

        return month + " " + day
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
                <image class='image rounded' width="235" height='140' src='{article.urlToImage}' alt='cover' stretch='aspectFill' />
                <label class="sourceTag body" text='{article.source.name}'/>
            </absoluteLayout>
            <flexBoxLayout class="infoWrapper">
                <stackLayout class="articleInfo">
                    <label textWrap="{true}" class='h3' text='{trimTitle(article.title)}...' />
                    <label class='body' text='{trimAuthor(article.author)}'/>
                </stackLayout>
                <stackLayout class="articleDate">
                    <label text='{formatDate(article.publishedAt)}'/>
                </stackLayout>
            </flexBoxLayout>
        </stackLayout>
    {:else}
        <activityIndicator busy={true} />
    {/each}
</stackLayout>

<style>
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
    .h3{
        font-weight: 500;
        font-size: 16;
        line-height: 2;
        color: #232323;
    }
    .articleDate{
        color: #C8A374;
        text-align: right;
        font-size: 12;
        font-weight: 500;
    }
</style>