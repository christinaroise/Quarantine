<script>
    import { onMount }  from 'svelte'
    import { ModalService } from '~/services/ModalService'
    import { LocalStorage } from '~/services/LocalStorage'
    import { SourceService } from '~/services/SourceService'
    import SecondaryCard from '~/components/universal/cards/SecondaryCard'
    import addButton from '~/components/universal/buttons/addButton'

    const appSettings = require('tns-core-modules/application-settings')

    export let items 
</script>
  
<stackLayout>
    <scrollView scrollBarIndicatorVisible={false}>
      <stackLayout class="listContainer backgroundcolorWhite">
          {#each items as item }
                <scrollView 
                orientation="horizontal" 
                scrollBarIndicatorVisible={false}>
                    <SecondaryCard  
                    onTap={async() => await ModalService.showNewspaperModal(item)} 
                    imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(item.url)}`}
                    title={item.name}
                    description={item.description}
                    btnOnTap={() => LocalStorage.addToLibrary(item)}/> 
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
</style>