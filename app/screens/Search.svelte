<script>
    import {goBack} from 'svelte-native'
    import SecondaryCard from '~/components/universal/cards/SecondaryCard'
    import EmptyContainer from '~/components/universal/containers/EmptyContainer'

    export let sources

    let searchQuery = ""
    let sourceList = []


    // $: searches = sources.filter( source => source.name.toLowerCase().includes(searchQuery.toLowerCase()) )

    function onTextChanged(){
        sourceList = []
        sourceList = sources.filter( source => source.name.toLowerCase().includes(searchQuery.toLowerCase()) )

        /*console.log("ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ")
        console.log("ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ")
        for(var i = 0; i < sourceList.length; i++){
            console.log(sourceList[i].name)
        }
        console.log("ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ")*/
    }

</script>


<page>
    <stackLayout>
        <searchBar hint="Search newspapers" bind:text={searchQuery} on:textChange="{onTextChanged}"/>
        <scrollView> 
        {#if sourceList}
        {#each sourceList as search}
        {console.log("ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ")}
        {console.log("ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ")}
            {console.log(search.name)}
            {console.log("ÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆÆ")}
                    <label text="{search.name}"/>
         {/each}
         {/if}
           <!-- 
            {#if searchQuery}
                {#each searches as search}
                    <label text="{search.name}"/>
                {:else}
                    <EmptyContainer
                    text="No available options"/>
                {/each}
            {:else}
                <EmptyContainer
                    text="Looking for your favorite newspaper?"/>
            {/if}

            --> 
        </scrollView>
    </stackLayout>
</page>

<!--
    <SecondaryCard 
                        imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(search.url)}`}
                        title={search.name}
                        description={search.description}/> 
-->

<style>
    .searchContainer{
        height: 50;
        width: 100%;
        margin-left: 15;
        margin-right: 15;
        justify-content: center;
        border-color: gray;
        border-top-width: 0.5;
        border-bottom-width: 0.5;
    }
    .icon{
        margin: 5;
    }

</style>