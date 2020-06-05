<script>
    import {
    bookmarkList, 
    articles } from '~/services/stores/listsStore'
    import { FilterService } from '~/services/FilterService';
    export let title
    export let text
    export let localStorageReference

    const appSettings = require('tns-core-modules/application-settings')

    let value = getValue()

    function chooseFilterValue() {
        setTimeout(async function(){
            appSettings.setBoolean(localStorageReference, value);
            FilterService.getArticles()
        }, 0);
    };
    

    function getValue(){
        let selectedValue = appSettings.getBoolean(localStorageReference)
        if(selectedValue == undefined){
            return false
        }else{
            return selectedValue
        }
    }

</script>

<flexBoxLayout class="borderBottom">
    <stackLayout class="marginLeft">
        <label text="{title}"/>
        <label class="body" text="{text}"/>
    </stackLayout>
    <switch
    bind:checked={value}
    on:checkedChange={chooseFilterValue}
    color="#C8A374"
    backgroundColor="#EBEBEB"  
    offBackgroundColor="#EBEBEB"/>
</flexBoxLayout>

<style>
    flexBoxLayout{
        flex: 2;
        padding-top: 5;
        padding-bottom: 5;
    }
    stackLayout{
        flex: 1;
        font-weight: 500;
    }
</style>