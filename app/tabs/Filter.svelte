<script>
    import { countries } from '~/services/stores/countryStore'
    import ActionBar from '~/components/universal/bars/ActionBar';
    import SwitchTile from '~/components/universal/tiles/SwitchTile';
    import SegmentedBarTile from '~/components/universal/tiles/SegmentedBarTile';
    import OptionsTile from '~/components/universal/tiles/OptionsTile';

    let sortByOptions = [ "Newest", "Most Popular" ]
    
</script>


<frame>
    <page>
        <ActionBar
        title="Filters"/> 
        <stackLayout class="heightAuto wrapper">
            <stackLayout class="filterWrapper">
            <stackLayout class="filterContainer">
                <stackLayout  class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="Sort by"/>
                    <SegmentedBarTile
                    text="Articles in library"
                    listOfItems={sortByOptions}/>
                </stackLayout>
                <stackLayout  class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="Filter by"/>
                    <OptionsTile
                    title="Country"
                    listOfItems="{$countries}"/>
                    <SwitchTile
                    title="Covid-19"
                    text="Filters out any Covid-19 related content"
                    localStorageReference="default-covid19"/>
                    <SwitchTile
                        title="Trump"
                        text="Filters out any Trump related content"
                        localStorageReference="default-trump"/>
                </stackLayout>
                <stackLayout  class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="App settings"/>
                    <flexBoxLayout class="lastTile borderBottom">
                        <stackLayout class="marginLeft">
                            <label text="Language"/>
                            <label class="body" text="More options to come"/>
                        </stackLayout>
                        <label class="marginRight" text="English"/>
                    </flexBoxLayout>
                </stackLayout>
            </stackLayout>
        </stackLayout>
    </page>
</frame>

<style>
    .wrapper{
        flex-direction: column;
    }
    .filterWrapper{
        flex: 3;
    }
    .filterContainer{
        margin-bottom: 30;
    }
    .body{
        font-style: italic;
        margin-bottom: 10;
    }
    .lastTile > label{
        text-align: right;
        font-size: 18;
        flex: 2;
    }

</style>