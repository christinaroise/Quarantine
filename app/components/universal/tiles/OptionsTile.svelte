<script>
    import { Template } from 'svelte-native/components';
    import {
        country, 
        countryCode, 
        countryName } from '~/services/stores/filterStore'
    import { FilterService } from '~/services/FilterService';
    export let title; 
    export let listOfItems
    
    const appSettings = require('tns-core-modules/application-settings')

    let listPicker = false
    let buttonText = $countryName

    $:{
        $country = $countryCode
        buttonText = $countryName
        console.log($countryCode)
        console.log($countryName)
        console.log(FilterService.getArticles())
    }

    function showListPicker(){
        if(buttonText == $countryName){
            listPicker = true;
            buttonText = "-";
        }else if(buttonText == "-"){
            listPicker = false;
            buttonText = $countryName;
        };
    };

    function onItemTap(event) {
        $countryCode = listOfItems[event.index].code;
        $countryName = listOfItems[event.index].name;

        appSettings.setString('default-countryCode', $countryCode);
        appSettings.setString('default-countryName', $countryName);
        showListPicker();
    }
</script>

<flexBoxLayout class="borderBottom">
    <stackLayout class="marginLeft">
        <label text="{title}"/>
    </stackLayout>
    <button 
    androidElevation="0"
    on:Tap={() => showListPicker()}
    text="{buttonText}"/>
</flexBoxLayout>
{#if listPicker == true}
    <listView 
    items="{listOfItems}"
    on:itemTap="{onItemTap}">
        <Template 
        let:item>
            <label text="{item.name}"/>
        </Template>
    </listView>
{/if}

<style>
    flexBoxLayout{
        flex: 2;
        vertical-align: center;
        height: 50;
        width: 100%;
    }
    stackLayout{
        flex: 1;
        font-weight: 500;
        vertical-align: center;
    }
    button{
        font-weight: 400;
        color: #232323;
        margin: 0;
        margin-right: 10;
        width: auto;
        padding-left: 5;
        padding-right: 5;
    }
    listView{
        height: 250;
        margin: 15;
        margin-top: 0;
        text-align: center;
    }
</style>