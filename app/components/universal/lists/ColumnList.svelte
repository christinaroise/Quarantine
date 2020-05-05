<script>
    import { ArticleService } from '~/services/ArticleService'
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
                <stackLayout
                width="50%">
                    <SecondaryCardSmall
                    onTap={cardOnTap}
                    imgSrc={item.urlToImage}
                    title={ArticleService.trimTitleMax(item.title) + '...'}
                    author={ArticleService.trimAuthor(item.author)}
                    subtitle={ArticleService.trimAuthor(item.author)}/>
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
</style>