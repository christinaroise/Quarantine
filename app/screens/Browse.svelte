<script>
        export let article
</script>

<stackLayout class="browseWrapper">
    <flexBoxLayout class="topBar">
        <label class="h1 white montserrat" text="BROWSE" />
    </flexBoxLayout>
    <stackLayout>
        <scrollView orientation="horizontal">
            <!--{#each articles as article}-->
                <stackLayout class="newspaperCover">
                    <image class='image rounded' width="100%" height='250' src='' alt='cover' stretch='aspectFill' />
                    <flexBoxLayout>
                        <label class="h2 white title" text="NYTimes" />
                        <image class='icon' width="20" src='~/assets/icons/add.png'/>
                    </flexBoxLayout>
                </stackLayout>
            <!--{:else}
                <activityIndicator busy={true} />
            {/each}-->
        </scrollView>
    </stackLayout>
    <stackLayout class="newspapersWrapper">
        <scrollView>
            <stackLayout>
                <label class="h3" text="Your newspapers" />
                <!--{#each articles as article}-->
                    <stackLayout>
                        <label class="h2" text="Article Source"/>
                        <scrollView orientation="horizontal">
                            <stackLayout orientation="horizontal">
                                <image class='image rounded' color="lightgray" width="100%" height='250' src='' alt='cover' stretch='aspectFill' />
                                <stackLayout>
                                     <label class="h2" text="Article Title" />
                                    <label class="body" text="Article Description" />
                                </stackLayout>
                            </stackLayout>
                        </scrollView>
                    </stackLayout>
                <!--{:else}
                    <activityIndicator busy={true} />
                {/each}-->
            </stackLayout>
        </scrollView>
    </stackLayout>
</stackLayout>


<style>
    .browseWrapper{
        background-color: #C8A374;
    }
    .newspaperCover{
        width: 60%;
        padding: 15;
    }
    .title{
        flex: 3;
    }
    .h2{
        padding-top: 10;
        font-weight: 500;
        font-size: 20;
        line-height: 2;
    }
    
    .newspapersWrapper{
        border-radius: 10%;
        background-color: white;
        padding: 15;
    }


</style>