<script>
    //NEEDS NEW NAME & functions needs to be moved to browse
    import { onMount } from 'svelte'
    import { Template } from 'svelte-native/components'
    import { ModalService } from '~/services/ModalService'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import { SourceService } from '~/services/SourceService'
    import Tile from '~/components/universal/tiles/Tile'
    import ErrorContainer from '~/components/universal/containers/ErrorContainer'

    export let items 

    const appSettings = require('tns-core-modules/application-settings')

    let itemsCopy = []
    let promise = isSourceInList();

//This function gets string/array from local storage and gives each object a new element. This is the function that is used to switch add/remove buttons.
    async function isSourceInList(){
        var list = await LocalStorage.getLibraryListLTE();

        //This for-loops goes through items and gives each item an isAdded: false
        for(var i = 0; i < items.length; i++){
            items[i].isAdded = false
        }

        //This for-loops goes through list (from local storage) and then through each items before it gives each item an isAdded: true
        for(var i = 0; i < list.length; i++){
            for(var j = 0; j < items.length; j++){
                if(list[i].name == items[j].name){
                    items[j].isAdded = true
                }
            }
        }
        itemsCopy = items
    }

//This function toggles between adding and removing an item to local storage. It also has the promise isSourceInList so that the function not only adds or removes a new item to local storage, it also checks to see if its there or not so that the buttons' CSS fits accordingly. 
    async function toggleAddRemove(item){
        console.log('TEAST ***** TEST*****')
        await LocalStorage.addOrRemoveItemTo(item, "SavedNewspapers")
        await isSourceInList()
    }
</script>
  
  {#if items}
    <listView 
    items="{items}">
        <Template let:item>
            <scrollView 
            orientation="horizontal" 
            scrollBarIndicatorVisible={false}>
                <flexBoxLayout>
                    <Tile
                    onTap={async() => await ModalService.showNewspaperModal(item)} 
                    imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(item.url)}`}
                    title={item.name}
                    description={item.description}/>
                    <!-- This #if checks if an item has been added and shows the apprpriate button. That way the user can easily distinguish between saved and unsaved items -->
                    {#if item.isAdded}
                        <flexBoxLayout 
                        class="buttonContainer lightGray">
                            <button
                            androidElevation="0"
                            class="lightGray"
                            on:Tap={() => toggleAddRemove(item)}
                            text="Remove"/>
                        </flexBoxLayout>
                    {:else}
                        <flexBoxLayout 
                        class="buttonContainer mustard">
                            <button
                            androidElevation="0"
                            class="mustard"
                            on:Tap={() => toggleAddRemove(item)}
                            text="Add"/>
                        </flexBoxLayout>
                    {/if}
                </flexBoxLayout>
            </scrollView>
        </Template>
    </listView>
{:else}
    <ErrorContainer
    title="Looking for data"/>
{/if}


<style>
    listView{
        width: 100%;
        height: 100%;
    }
    .buttonContainer{
        justify-content: flex-end;
        margin-right: 0;
        height: 100%;
    }
    button{
        width: 80;
        color: white;
        font-size: 20;
        font-weight: 400;
        font-family: 'Open Sans';
    }
</style>