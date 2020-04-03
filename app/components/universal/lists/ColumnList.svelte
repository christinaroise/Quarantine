<script>
    import SecondaryCardSmall from '~/components/universal/cards/SecondaryCardSmall'
    //`https://logo.clearbit.com/${SourceService.trimURL(source.url)}`

    let sources = []
    
    export let cardOnTap
    export let items
</script>

<stackLayout>
    <scrollView scrollBarIndicatorVisible={false}>
        <wrapLayout width="50%" class='listContainer backgroundcolorWhite'>  
            {#each items as item}
                <SecondaryCardSmall 
                onTap={cardOnTap}
                imgSrc={item.urlToImg}
                tagName={item.source.name}
                title={item.title}
                subtitle={item.author}/>
            {:else}
                <activityIndicator busy={true} />
            {/each}
        </wrapLayout>
    </scrollView>
</stackLayout>


<style>
    .listContainer{
        width: 100%;
        justify-content: flex-end;
    }
</style>