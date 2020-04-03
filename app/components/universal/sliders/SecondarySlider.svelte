<script>
    import { ArticleService } from '~/services/ArticleService'
    import SecondaryCardSmall from '~/components/universal/cards/SecondaryCardSmall'

    export let header
    export let items

    export let cardOnTap

</script>

<stackLayout>
    <label class="h2 timesNewRoman marginLeft" text={header}/>
    <scrollView orientation="horizontal" scrollBarIndicatorVisible={false}>
        <stackLayout orientation="horizontal" class='marginRight'>  
            {#each items as item}
                <SecondaryCardSmall 
                onTap={cardOnTap}
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