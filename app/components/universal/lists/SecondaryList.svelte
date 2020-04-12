<script>
    import { onMount }  from 'svelte'
    import { ModalService } from '~/services/ModalService'
    import { FilterService } from '~/services/FilterService'
    import { SourceService } from '~/services/SourceService'
    import SecondaryCard from '~/components/universal/cards/SecondaryCard'
    import addButton from '~/components/universal/buttons/addButton'

    const appSettings = require('tns-core-modules/application-settings')

    export let items 

    function addToLibrary(sourceItem){
        if(appSettings.getString("SavedNewspapers") == null || appSettings.getString("SavedNewspapers").length == 0){
            appSettings.setString("SavedNewspapers","[]")
        }

        let sourceList = appSettings.getString("SavedNewspapers")

        let sourceListAsJson = pushNewSourceToList(sourceItem, sourceList)
        
        appSettings.setString("SavedNewspapers", JSON.stringify(sourceListAsJson))
    }

    function pushNewSourceToList(sourceItem, sourceListAsString){
        let list = JSON.parse(sourceListAsString)
        let doesExist = false
        for(var i = 0; i < list.length; i ++){
            if(list[i].name == sourceItem.name){
                doesExist = true
            }
        }
        if(!doesExist){
            list.push(sourceItem)
        }
        return list
    }
</script>
  
<stackLayout>
    <scrollView scrollBarIndicatorVisible={false}>
      <stackLayout class="listContainer backgroundcolorWhite">
          {#each items as item }
                <scrollView 
                orientation="horizontal" 
                scrollBarIndicatorVisible={false}>
                    <flexBoxLayout
                    orientation="horizontal">
                        <stackLayout
                        class="one">
                            <SecondaryCard 
                            onTap={async() => await ModalService.showNewspaper(item)}
                            imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(item.url)}`}
                            title={item.name}
                            description={item.description}/> 
                        </stackLayout>
                        <flexBoxLayout class="buttonContainer">
                            <button 
                            on:Tap={() => addToLibrary(item)}
                            text="+"/>
                        </flexBoxLayout>
                    </flexBoxLayout>
                </scrollView>
            {:else}
                <activityIndicator busy={true} />
            {/each}
      </stackLayout>
    </scrollView>
</stackLayout>


<style>
    .listContainer{
        width: 100%;
    }
    .one{
        flex: 2;
    }
    .buttonContainer{
        flex: 1;
        justify-content: flex-end;
        margin: 15;
        margin-right: 0;
        background-color: #C8A374;
    }
    button{
        background-color: #C8A374;
        width: 80;
        color: white;
        font-size: 65;
        font-weight: 200;
        font-family: 'Open Sans';
    }
</style>