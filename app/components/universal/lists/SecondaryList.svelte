<script>
    import { onMount }  from 'svelte'
    import { ModalService } from '~/services/ModalService'
    import { FilterService } from '~/services/FilterService'
    import { SourceService } from '~/services/SourceService'
    import SecondaryCard from '~/components/universal/cards/SecondaryCard'
    import addButton from '~/components/universal/buttons/addButton'

    export let items
</script>

<stackLayout>
    <scrollView scrollBarIndicatorVisible={false}>
      <stackLayout class="listContainer backgroundcolorWhite">
          {#each items as item }
                <scrollView 
                orientation="horizontal" 
                scrollBarIndicatorVisible={false}>
                    <flexBoxLayout 
                    class="tile" 
                    orientation="horizontal">
                        <stackLayout
                        class="one">
                            <SecondaryCard 
                            onTap={async() => await ModalService.showNewspaper(item)}
                            imgSrc={`https://logo.clearbit.com/${SourceService.trimURL(item.url)}`}
                            title={item.name}
                            description={item.description}/> 
                        </stackLayout>
                        <flexBoxLayout class="two">
                            <button text="+"/>
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
        justify-content: flex-end;
    }
    .one{
        flex: 2;
    }
    .two{
        flex: 1;

        margin: 5;
    }
    button{
        background-color: #C8A374;
        width: 100;
        color: white;
        font-size: 50;
        font-weight: 300;
        font-family: 'Open Sans'
    }
</style>