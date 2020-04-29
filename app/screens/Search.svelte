<script>
    import {goBack} from 'svelte-native'
    import { ModalService } from '~/services/ModalService'
    import { SourceService } from '~/services/SourceService'
    import SecondaryCard from '~/components/universal/cards/SecondaryCard'
    import EmptyContainer from '~/components/universal/containers/EmptyContainer'

    export let sources

    let searchQuery = ""
    let sourceList = []

    $: searches = sources.filter( source => source.name.toLowerCase().includes(searchQuery.toLowerCase()) )

</script>


<page>
    <stackLayout>
        <searchBar hint="Search newspapers" bind:text={searchQuery}/>
                {#if searchQuery}
                    <scrollView>
                        <stackLayout class="container">
                            {#each searches as search}
                                <scrollView
                                orientation="horizontal" 
                                scrollBarIndicatorVisible={false}>
                                    <SecondaryCard 
                                    onTap={async() => await ModalService.showNewspaperModal(search)}
                                    imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(search.url)}`}
                                    title={search.name}
                                    description={search.description}
                                    btnOnTap={() => SourceService.addToLibrary(search)}/> 
                                </scrollView>
                            {:else}
                                    <EmptyContainer
                                    text="Shoot! It looks like {searchQuery} isn't available. Maybe double-check the spelling?"/>
                            {/each}
                        </stackLayout>
                    </scrollView>   
                {:else}
                        <EmptyContainer
                        text="Start looking for your favorite newspaper"/>
                {/if}
    </stackLayout>
</page>

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
    .container{
        height: 100%;
    }
</style>


<!--   




-->