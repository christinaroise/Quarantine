<script>
    import FilterBar from '~/components/universal/bars/FilterBar';
    import { articles } from '~/services/stores/listsStore';
    import { isDashboardFilterActivated } from '~/services/stores/filterStore';

    export let onTap;
</script>

<cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
    <stackLayout class="backgroundcolorWhite">
        <flexBoxLayout>
            <label 
            on:tap={onTap}
            class="h1 montserrat" 
            text="NEWS"/>
        </flexBoxLayout>
        <FilterBar 
        bind:value={$articles}
        bind:setDashboardFilterValue={$isDashboardFilterActivated}/>
    </stackLayout>
</cardView>

<style>
    cardView{
        z-index: 10;
    }
    flexBoxLayout{ 
        height: 80;
        margin-left: 15;
        vertical-align: bottom;
    }
    label{
        margin-top: 35;
        font-size: 24;
        font-weight: 800;
        width: 100%;
    }
</style> 