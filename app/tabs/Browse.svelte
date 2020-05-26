<script>
    import { ModalService } from '~/services/ModalService'
    import EmptyContainer from '../components/universal/containers/EmptyContainer'
    import { sources, thereAreNoSources } from '~/services/stores/store'
    import TopBar from '../components/universal/bars/TopBar'
    //import Filter from '~/components/universal/containers/FilterContainer'
    import FilterModal from '~/modals/cardModals/FilterModal'
    import SimpleList from '~/components/universal/lists/SimpleList'

//Browse is the tab where you can browse and search for newspapers, look what articles they have (on:tap showModal) and add or remove articles to Library (local storage). You can also filter out what newspapers to be shown (this is set to all by default and will reset it self once you switch tab.)

    $:{
        $thereAreNoSources = false
        console.log($thereAreNoSources)
        //CODE IS BUGGY
    }

</script> 

<frame actionBarHidden={false}>
    <page>
        <TopBar 
        leftIconSrc="~/assets/icons/search.png"
        leftOnTap={() => ModalService.goToSearch($sources)}
        title={'Browse'}
        rightIconSrc="~/assets/icons/filter.png"
        rightOnTap={() => ModalService.showFilterModal()}
        />
        <stackLayout>
            <cardView
            shadowOffsetHeight="2" 
            shadowOpacity="0.2" 
            shadowRadius="8"
            elevation="10">
                <label class="OpenSans" text="Find newspapers from across the globe"/>
            </cardView>
            {#if $thereAreNoSources}
                <EmptyContainer
                    text="Ops! It looks like we don't have any newspapers that matches your search."/>
            {:else}
                <SimpleList 
                items={$sources}/>
            {/if}
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