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

    let sourceList = []
    let newspaperList = [] 

    onMount(async () => {
        if(appSettings.getString("SavedNewspapers") == null || appSettings.getString("SavedNewspapers").length == 0){
            appSettings.setString("SavedNewspapers","[]")
        }

        let sourceListAsString = appSettings.getString("SavedNewspapers")
        sourceList = JSON.parse(sourceListAsString)
        for(var i = 0; i < sourceList.length; i++){
            var sourceName = ""
            var customObj = {}

            await ApiService.get(`https://newsapi.org/v2/everything?domains=${SourceService.trimURLSource(sourceList[i].url)}&apiKey=${api_key}`).then(result => {
                    if(sourceList[i] != "undefined" && sourceList[i].name.length > 0){
                        customObj.name = sourceList[i].name
                        customObj.articles = result.articles
                        newspaperList.push(customObj)
                    }
                }) 
        }
        newspaperList = newspaperList
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
        {#if sourceList}
            <scrollView scrollBarIndicatorVisible={false}>
                <stackLayout>
                    {#each newspaperList as newspaper}
                        <stackLayout class="container backgroundcolorWhite">
                            
                            <PrimarySlider
                            header={newspaper.name}
                            items={newspaper.articles}
                            />
                        </stackLayout>
                    {/each}
                </stackLayout>
            </scrollView>
        {:else}
            <EmptyContainer
            text="Your list is empty"/>
        {/if}
</stackLayout>

<style>
    .container{
        padding-top: 15;
    }
</style>