<script>
    import { closeModal } from 'svelte-native';
    import { ApplicationSettings } from "tns-core-modules";
    import { ApiService } from '~/services/ApiService';
    import { api_key } from '~/services/stores/store';
    import { sources } from '~/services/stores/listsStore'
    import {
        chosenCountryCode, 
        chosenCountryName, 
        chosenCategoryValue, 
        chosenCategory,
        filteredSearchReturnsNoSources } from '~/services/stores/filterStore'
    import { countries } from '~/services/stores/countryStore';
    import { categories } from '~/services/stores/categoryStore.js';
    import ListOfOptions from '~/components/universal/lists/ListOfOptions';
    import OptionsTile from '~/components/universal/tiles/OptionsTile'
    import Button from '~/components/universal/buttons/Button';
/*
    const appSettings = require('tns-core-modules/application-settings');

    let country = "";
    let countryIsEnabled = false;
    let categoryIsEnabled = false;
    let categoryBtnText="All";
    let countryBtnText="All";
    $chosenCategoryValue = "All";
    $chosenCountryName = "All";

    $:{
        country = $chosenCountryCode;
        console.log("chosenCountryCode: " + $chosenCountryCode);
    }

//The next two functions toggles between enable-/disableing Countries' and Categories' listView. 
    function enableCountries(){
        countryIsEnabled = !countryIsEnabled;
        categoryIsEnabled = false;
        if(countryBtnText == "All"){
            countryBtnText="-";
        }else if($chosenCountryName == ""){
            countryBtnText = "All";
        }else{
            countryBtnText = $chosenCountryName;
        };
    };
    function enableCategories(){
        categoryIsEnabled = !categoryIsEnabled;
        countryIsEnabled = false;
        if(categoryBtnText == "All"){
            categoryBtnText="-";
        }else if($chosenCategory == ""){
            countryBtnText = "All";
        }else{
            categoryBtnText = $chosenCategory;
        };
    };

//The next two functions picks what country or category the "filter" will look for. 
    function onCountryItemTap(event){
        $chosenCountryCode = $countries[event.index].code;
        $chosenCountryName = $countries[event.index].name;
        enableCountries();
    };
    function onCategoryItemTap(event){
        $chosenCategory = $categories[event.index];
        $chosenCategoryValue = $categories[event.index];
        enableCategories();
    };
    
//This functions sets the new source data.
//THIS FUNCTION NEEDS TIDYING UP - ALSO TO RESET $SOURCES ??
    const setNewSourceData = () =>{
        let response = [];
        let sourceURL = "";
        let newList = [];
        //Here it checks the countryBtnText in order to pick what URL to go with.
        if(countryBtnText == "All"){
            sourceURL = `https://newsapi.org/v2/sources?&apiKey=${api_key}`;
        }else if($chosenCountryName == "All"){
            sourceURL = `https://newsapi.org/v2/sources?&apiKey=${api_key}`;
        }else{
            //Notice here where the country (code) is used when country is picked
            sourceURL = `https://newsapi.org/v2/sources?country=${country}&apiKey=${api_key}`;
        };

        fetch(sourceURL)
            .then( response => response.json() )
            .then( response => {
                if(response.fault){
                    console.log(response.fault.faultstring);
                }else{
                    //Here the #if checks what value filterCategoryValue has, if its NOT "ALL" then it will filter out by category. If it is all then it will NOT filter out categories.
                    if(response.sources.length > 0){
                        if(filterCategoryValue == "All"){
                            $sources = response.sources;
                        };
                        if(filterCategoryValue!= "All"){
                            $sources = response.sources;
                            for(var i = 0; i < $sources.length; i++){
                                if($sources[i].category = filterCategoryValue){
                                newList.push($sources[i]);
                                };
                            };
                            $sources = newList;
                        }
                    }else if(response.sources.length == 0){
                        $filteredSearchReturnsNoSources = true;
                    }; 
                };
            })
        .catch( error => console.log(error) ) 
        closeModal()
    }
    onTap={() => setNewSourceData()}
    */
</script>

<cardView 
shadowOffsetHeight="2" 
shadowOpacity="0.2" 
shadowRadius="8">
    <stackLayout class="card flexColumn">
        <flexBoxLayout class="filterWrapper flexColumn">
            <label
            class="h2 OpenSans"
            text="Filter"/> 
            <!-- 
            <stackLayout class="borderBottom">
                <OptionsTile
                title="Country"
                onTap={() => enableCountries()}
                optionChosen={countryBtnText}/>
                {#if countryIsEnabled == true}
                    <ListOfOptions
                    test={$countries}
                    onItemTap={onCountryItemTap}/>
                {/if}
            </stackLayout>
            <stackLayout>
                <OptionsTile
                title="Category"
                onTap={() => enableCategories()}
                optionChosen={categoryBtnText}/>
                {#if categoryIsEnabled == true}
                    <ListOfOptions
                    test={$categories}
                    onItemTap={onCategoryItemTap}/>
                {/if}
            </stackLayout>
            -->
        </flexBoxLayout>
        <flexBoxLayout class="buttonContainer">
            <Button
            
            buttonText="Set filter"
            backgroundColor="mustard"/>
            <Button
            onTap={() => closeModal() }
            buttonText="Cancle"
            backgroundColor="lightGray"/>
        </flexBoxLayout>
    </stackLayout>
</cardView>

<style>
    .card{
        background-color: white;
        width: 100%;
        height: auto;
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
        padding: 0 10 20 10;
    }
    .filterWrapper{
        margin: 15;
        padding-top: 10;
        height: auto;
        vertical-align: bottom;
    }
    .flexColumn{
        flex-direction: column;
    }
    .buttonContainer{
        width: 100%;
    }
</style>