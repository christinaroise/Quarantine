<script>
    import { isFilterComponentActivated, isDashboardFilterActivated} from '~/services/stores/filterStore.js';
    import { articles, todaysArticles } from '~/services/stores/listsStore'
    import { categories } from '~/services/stores/categoryStore.js';
    import TopBar from '~/components/TopBar';
    import List from '~/components/universal/lists/List';
    import TodaysWeather from '../components/weather/TodaysWeather';
    import Slider from '~/components/universal/sliders/Slider';
    import SliderSmall from '~/components/universal/sliders/SliderSmall';

    function setDashboardToDefault(){
        $isFilterComponentActivated = false;
    };
    $isDashboardFilterActivated = true
    //If dashboard filter is active, then dashboard itself is hidden, while a list of articles in shown. This list is filtered by what category is tapped. 
</script>

<stackLayout>
    <TopBar
    onTap={() => setDashboardToDefault()}
    />
    <stackLayout>
        <scrollView 
        scrollBarIndicatorVisible={false}>
            {#if $isFilterComponentActivated == true  && $articles.length > 0}
            <!-- This is what you see when you activate the filter function (which is done by tapping the buttons in FilterBar)  -->
                <List
                items={$articles}/>
            {:else if $isFilterComponentActivated == false && $articles.length > 0}
            <!-- This is what you see when you first start the app  -->
                <stackLayout>
                    <TodaysWeather/>
                    <Slider
                    title='Recommended'
                    items={$articles}/> 
                    <SliderSmall 
                    title="Today's news"
                    items={$todaysArticles}/> 
                </stackLayout>
            {/if}
        </scrollView>
    </stackLayout>
</stackLayout>    