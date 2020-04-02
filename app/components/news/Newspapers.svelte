<script>
    import { onMount } from 'svelte'
    import { showModal } from 'svelte-native'
    import { SourceService } from '~/services/SourceService'
    import { ApiService } from '~/services/ApiService'
    import Newspaper from '~/modals/Newspaper'

   // const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
    const api_key = 'e840db49fb1f48c99a39a73ddf05c0a4' // 'dc4286d2d7a04d47bb2ca997c66ecc73'

    let sources = []
    let articles = []

    onMount(() => {
        ApiService.get(`https://newsapi.org/v2/sources?apiKey=${api_key}`).then(result => {
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
      <stackLayout  class="newspaperContainer">
          {#each sources as source}
                <stackLayout class="newspaperCover">
                    <stackLayout 
                    on:tap={ () => showNewspaper(source)}
                    class="imageContainer">
                        <image class='imageWhite rounded' height="100%" src='https://logo.clearbit.com/{SourceService.trimURL(source.url)}' alt='cover' stretch='aspectFit' />
                    </stackLayout>
                    <flexBoxLayout class="textContainer">
                        <label textWrap="{true}" class="h2 white title timesNewRoman" text='{source.name}' />
                        <stackLayout class="height">
                            <image class='icon' width="20" src='~/assets/icons/addWhite.png'/>
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
    .newspaperContainer{
        width: 100%;
        background-color: aqua;
        padding: 0 15;
        justify-content: flex-end;
    }
    .newspaperCover{
        width: 150;
        padding: 15;
    }
    .title{
        flex: 3;
    }
    .height{
        height: 30;
        margin: 8 0;
        vertical-align: center;
    }
    .imageContainer{
        height: 170;
        width: 100%;
    }
    .h2{
        flex: 2;
        padding-right: 5;
    }
</style>