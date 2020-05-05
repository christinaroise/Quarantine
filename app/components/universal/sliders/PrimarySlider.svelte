<script>
    import { ArticleService } from '~/services/ArticleService'
    import { ModalService } from '~/services/ModalService'
    import PrimaryCardSmall from '~/components/universal/cards/PrimaryCardSmall'

    export let header 
    export let items
    export let onTapIcon
    export let imgSrc

</script>

<stackLayout>
    <flexBoxLayout class="titleBar">
        <label class="h2 timesNewRoman marginLeft" text="{header}"/>
        <flexBoxLayout 
        class="iconContainer"
        on:tap={onTapIcon}>
            <image 
            height="30" width="20" class="icon"
            src={imgSrc}/>
        </flexBoxLayout>
    </flexBoxLayout>
    <scrollView 
    orientation="horizontal" 
    scrollBarIndicatorVisible={false}>
        <stackLayout orientation="horizontal" class='widthAuto paddingRight'>  
            {#each items as item}
                <PrimaryCardSmall
                onTap={() => ModalService.showArticle(item)}
                imgSrc={item.urlToImage} 
                tagName={item.source.name}
                title={ArticleService.trimTitleMed(item.title) + '...'}
                date={ArticleService.formatDate(item.publishedAt)}
                subtitle={ArticleService.trimAuthor(item.author)}
                />
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </stackLayout>
    </scrollView>
</stackLayout>

<style>
    .titleBar > label{
        flex: 1;
    }
    .iconContainer{
        margin-right: 15;
        height: 30;
    }
    .icon{
        filter: invert(92%) sepia(0%) saturate(218%) hue-rotate(186deg) brightness(91%) contrast(96%);
    }
    .h2{
        font-weight: 600;
    }
</style>