<script>
    // NEEDS A NEW NAME
    //import { fly } from 'svelte-native/transition'
    import { ArticleService } from '~/services/ArticleService'
    import { ModalService } from '~/services/ModalService'
    import { articlesCollapse } from '~/services/stores/store'
    import Card from '~/components/universal/cards/Card'
    import ErrorContainer from '~/components/universal/containers/ErrorContainer'

    export let header 
    export let onTapHeader
    export let items
    export let onTapIcon
    export let imgSrc

    //transition:fly="{{ y: 200, duration: 2000 }}"

    //This is just a primary slider with medium size cards. That is used in Dashboard and Library. 

    //The function in onTap does prevent this component from being 100% universal. I've chosen to leave it as is seeing as these sliders are meant for articles and not newspapers. However, if there comes a time where I'd like to use this slider elsewhere and with another on:tap function. I'd have to restructure the code. 
</script>

<stackLayout>
    <flexBoxLayout class="titleBar">
        <stackLayout on:tap={onTapHeader}>
            <label 
            class="h2 timesNewRoman marginLeft" 
            text="{header}"/>
        </stackLayout>
        <!-- This #if checks if theres an imgSrc. It's mainly meant for Library, where the imgSrc is an arrow or a bin, so to easily unsave newspapers from local storage -->
        {#if imgSrc}
            <flexBoxLayout 
            class="iconContainer"
            on:tap={onTapIcon}>
                <image 
                height="30" width="20" class="icon"
                src={imgSrc}/>
            </flexBoxLayout>
        {/if}
    </flexBoxLayout>

    <!--  THIS NEEDS WORK. EDIT MODE NEEDS !WORK!  -->
    {#if !$articlesCollapse}
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
    {/if}
</stackLayout>

<style>
    .titleBar > stackLayout{
        flex: 2;
    }
    .iconContainer{
        flex: 1;
        height: 30;
        justify-content: flex-end;
    }
    .icon{
        filter: invert(92%) sepia(0%) saturate(218%) hue-rotate(186deg) brightness(91%) contrast(96%);
        margin-right: 15;
    }
    .h2{
        font-weight: 600;
    }
</style>