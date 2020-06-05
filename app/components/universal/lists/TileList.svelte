<script>
    import { ModalService } from '~/services/ModalService';
    import { LocalStorage } from '~/services/localStorage/LocalStorage';
    import { SourceService } from '~/services/SourceService';
    import Tile from '~/components/universal/tiles/Tile';
    import ToggleButton from '~/components/universal/buttons/ToggleButton';
    import ErrorContainer from '~/components/universal/containers/ErrorContainer';

    export let items;
</script>
  

<stackLayout class="tileListContainer">
    <scrollView
    scrollBarIndicatorVisible={false}>
        <stackLayout>
            {#each items as item}
                <scrollView 
                orientation="horizontal" 
                scrollBarIndicatorVisible={false}>
                    <flexBoxLayout>
                        <Tile
                        onTap={async() => await ModalService.showNewspaperModal(item)} 
                        imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(item.url)}`}
                        title={item.name}
                        text={item.description}/>
                        {#if item.isAdded}
                            <ToggleButton
                            text="Remove"
                            backgroundColor="lightGray"
                            onTap={() => LocalStorage.addOrRemoveItemTo(item, "SavedNewspapers")}/>
                        {:else}
                            <ToggleButton
                            text="Add"
                            backgroundColor="mustard"
                            onTap={() => LocalStorage.addOrRemoveItemTo(item, "SavedNewspapers")}/>
                        {/if}
                    </flexBoxLayout>
                </scrollView>
            {:else}
                <ErrorContainer
                title="Looking for data"/>
            {/each}
        </stackLayout>
    </scrollView>
</stackLayout>

<style>
    .tileListContainer{
        height: 100%;
    }
</style>