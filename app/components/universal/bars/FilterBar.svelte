<script>
    import { ApiService } from '~/services/ApiService'
    import { FilterService } from '~/services/FilterService'
    import { ArticleService } from '~/services/ArticleService'
    import { filterComponent, api_key, categories, dashboardFilterIsActive, libraryFilterIsActive, newspaperList, filteredLibList } from '~/services/store.js'
    import Dashboard from '~/screens/Dashboard'

    export let value = []
    export let setDashValue = ""
    export let setLibraryValue = ""
    export let libList = []

    function setCategory(category){
        if($dashboardFilterIsActive == setDashValue){
            $filterComponent = true
            ApiService.get(`https://newsapi.org/v2/top-headlines?country=${FilterService.getSelectedCountry()}&category=${category}&apiKey=${api_key}`).then(result => {
                value = result.articles
            }) 
        }else if($libraryFilterIsActive == setLibraryValue){
            $filterComponent = true
            let list = libList.filter( 
                newspaper => newspaper.category.toLowerCase().includes(category.toLowerCase())
            )
            $filteredLibList = list
        }
    }

</script>

<stackLayout>
    <scrollView 
    orientation="horizontal" 
    scrollBarIndicatorVisible={false}>
        <flexBoxLayout orientation="horizontal">
            {#each $categories as category}
                <button
                on:Tap={() => setCategory(category)}
                text="{category}"/>
            {/each}}
        </flexBoxLayout>
    </scrollView>
</stackLayout>

<style>
    button{
        margin: 1;
        padding-left: 14;
        padding-right: 14;
        padding-bottom: 10;
        font-family: 'Times New Roman';
        color: #232323;
    } 
    .active{
        border-bottom-color: #232323;
        border-bottom-width: 2;
    }
</style>