<script>
    import { closeModal } from 'svelte-native'
    import { SourceServices } from '~/services/SourceService'
    import { ArticleService } from '~/services/ArticleService'
    import ElegantTopBar from '~/components/universal/bars/ElegantTopBar'
    import PrimaryCard from '~/components/universal/cards/PrimaryCard'
    
    export let source
    export let articles 

</script>

<frame>
    <page class="backgroundcolorWhite" actionBarHidden={true}>
        <stackLayout>
            <cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
                <ElegantTopBar 
                leftIconSrc={'~/assets/icons/left-arrow.png'} 
                onTap={() => closeModal()}
                title={source.name}
                rightIconSrc={'~/assets/icons/heart.png'}/>/>
            </cardView>
            <scrollView scrollBarIndicatorVisible={false}>
                <stackLayout class="articles">  
                    {#each articles as article}
                        <PrimaryCard 
                        btnTitle={'Like'}
                        ImgSrc={article.urlToImage}
                        Title={ArticleService.trimTitleMin(article.title)}
                        Author={ArticleService.trimAuthor(article.author)}
                        Description={article.description}/>
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