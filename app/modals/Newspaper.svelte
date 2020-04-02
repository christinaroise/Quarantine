<script>
    import { closeModal } from 'svelte-native'
    import { ApiServices } from '~/services/SourceService'
    import { ArticleService } from '~/services/ArticleService'
    import TopBar from '~/components/universal/TopBar'
    import ArticlesFullWidth from '~/components/news/ArticlesFullWidth'
    
    export let source
    export let articles 

</script>

<frame>
    <page actionBarHidden={true}>
        <stackLayout class="backgroundcolorWhite">
            <cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
                <TopBar 
                leftIconSrc={'~/assets/icons/left-arrow.png'} 
                onTap={() => closeModal()}
                title={source.name}
                rightIconSrc={'~/assets/icons/heart.png'}/>/>
            </cardView>
            <scrollView scrollBarIndicatorVisible={false}>
                <stackLayout class="articles">  
                    {#each articles as article}
                        <ArticlesFullWidth 
                        articleImgSrc={article.urlToImage}
                        articleTitle={ArticleService.trimTitleMin(article.title)}
                        articleAuthor={ArticleService.trimAuthor(article.author)}
                        articleDescription={article.description}/>
                    {:else}
                        <activityIndicator busy={true} />
                    {/each}
                </stackLayout>
            </scrollView>
        </stackLayout>
    </page>
</frame>

<style>
    cardView{
        z-index: 10;
    }
</style>