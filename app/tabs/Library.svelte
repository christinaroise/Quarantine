<script>
    import { fly } from 'svelte/transition'
    import { 
    libraryList, 
    libraryFilterIsActive, 
    filteredLibList, 
    filterComponent, 
    articlesCollapse } from '~/services/stores/store'
    import { ModalService } from '~/services/ModalService'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import TopBar from '../components/universal/bars/TopBar'
    import FilterBar from '../components/universal/bars/FilterBar'
    import Slider from '~/components/universal/sliders/Slider'
    import EmptyContainer from '../components/universal/containers/EmptyContainer'

    //Library shows all the newspapers the user has saved to local storage. 

    $libraryFilterIsActive = true

    let editMode = false
    let icon = "~/assets/icons/down-arrow.png"

    function toggleIcon(){
        if(icon == "~/assets/icons/down-arrow.png"){
            icon = "~/assets/icons/up-arrow.png"
            $articlesCollapse = true
        }else{
            icon = "~/assets/icons/down-arrow.png"
            $articlesCollapse = false
        }
    }
/*
    function editLibrary(){
        toggleIcon()
        if(icon == "~/assets/icons/up-arrow.png"){
            icon = "~/assets/icons/delete.png"
        }
    }
    */
    function collapseArticles(source){
        /*if(icon == "~/assets/icons/delete.png"){
            LocalStorage.addOrRemoveItemToLibrary(source)
            LocalStorage.addOrRemoveItemToLocalStorage(source, "SavedNewspapers")
        }*/
        toggleIcon()
    }
</script>

<frame >
    <page>
        <TopBar
        title="Library"
        rightIconSrc={"~/assets/icons/edit.png"}
        rightOnTap={() => collapseArticles()}/>
        <stackLayout>
            <cardView 
            shadowOffsetHeight="2" 
            shadowOpacity="0.2" 
            shadowRadius="8"
            elevation="10">
                <stackLayout class="backgroundcolorWhite">
                    <!-- This filterbar lets the user filter its newspapers. Say you'd like to only reads sports related newspapers one day. The filterbar content could be driven by what content is saved in local storage, but that could be a part of a new update of the app. -->
                    <FilterBar
                    bind:libList={$libraryList}
                    bind:setLibraryValue={$libraryFilterIsActive}/>
                </stackLayout>
            </cardView>
            <!-- As in dashboard: if the filter component has been activated (by FilterBar) then a filtered list of newspapers (main sliders) will be shown -->
            {#if $filterComponent == true}
                {#if $filteredLibList && $filteredLibList.length > 0}
                <scrollView 
                scrollBarIndicatorVisible={false}>
                    <stackLayout class="heightAuto">
                        {#each $filteredLibList as filteredLibList}
                            <stackLayout class="newspaperContainer borderBottom"> 
                                <Slider
                                onTapIcon={() => ModalService.showLibraryOptionsModal()}
                                header={filteredLibList.name}
                                onTapHeader={ () => ModalService.showNewspaperInLibraryModal(filteredLibList) }
                                items={filteredLibList.articles}/>
                            </stackLayout>
                        {/each} 
                    </stackLayout>
                </scrollView>
                {:else}
                <!-- For now, an empty container will do. But I'd like for categories that are empty to not be visible in FilterBar -->
                    <EmptyContainer
                    text="You don't follow any newspapers in this category"/>
                {/if}
            {:else if $filterComponent == false}
            <!-- if filter component is not activated then a full list of newspapers that are saved to local storage will be shown. This is default. -->
                {#if $libraryList && $libraryList.length > 0}
                    <scrollView 
                    scrollBarIndicatorVisible={false}>
                        <stackLayout class="heightAuto">
                            {#each $libraryList as newspaper}
                                <stackLayout class="newspaperContainer borderBottom"> 
                                    <Slider
                                    header={newspaper.name}
                                    onTapHeader={ () => ModalService.showNewspaperInLibraryModal(newspaper) }
                                    items={newspaper.articles}
                                    imgSrc={icon}
                                    onTapIcon={() => collapseArticles(newspaper)}/>
                                </stackLayout>
                            {/each}
                        </stackLayout>
                    </scrollView>
                {:else}
                <!-- if Library is empty this will be shown. -->
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