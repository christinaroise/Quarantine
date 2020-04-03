<script>
    import { onMount } from 'svelte'
    import { showModal } from 'svelte-native'
    import { FilterService } from '~/services/FilterService'
    import { SourceService } from '~/services/SourceService'
    import { ApiService } from '~/services/ApiService'
    import Newspaper from '~/modals/Newspaper'
    import SecondaryCard from '~/components/universal/cards/SecondaryCard'

    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
   const api_key = 'f015a847676d491f9b581d535c9361ac' 
     // 'dc4286d2d7a04d47bb2ca997c66ecc73' 
     // 'e840db49fb1f48c99a39a73ddf05c0a4' 

    let sources = []
    let articles = []

    onMount(() => {
        ApiService.get(`https://newsapi.org/v2/sources?country=${FilterService.getCountryValue()}&apiKey=${api_key}`).then(result => {
            sources = result.sources
        })
    })


    const showNewspaper = async (source) => {
        ApiService.get(`https://newsapi.org/v2/everything?domains=${SourceService.trimURL(source.url)}&apiKey=${api_key}`).then(result => {
            console.log(result)
            articles = result.articles
            showModal(
                {
                    page: Newspaper,
                    props:{
                        source:source,
                        articles: result.articles
                    }
                },
            )
        })
    }
</script>

<stackLayout>
    <scrollView scrollBarIndicatorVisible={false}>
      <stackLayout class="newspaperContainer backgroundcolorWhite">
          {#each sources as source}
                <SecondaryCard 
                    onTap={ () => showNewspaper(source) }
                    btnTitle={'Follow'}
                    imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(source.url)}`}
                    title={source.name}
                    description={source.description}/> 
            {:else}
                <activityIndicator busy={true} />
            {/each}
      </stackLayout>
    </scrollView>
</stackLayout>


<style>
    .newspaperContainer{
        width: 100%;
        justify-content: flex-end;
    }
</style>