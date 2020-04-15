<script>
    import { onMount }  from 'svelte'
    import { ModalService } from '~/services/ModalService'
    import { FilterService } from '~/services/FilterService'
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
                    onTap={async() => await ModalService.showNewspaper(item)}
                    imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(item.url)}`}
                    title={item.name}
                    description={item.description}
                    btnOnTap={() => SourceService.addToLibrary(item)}/> 
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