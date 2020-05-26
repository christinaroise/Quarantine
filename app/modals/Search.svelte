<script>
    import { closeModal } from 'svelte-native'
    import { ModalService } from '~/services/ModalService'
    import { SourceService } from '~/services/SourceService'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import Tile from '~/components/universal/tiles/Tile'
    import EmptyContainer from '~/components/universal/containers/EmptyContainer'
    import ModalTopBar from '~/components/universal/bars/ModalTopBar'

    export let sources

    let searchQuery = ""
    let sourceList = []

    $: searches = sources.filter( source => source.name.toLowerCase().includes(searchQuery.toLowerCase()) )

    //This modal is a search modal where you can search for newspapers. 
    //need a timeout function (say 1 second?)

</script>


<frame>
    <page>
        <actionbar 
        on:tap={() => closeModal()} 
        title="Close" 
        flat="true"/>
        <stackLayout>
            <searchBar 
            hint="Search newspapers" 
            bind:text={searchQuery}/>
            {#if searchQuery}
                <scrollView
                scrollBarIndicatorVisible={false}>
                    <stackLayout class="heightAuto container">
                        {#each searches as search}
                            <Tile 
                            class="widthAuto"
                            onTap={async() => await ModalService.showNewspaperModal(search)}
                            imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(search.url)}`}
                            title={search.name}
                            description={search.description}
                            btnOnTap={() => LocalStorage.addOrRemoveItemTo(search, "SavedNewspapers")}/>
                        {:else}
                            <EmptyContainer
                            class="heightAuto"
                            text="Oh no! It looks like {searchQuery} isn't available. Maybe double-check the spelling?"/>
                        {/each}
                    </stackLayout>
                </scrollView>   
            {:else}
                <EmptyContainer
                text="Start looking for your favorite newspaper"/>
            {/if}
        </stackLayout>
    </page>
</frame>

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