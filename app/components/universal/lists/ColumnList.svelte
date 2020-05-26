<script>
    import { ArticleService } from '~/services/ArticleService'
    import { ModalService } from '~/services/ModalService'
    import CardSmall from '~/components/universal/cards/CardSmall'
    import ErrorContainer from '~/components/universal/containers/ErrorContainer'

    let sources = []
    
    export let items

    //This container is used in Bookmarks where articles appear in a column list. I've chosen not to use listView for now as that does not give me a column list. 
    
</script>

<stackLayout>
    <scrollView
    scrollBarIndicatorVisible={false}>
        <wrapLayout class='listContainer backgroundcolorWhite'>  
            {#each items as item}
                <stackLayout width="50%">
                    <CardSmall
                    onTap={() => ModalService.showArticle(item)}
                    imgSrc={item.urlToImage}
                    title={ArticleService.trimTitleMax(item.title) + '...'}
                    author={ArticleService.trimAuthor(item.author)}
                    subtitle={ArticleService.trimAuthor(item.author)}
                    tagName={item.source.name}/>
                </stackLayout>
            {:else}
                <ErrorContainer title="Looking for data"/>
            {/each}
        </wrapLayout>
    </scrollView>
</stackLayout>



<style>
    .listContainer{
        width: auto;
        vertical-align: center;
    }
</style>