<script>
    import { onMount } from 'svelte'
    import { api_key, sourceList, newspaperList, libraryFilterIsActive, filteredLibList, filterComponent } from '~/services/store'
    import { showModal } from 'svelte-native'

    import TopBar from '../components/universal/bars/TopBar'
    import FilterBar from '../components/universal/bars/FilterBar'
    import PrimarySlider from '~/components/universal/sliders/PrimarySlider'
    import EmptyContainer from '../components/universal/containers/EmptyContainer'
    import Article from '~/modals/Article'

    $libraryFilterIsActive = true
//background-color: #F3F3F3;
</script>

<stackLayout>
    <TopBar
    title="Library"/>
    <FilterBar
    bind:libList={$newspaperList}
    bind:setLibraryValue={$libraryFilterIsActive}/>
        {#if $filterComponent == true}
           {#if $filteredLibList && $filteredLibList.length > 0}
            <scrollView scrollBarIndicatorVisible={false}>
                <stackLayout class="newspaperWrapper">
                    {#each $filteredLibList as filteredLibList}
                        <stackLayout class="newspaperContainer"> 
                            <PrimarySlider
                            header={filteredLibList.name}
                            items={filteredLibList.articles}
                            />
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
                <stackLayout class="newspaperWrapper">
                    {#each $newspaperList as newspaper}
                        <stackLayout class="newspaperContainer"> 
                            <PrimarySlider
                            header={newspaper.name}
                            items={newspaper.articles}
                            />
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
    .newspaperWrapper:nth-child(odd){
        background-color: #F3F3F3;
    }
    .newspaperWrapper:nth-child(even){
        background-color: white;
    }
</style>