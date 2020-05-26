<script>
    import { ApiService } from '~/services/ApiService'
    import { ArticleService } from '~/services/ArticleService'
    import { filterComponent, api_key, categories, dashboardFilterIsActive, libraryFilterIsActive, libraryList, filteredLibList, country, covid19Filter, trumpFilter } from '~/services/stores/store.js'
    import Dashboard from '~/tabs/Dashboard'

    export let value = []
    export let setDashValue = ""
    export let setLibraryValue = ""
    export let libList = []

//This function sets the category filter in Dashboard by fetching data from news api.
    function setCategoryInDash(category){
        ApiService.get(`https://newsapi.org/v2/top-headlines?country=${$country}&category=${category}&apiKey=${api_key}`).then(result => {
            value = result.articles

            let filteredTitleList = []

            //If the user has chosen to filter out covid19 or trump related content these if sentences takes care of that. 
            if($covid19Filter == true){
                filteredTitleList = value.articles.filter( a => !coronaRegExp.test(a.title))
                value = filteredTitleList.filter( a => !coronaRegExp.test(a.description)) 
            }
            
            if($trumpFilter == true){
                filteredTitleList = value.articles.filter( a => !trumpRegExp.test(a.title))
                value = filteredTitleList.filter( a => !trumpRegExp.test(a.description)) 
            } 
        }) 
    }

//This function sets the category filter in Library.
    function setCategoryInLib(category){
        let list = libList.filter( 
            newspaper => newspaper.category.toLowerCase().includes(category.toLowerCase())
        )
        $filteredLibList = list
    }

//This function makes the component universal, so wherever it is being used it knows wheter to filter out categories in Dahboard or Library
    function setCategory(category){
        if($dashboardFilterIsActive == setDashValue){
            $filterComponent = true
            setCategoryInDash(category)

        }else if($libraryFilterIsActive == setLibraryValue){
            $filterComponent = true
            setCategoryInLib(category)
        }
    }

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
            {/each}}
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
    /*
        border-bottom-color: #232323;
        border-bottom-width: 2;
    */
</style>