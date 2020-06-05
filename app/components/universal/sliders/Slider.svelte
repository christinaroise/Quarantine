<script>
    import { ArticleService } from '~/services/ArticleService';
    import { ModalService } from '~/services/ModalService';
    import Card from '~/components/universal/cards/Card';
    import ErrorContainer from '~/components/universal/containers/ErrorContainer';

    export let title;
    export let onTapHeader;
    export let items;

    //This is just a primary slider with medium size cards. That is used in Dashboard and Library. 

    //The function in onTap does prevent this component from being 100% universal. I've chosen to leave it as is seeing as these sliders are meant for articles and not newspapers. However, if there comes a time where I'd like to use this slider elsewhere and with another on:tap function. I'd have to restructure the code. 
</script>

<stackLayout>
    <flexBoxLayout>
        <stackLayout on:tap={onTapHeader}>
            <label 
            class="h2 timesNewRoman marginLeft" 
            text="{title}"/>
        </stackLayout>
    </flexBoxLayout>
        <scrollView 
        orientation="horizontal" 
        scrollBarIndicatorVisible={false}>
            <stackLayout 
            orientation="horizontal" 
            class='widthAuto paddingRight'>  
                {#each items as item}
                    <Card
                    onTap={() => ModalService.showArticle(item)}
                    imgSrc={item.urlToImage} 
                    tagName={item.source.name}
                    title={ArticleService.trimTitle(item.title) + '...'}
                    date={ArticleService.formatDate(item.publishedAt)}
                    subtitle={ArticleService.trimAuthor(item.author)}
                    />
                {:else}
                    <ErrorContainer
                    title="Looking for data"/>
                {/each}
            </stackLayout>
    </scrollView>
</stackLayout>