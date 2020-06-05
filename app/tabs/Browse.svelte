<script>
    import { ModalService } from '~/services/ModalService';
    import EmptyContainer from '../components/universal/containers/EmptyContainer';
    import { sources } from '~/services/stores/listsStore';
    import { filteredSearchReturnsNoSources } from '~//services/stores/filterStore';
    import ActionBar from '../components/universal/bars/ActionBar';
    import FilterModal from '~/modals/cardModals/FilterModal';
    import TileList from '~/components/universal/lists/TileList';

/*
This all belongs to filterOption in Browse. I descovered it had some buggs and chose to omit this part of the code.  
    $:{
        $filteredSearchReturnsNoSources = false
        console.log($filteredSearchReturnsNoSources)
    }

    belongs to ActionBar:
    rightIconSrc="~/assets/icons/filter.png"
    rightOnTap={() => ModalService.showFilterModal()}     
*/

</script> 

<frame actionBarHidden={false}>
    <page>
        <ActionBar 
        leftIconSrc="~/assets/icons/search.png"
        leftOnTap={() => ModalService.goToSearch($sources)}
        title={'Browse'}/>
        <stackLayout>
        <cardView 
            shadowOffsetHeight="2" 
            shadowOpacity="0.2" 
            shadowRadius="8"
            elevation="10">
                <stackLayout class="backgroundcolorWhite">
                     <label class="OpenSans" text="Find newspapers from across the globe"/>
                </stackLayout>
            </cardView>
            <TileList 
                items={$sources}/>
            <!-- 
                This also belongs to the filter option 
            {#if $filteredSearchReturnsNoSources}
                <EmptyContainer
                    text="Ops! It looks like we don't have any newspapers that matches your search."/>
            {:else}
                <TileList 
                items={$sources}/>
            {/if}
            -->
        </stackLayout>
    </page>
</frame>

<style>
    .OpenSans {
        width: 100%;
        text-align: center;
        color: gray;
        padding-bottom: 15;
    }
</style>