<script>
    //import { fly } from 'svelte/transition'
    import { 
        libraryList, 
        filteredLibraryList } from '~/services/stores/listsStore';
    import { 
        isLibraryFilterActivated, 
        isFilterComponentActivated } from '~/services/stores/filterStore';
    import { ModalService } from '~/services/ModalService';
    import ActionBar from '../components/universal/bars/ActionBar';
    import FilterBar from '../components/universal/bars/FilterBar';
    import Slider from '~/components/universal/sliders/Slider';
    import EmptyContainer from '../components/universal/containers/EmptyContainer';

    //Library shows all the newspapers the user has saved to local storage. 

    $isLibraryFilterActivated = true;

</script>

<frame >
    <page>
        <ActionBar
        title="Library"/>
        <stackLayout>
            <cardView 
            shadowOffsetHeight="2" 
            shadowOpacity="0.2" 
            shadowRadius="8"
            elevation="10">
                <stackLayout class="backgroundcolorWhite">
                    <FilterBar
                    bind:libraryList={$libraryList}
                    bind:setLibraryFilterValue={$isLibraryFilterActivated}/>
                </stackLayout>
            </cardView>

            {#if $isFilterComponentActivated == true}
                {#if $filteredLibraryList && $filteredLibraryList.length > 0}
                <scrollView 
                scrollBarIndicatorVisible={false}>
                    <stackLayout class="heightAuto">
                        {#each $filteredLibraryList as item}
                            <stackLayout class="newspaperContainer borderBottom"> 
                                <Slider
                                onTapIcon={() => ModalService.showLibraryOptionsModal()}
                                title={item.name}
                                onTapHeader={ () => ModalService.showNewspaperInLibraryModal(item) }
                                items={item.articles}/>
                            </stackLayout>
                        {/each} 
                    </stackLayout>
                </scrollView>
                {:else}
                <!-- For now, an empty container will do. But I'd like for categories that are empty to not be visible in FilterBar -->
                    <EmptyContainer
                    text="You don't follow any newspapers in this category"/>
                {/if}
            {:else if $isFilterComponentActivated == false}
                {#if $libraryList && $libraryList.length > 0}
                    <scrollView 
                    scrollBarIndicatorVisible={false}>
                        <stackLayout class="heightAuto">
                            {#each $libraryList as item}
                                <stackLayout class="newspaperContainer borderBottom"> 
                                    <Slider
                                    title={item.name}
                                    onTapHeader={ () => ModalService.showNewspaperInLibraryModal(item) }
                                    items={item.articles}/>
                                </stackLayout>
                            {/each}
                        </stackLayout>
                    </scrollView>
                {:else}
                <EmptyContainer
                    text="Your library is empty."/>
                {/if}
            {/if}
        </stackLayout>
    </page>
</frame>

<style>
    .newspaperContainer{
        padding-top: 15;
    }
</style>