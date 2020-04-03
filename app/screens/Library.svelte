<script>
    import { onMount } from 'svelte'
    import { showModal } from 'svelte-native'
    import { ApiService } from '~/services/ApiService'
    import { FilterService } from '~/services/FilterService'
    import { ArticleService } from '~/services/ArticleService'

    import Recommended from '../components/news/Recommended'
    import TopBar from '../components/universal/bars/TopBar'
    import FilterBar from '../components/universal/bars/FilterBar'
    import PrimarySlider from '~/components/universal/sliders/PrimarySlider'
    import EmpytContainer from '../components/universal/containers/EmptyContainer'

        import Article from '~/modals/Article'

    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
    const api_key = 'f015a847676d491f9b581d535c9361ac' 
     // 'dc4286d2d7a04d47bb2ca997c66ecc73' 
     // 'e840db49fb1f48c99a39a73ddf05c0a4' 

    let sources = [] 
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
    <TopBar
    title="Library"/>
    <FilterBar/>
    <PrimarySlider
    items={sources}/>

</stackLayout>


  