<script>
    import { onMount } from 'svelte'
    import { api_key, sourceList, newspaperList, libraryFilterIsActive, filteredLibList, filterComponent } from '~/services/store'
    import { ModalService } from '~/services/ModalService'

    import TopBar from '../components/universal/bars/TopBar'
    import FilterBar from '../components/universal/bars/FilterBar'
    import PrimarySlider from '~/components/universal/sliders/PrimarySlider'
    import EmptyContainer from '../components/universal/containers/EmptyContainer'
    import Article from '~/modals/Article'

    $libraryFilterIsActive = true
</script>

<stackLayout>
    <cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
        <stackLayout class="backgroundcolorWhite">
            <TopBar
            title="Library"/>
            <FilterBar
            bind:libList={$newspaperList}
            bind:setLibraryValue={$libraryFilterIsActive}/>
        </stackLayout>
    </cardView>
    {#if $filterComponent == true}
        {#if $filteredLibList && $filteredLibList.length > 0}
        <scrollView scrollBarIndicatorVisible={false}>
            <stackLayout>
                {#each $filteredLibList as filteredLibList}
                    <stackLayout class="newspaperContainer borderBottom"> 
                        <PrimarySlider
                        header={filteredLibList.name}
                        items={filteredLibList.articles}
                        imgSrc={"~/assets/icons/more2.png"}/>
                    </stackLayout>
                {/each}
            </stackLayout>
        </scrollView>
        {:else}
            <EmptyContainer
            text="You don't follow any newspapers in this category"/>
        {/if}
    {:else if $filterComponent == false}
            {#if $newspaperList && $newspaperList.length > 0}
            <scrollView scrollBarIndicatorVisible={false}>
            <stackLayout>
                {#each $newspaperList as newspaper}
                    <stackLayout class="newspaperContainer borderBottom"> 
                        <PrimarySlider
                        header={newspaper.name}
                        items={newspaper.articles}
                        imgSrc={"~/assets/icons/more2.png"}/>
                    </stackLayout>
                {/each}
            </stackLayout>
        </scrollView>
        {:else}
        <EmptyContainer
            text="Your list is empty"/>
        {/if}
    {/if}
</stackLayout>

<style>
    .newspaperContainer{
        padding-top: 15;
    }
</style>