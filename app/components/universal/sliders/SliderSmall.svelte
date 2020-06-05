<script>
    import { ModalService } from '~/services/ModalService';
    import { ArticleService } from '~/services/ArticleService';
    import CardSmall from '~/components/universal/cards/CardSmall';
    import ErrorContainer from '~/components/universal/containers/ErrorContainer';

    export let title;
    export let items;

    //This is just a smaller version of the main slider but with small size cards. It is mainly used as the "Todays news" component.

</script>

<stackLayout>
    <label 
    class="h2 timesNewRoman marginLeft" 
    text={title}/>
    <scrollView 
    orientation="horizontal" 
    scrollBarIndicatorVisible={false}>
        <stackLayout 
        orientation="horizontal" 
        class='widthAuto paddingRight'>  
            {#each items as item}
                <stackLayout
                class="paddingLeft">
                    <CardSmall 
                    onTap={() => ModalService.showArticle(item)}
                    imgSrc={item.urlToImage}
                    tagName={item.source.name}
                    title={ArticleService.trimTitleMax(item.title)}
                    subtitle={ArticleService.trimAuthor(item.author)}/>
                </stackLayout>
            {:else}
                <ErrorContainer
                title="Looking for data"/>
            {/each}
        </stackLayout>
    </scrollView>
</stackLayout>