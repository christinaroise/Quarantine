<script>
    import { closeModal } from 'svelte-native'
    import { ModalService } from '~/services/ModalService'
    import { ArticleService } from '~/services/ArticleService'
    import PrimaryCard from '~/components/universal/cards/PrimaryCard'
    
    export let items
    
</script>

<stackLayout>
    <scrollView
    scrollBarIndicatorVisible={false}>
      <stackLayout class="heightAuto listContainer backgroundcolorWhite">
          {#each items as item}
                <PrimaryCard 
                btnTitle={'Like'}
                onTap={() => ModalService.showArticle(item)}
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