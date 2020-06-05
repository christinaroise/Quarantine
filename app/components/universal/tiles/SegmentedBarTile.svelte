<script>
    import { sortByValue } from '~/services/stores/filterStore'
    import { FilterService } from '~/services/FilterService';
    
    export let title
    export let text
    export let listOfItems

    let selectedItem = 0

    const appSettings = require('tns-core-modules/application-settings')
    
    const chooseSortByValue = () =>{
        //Because of erase-condition, setTimeout is neccessary
        setTimeout(function(){ 
            appSettings.setNumber("default-sortBy", selectedItem)
            FilterService.getArticles()
        }, 0); 
    };

    $:{
        $sortByValue = selectedItem == 0 ? "publishedAt" : "popularity"
        console.log(selectedItem)
        console.log($sortByValue)
    }
</script>

<flexBoxLayout class="borderBottom">
    <stackLayout class="marginLeft"> 
        <label text="{title}"/>
        <label class="body" text="{text}"/>
    </stackLayout>
    <segmentedBar 
        bind:selectedIndex="{selectedItem}"
		on:selectedIndexChange="{chooseSortByValue}"
        backgroundColor="#e0e0e0" 
        color="white" 
        selectedBackgroundColor="#C8A374">
        {#each listOfItems as item}
            <segmentedBarItem title="{item}"/>
        {/each}
    </segmentedBar>
</flexBoxLayout>

<style>
    flexBoxLayout{
        flex: 2;
        padding-bottom: 15;
    }
    stackLayout{
        flex: 1;
        font-weight: 500;
    }
    segmentedBar{
        font-weight: 600;
    }
</style>