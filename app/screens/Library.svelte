<script>
    import { onMount } from 'svelte'
    import { showModal } from 'svelte-native'
    import { ApiService } from '~/services/ApiService'
    import { FilterService } from '~/services/FilterService'
    import { SourceService } from '~/services/SourceService'
    import { ArticleService } from '~/services/ArticleService'

    import TopBar from '../components/universal/bars/TopBar'
    import FilterBar from '../components/universal/bars/FilterBar'
    import PrimarySlider from '~/components/universal/sliders/PrimarySlider'
    import EmptyContainer from '../components/universal/containers/EmptyContainer'

    import Article from '~/modals/Article'

    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
    const api_key = 'dc4286d2d7a04d47bb2ca997c66ecc73' 
     // 'e840db49fb1f48c99a39a73ddf05c0a4' 
     // 'f015a847676d491f9b581d535c9361ac' 

    let hasContent = true
    let sourceList = []
    let articles = [] 

    onMount(() => {
        let sourceListAsString = appSettings.getString("SavedNewspapers")
        sourceList = JSON.parse(sourceListAsString)

        for(var i = 0; i < sourceList.length; i++){
            ApiService.get(`https://newsapi.org/v2/everything?domains=${SourceService.trimURL(sourceList[i].url)}&apiKey=${api_key}`).then(result => {
            sourceList[i].articles = result.articles
            console.log(sourceList[i]);
            }) 
        }
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
        {#if hasContent}
                {#each sourceList as source}
                    <PrimarySlider
                    header={source.name}
                    items={articles}/>
                {/each}
        {:else}
            <EmptyContainer
            text="Your list is empty"/>
        {/if}
</stackLayout>
