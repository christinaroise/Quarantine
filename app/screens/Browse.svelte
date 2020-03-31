<script>
    import Recommended from '../components/news/Recommended'
</script>

<stackLayout class="browseWrapper">
    <flexBoxLayout class="topBar">
        <label class="h1 white montserrat" text="BROWSE" />
    </flexBoxLayout>
    <scrollView>
        <stackLayout>
            <stackLayout>
                <scrollView orientation="horizontal">
                    <!--{#each articles as article}-->
                        <stackLayout class="newspaperCover">
                            <image class='image rounded' width="100%" height='250' src='' alt='cover' stretch='aspectFill' />
                            <flexBoxLayout>
                                <label class="h2 white title" text="NYTimes" />
                                <image class='icon' width="20" src='~/assets/icons/addWhite.png'/>
                            </flexBoxLayout>
                        </stackLayout>
                    <!--{:else}
                        <activityIndicator busy={true} />
                    {/each}-->
                </scrollView>
            </stackLayout>
            <stackLayout class="newspapersWrapper">
                <label class="h2 montserrat" text="Your newspapers"/>
                <scrollView scrollBarIndicatorVisible={false}>
                    <stackLayout>
                        <Recommended />
                        <Recommended />
                        <Recommended />
                    </stackLayout>
                </scrollView>
            </stackLayout>
        </stackLayout>
    </scrollView>
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
        letter-spacing: 0.05;
        margin: 20 0 20 10;
        text-decoration: capitalize; 
    }
    .newspapersWrapper{
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
        background-color: white;
        padding-top: 15;
    }


</style>