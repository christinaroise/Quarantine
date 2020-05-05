<script>
    import { ModalService } from '~/services/ModalService'
    import { ArticleService } from '~/services/ArticleService'
    import SecondaryCardSmall from '~/components/universal/cards/SecondaryCardSmall'

    export let header
    export let items

</script>

<stackLayout>
    <label class="h2 timesNewRoman marginLeft" text={header}/>
    <scrollView 
    orientation="horizontal" 
    scrollBarIndicatorVisible={false}>
        <stackLayout orientation="horizontal" class='widthAuto paddingRight'>  
            {#each items as item}
                <!--onTap is not yet universal-->
                <stackLayout
                class="paddingLeft">
                    <SecondaryCardSmall 
                    onTap={() => ModalService.showArticle(item)}
                    imgSrc={item.urlToImage}
                    tagName={item.source.name}
                    title={ArticleService.trimTitleMax(item.title)}
                    subtitle={ArticleService.trimAuthor(item.author)}/>
                </stackLayout>
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </stackLayout>
    </scrollView>
</stackLayout>