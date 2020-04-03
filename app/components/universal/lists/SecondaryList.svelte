<script>
    import { SourceService } from '~/services/SourceService'
    import SecondaryCard from '~/components/universal/cards/SecondaryCard'
    //`https://logo.clearbit.com/${SourceService.trimURL(source.url)}`

    export let items
    export let cardOnTap
</script>

<stackLayout>
    <scrollView scrollBarIndicatorVisible={false}>
      <stackLayout class="listContainer backgroundcolorWhite">
          {#each items as item }
                <SecondaryCard 
                    onTap={cardOnTap}
                    imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(item.url)}`}
                    title={item.name}
                    description={item.description}/> 
            {:else}
                <activityIndicator busy={true} />
            {/each}
      </stackLayout>
    </scrollView>
</stackLayout>


<style>
    .listContainer{
        width: 100%;
        justify-content: flex-end;
    }
</style>