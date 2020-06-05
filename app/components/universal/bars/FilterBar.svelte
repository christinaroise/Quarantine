<script>
    import { ApiService } from '~/services/ApiService';
    import { ArticleService } from '~/services/ArticleService';
    import { FilterService } from '~/services/FilterService';
    import { api_key } from '~/services/stores/store.js';
    import {
        isFilterComponentActivated,
        isDashboardFilterActivated, 
        isLibraryFilterActivated, 
        countryCode,
    } from '~/services/stores/filterStore.js'
    import { filteredLibraryList } from '~/services/stores/listsStore.js'
    import { categories } from '~/services/stores/categoryStore.js';
    import Dashboard from '~/tabs/Dashboard';
    
    export let value = [];
    export let setDashboardFilterValue = "";
    export let setLibraryFilterValue = "";
    export let libraryList = [];

    function setCategoryInDashboard(category){
        ApiService.get(`https://newsapi.org/v2/top-headlines?country=${$countryCode}&category=${category == "All" ? "General" : category}&apiKey=${api_key}`).then(result => {
            value = FilterService.filterArticles(result.articles)
        }); 
    };

    function setCategoryInLib(category){
        let list = libraryList.filter( newspaper => newspaper.category.toLowerCase().includes(category.toLowerCase())
        );
        $filteredLibraryList = list;
    };

    function setCategory(category){
        if($isDashboardFilterActivated == setDashboardFilterValue){
            $isFilterComponentActivated = true;
            setCategoryInDashboard(category);

        }else if($isLibraryFilterActivated == setLibraryFilterValue){
            if(category == "All"){
                $isFilterComponentActivated = false;
            }else{
                $isFilterComponentActivated = true;
                setCategoryInLib(category);
            }
        };
    };

</script>

<stackLayout>
    <scrollView 
    orientation="horizontal" 
    scrollBarIndicatorVisible={false}>
        <flexBoxLayout  class="widthAuto" orientation="horizontal">
            {#each $categories as category}
                <button
                androidElevation="0"
                borderWidth="0"
                on:Tap={() => setCategory(category)}
                text="{category}"/>
            {/each}
        </flexBoxLayout>
    </scrollView>
</stackLayout>

<style>
    button{
        border-width: 0;
        margin: 1;
        padding-left: 14;
        padding-right: 14;
        font-family: 'Montserrat';
        color: #232323;
    }
    .selected{
        border-bottom-color: #232323;
        border-bottom-width: 2;
    }
</style>