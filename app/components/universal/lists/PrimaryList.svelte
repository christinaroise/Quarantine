<script>
    import { closeModal } from 'svelte-native'
    import { ModalService } from '~/services/ModalService'
    import { ArticleService } from '~/services/ArticleService'
    import { inModal } from '~/services/store'
    import PrimaryCard from '~/components/universal/cards/PrimaryCard'
    //`https://logo.clearbit.com/${SourceService.trimURL(source.url)}`
    
    export let items

    function openArticle(item){
        if($inModal == true){
            closeModal()
            let modalClosed = true
            if(modalClosed){
                ModalService.showArticle(item)
            }
        }if($inModal == false){
            ModalService.showArticle(item)
        }
    }

</script>

<stackLayout>
    <scrollView scrollBarIndicatorVisible={false}>
      <stackLayout class="listContainer backgroundcolorWhite">
          {#each items as item}
                <PrimaryCard 
                btnTitle={'Like'}
                onTap={() => openArticle(item)}
                imgSrc={item.urlToImage}
                tagName={item.source.name}
                title={ArticleService.trimTitleMin(item.title) + '...'}
                subtitle={ArticleService.trimAuthor(item.author)}
                description={item.description}/>
            {:else}
                <activityIndicator busy={true} />
            {/each}
      </stackLayout>
    </scrollView>
</stackLayout>


<style>
    .listContainer{
        width: 100%;
        justify-content: flex-end;
    }
</style>