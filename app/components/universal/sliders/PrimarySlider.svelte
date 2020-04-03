<script>
    import { ArticleService } from '~/services/ArticleService'
    import PrimaryCardSmall from '~/components/universal/cards/PrimaryCardSmall'

    export let header
    export let items
    export let cardOnTap

</script>

<stackLayout>
    <label class="h2 timesNewRoman marginLeft" text="{header}"/>
    <scrollView orientation="horizontal" scrollBarIndicatorVisible={false}>
        <stackLayout orientation="horizontal" class='marginRight'>  
            {#each items as item}
            { console.log(item) }
                <PrimaryCardSmall
                onTap={cardOnTap}
                imgSrc={item.urlToImage}
                tagName={item.source.name}
                title={ArticleService.trimTitleMed(item.title) + '...'}
                subtitle={ArticleService.trimAuthor(item.author)}/>
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </stackLayout>
    </scrollView>
</stackLayout>

<style>
    .h2{
        font-weight: 600;
    }
</style>