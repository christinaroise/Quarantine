<script>
    import { ModalService } from '~/services/ModalService'
    import { ArticleService } from '~/services/ArticleService'
    import SecondaryCardSmall from '~/components/universal/cards/SecondaryCardSmall'

    export let header
    export let items

</script>

<stackLayout>
    <label class="h2 timesNewRoman marginLeft" text={header}/>
    <scrollView orientation="horizontal" scrollBarIndicatorVisible={false}>
        <stackLayout orientation="horizontal" class=' slider marginRight'>  
            {#each items as item}
                <!--onTap is not yet universal-->
                <SecondaryCardSmall 
                onTap={() => ModalService.showArticle(item)}
                imgSrc={item.urlToImage}
                tagName={item.source.name}
                title={ArticleService.trimTitleMax(item.title) + '...'}
                subtitle={ArticleService.trimAuthor(item.author)}/>
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </stackLayout>
    </scrollView>
</stackLayout>

<style>
    .slider{
        height: 200;
    }
</style>