<script>
    import { closeModal } from 'svelte-native'
    import { ApplicationSettings } from "tns-core-modules";
    import { Template } from 'svelte-native/components'
    import { ApiService } from '~/services/ApiService'
    import { api_key, sources, categories, filterCountryCode, filterCountryName, filterCategoryValue, filterCategory, thereAreNoSources} from '~/services/stores/store'
    import { countries } from '~/services/stores/countryStore'

    const appSettings = require('tns-core-modules/application-settings')

    let country = ""
    let countryIsEnabled = false
    let categoryIsEnabled = false
    let categoryBtnText="All"
    let countryBtnText="All"
    $filterCategoryValue = "All"
    $filterCountryName = "All"

    $:{
        country = $filterCountryCode 
        console.log("filterCountryCode: " + $filterCountryCode)
    }

//The next two functions toggles between enable-/disableing Countries' and Categories' listView. 
    function enableCountries(){
        countryIsEnabled = !countryIsEnabled
        categoryIsEnabled = false
        if(countryBtnText == "All"){
            countryBtnText="-"
        }else if($filterCountryName == ""){
            countryBtnText = "All"
        }else{
            countryBtnText = $filterCountryName
        }
    }
    function enableCategories(){
        categoryIsEnabled = !categoryIsEnabled
        countryIsEnabled = false
        if(categoryBtnText == "All"){
            categoryBtnText="-"
        }else if($filterCategory == ""){
            countryBtnText = "All"
        }else{
            categoryBtnText = $filterCategory
        }
    }

//The next two functions picks what country or category the "filter" will look for. 
    function onCountryItemTap(event){
        $filterCountryCode = $countries[event.index].code
        $filterCountryName = $countries[event.index].name
        enableCountries()
    }
    function onCategoryItemTap(event){
        $filterCategory = $categories[event.index]
        $filterCategoryValue = $categories[event.index]
        enableCategories()
    }
    
//This functions sets the new source data.
//THIS FUNCTION NEEDS TIDYING UP - ALSO TO RESET $SOURCES ??
    const setNewSourceData = () =>{
        let response = []
        let sourceURL = ""
        let newList = []
        //Here it checks the countryBtnText in order to pick what URL to go with.
        if(countryBtnText == "All"){
            sourceURL = `https://newsapi.org/v2/sources?&apiKey=${api_key}`
        }else if($filterCountryName == "All"){
            sourceURL = `https://newsapi.org/v2/sources?&apiKey=${api_key}`
        }else{
            //Notice here where the country (code) is used when country is picked
            sourceURL = `https://newsapi.org/v2/sources?country=${country}&apiKey=${api_key}`
        }

        fetch(sourceURL)
            .then( response => response.json() )
            .then( response => {
                if(response.fault){
                    console.log(response.fault.faultstring)
                }else{
                    //Here the #if checks what value filterCategoryValue has, if its NOT "ALL" then it will filter out by category. If it is all then it will NOT filter out categories.
                    if(response.sources.length > 0){
                        if(filterCategoryValue == "All"){
                            $sources = response.sources
                        }
                        if(filterCategoryValue!= "All"){
                            $sources = response.sources
                            for(var i = 0; i < $sources.length; i++){
                                if($sources[i].category = filterCategoryValue){
                                newList.push($sources[i]) 
                                }
                            }
                            $sources = newList
                        }
                    }else if(response.sources.length == 0){
                        $thereAreNoSources = true
                    }
                    
                }
            })
        .catch( error => console.log(error) )  
        closeModal()
    }
</script>



<cardView shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
    <stackLayout class="container">
        <stackLayout class="emptyContainer">
            <!-- This empty container is not visible on android but on iOS. I've placed it here in order to force the modal in to vertically-align: bottom -->
        </stackLayout>
        <flexBoxLayout class="card flexColumn">
            <flexBoxLayout class="filterWrapper flexColumn">
                <label
                class="h2 OpenSans"
                text="Filter"/> 
                <stackLayout>
                    <stackLayout class="borderBottom">
                        <flexBoxLayout class="filterContainer">
                            <stackLayout>
                                <label text="Country"/>
                            </stackLayout>
                            <button 
                            androidElevation="0"
                            id="showMoreBtn"
                            on:Tap={() => enableCountries() }
                            text="{countryBtnText}"/>
                        </flexBoxLayout>
                        {#if countryIsEnabled == true}
                            <listView 
                            items="{$countries}"
                            on:itemTap="{onCountryItemTap}">
                                <Template 
                                let:item>
                                    <label text="{item.name}"/>
                                </Template>
                            </listView>
                        {/if}
                    </stackLayout>
                    <stackLayout>
                        <flexBoxLayout class="filterContainer">
                            <stackLayout>
                                <label text="Category"/>
                            </stackLayout>
                            <button 
                            androidElevation="0"
                            id="showMoreBtn"
                            on:Tap={() => enableCategories() }
                            text="{categoryBtnText}"/>
                        </flexBoxLayout> 
                        {#if categoryIsEnabled == true}
                            <listView 
                            items="{$categories}"
                            on:itemTap="{onCategoryItemTap}">
                                <Template 
                                let:item>
                                    <label text="{item}"/>
                                </Template>
                            </listView>
                        {/if}
                    </stackLayout>
                </stackLayout>
            </flexBoxLayout>
            <flexBoxLayout class="buttonContainer">
                <button 
                androidElevation="0"
                on:tap={ () => setNewSourceData() }
                text="Set filter"
                class="regularButton mustard"/>
                <button 
                androidElevation="0"
                on:tap={ () => closeModal() }
                text="Cancle"
                class="regularButton lightGray"/>
            </flexBoxLayout>
        </flexBoxLayout>
    </stackLayout>
</cardView>


<style>
    listView{
        height: 180;
        margin: 15;
        margin-top: 0;
        text-align: center;
    }
    .container{
        width: 100%;
        height: 100%;
        border-radius: 10%;
        background-color: transparent;
        vertical-align: bottom;
        padding: 10;
    }
    .card{
        flex: 2;
        background-color: white;
        width: 100%;
        height: auto;
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
    }
    .filterWrapper{
        margin: 15;
        padding-top: 10;
        height: auto;
        vertical-align: bottom;
    }
    button{
        font-size: 18;
        font-weight: 300;
        color: #232323;
        text-align: right;
        margin: 0;
    }
    .flexColumn{
        flex-direction: column;
    }
    .filterContainer{
        vertical-align: center;
        height: 50;
    }
    .filterContainer > stackLayout{
        flex: 2;
        vertical-align: center;
    }
    .buttonContainer{
        width: 100%;
    }
    .regularButton{
        color: white;
        border-radius: 10%;
        width: 100%;
        text-align: center;
        font-weight: 500;
        margin: 5;
    }
</style>