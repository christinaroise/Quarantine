<script>
    import { ModalService } from '~/services/ModalService'
    import { ArticleService } from '~/services/ArticleService'
    import PrimaryCard from '~/components/universal/cards/PrimaryCard'
    //`https://logo.clearbit.com/${SourceService.trimURL(source.url)}`
    
    export let items
</script>

<stackLayout>
    <scrollView scrollBarIndicatorVisible={false}>
      <stackLayout class="listContainer backgroundcolorWhite">
          {#each items as item}
                <PrimaryCard 
                btnTitle={'Like'}
                onTap={() => ModalService.showArticle(item)}
                imgSrc={item.urlToImage}
                tagName={item.source.name}
                title={ArticleService.trimTitleMin(item.title) + '...'}
                subtitle={ArticleService.trimAuthor(item.author)}
                text={item.description}/>
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