<script>
    import { ArticleService } from '~/services/ArticleService'
    import { ModalService } from '~/services/ModalService'
    import SecondaryCardSmall from '~/components/universal/cards/SecondaryCardSmall'

    let sources = []
    
    export let cardOnTap
    export let items
    export let imgSrc
    
</script>

<stackLayout>
    <scrollView
    scrollBarIndicatorVisible={false}>
        <wrapLayout class='listContainer backgroundcolorWhite'>  
            {#each items as item}
                <stackLayout>
                    <flexBoxLayout 
                    class="iconContainer"
                    on:tap={() => ModalService.showBookmarkOptionsModal(item)}>
                        <image 
                        height="30" width="20" class="icon"
                        src={imgSrc}/>
                    </flexBoxLayout>
                    <stackLayout
                    width="50%">
                        <SecondaryCardSmall
                        onTap={() => ModalService.showArticle(item)}
                        imgSrc={item.urlToImage}
                        title={ArticleService.trimTitleMax(item.title) + '...'}
                        author={ArticleService.trimAuthor(item.author)}
                        subtitle={ArticleService.trimAuthor(item.author)}/>
                    </stackLayout>
                </stackLayout>
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </wrapLayout>
    </scrollView>
</stackLayout>


<style>
    .listContainer{
        width: auto;
        vertical-align: center;
    }
    .iconContainer{
        margin-right: 15;
        height: 30;
        justify-content: flex-end;
    }
</style>