<script>
import TodaysWeather from '../components/weather/TodaysWeather'
import Recommended from '../components/news/Recommended'
import TodaysNews from '../components/news/TodaysNews'

</script>

<stackLayout >
    <stackLayout>
        <flexBoxLayout class="topBar">
            <label class="h1" text="NEWS" />
        </flexBoxLayout>
        <scrollView class="filteredBar" orientation="horizontal" scrollBarIndicatorVisible={false}>
            <stackLayout orientation="horizontal">
                <button text="Business"/>
                <button text="Entertainment"/>
                <button text="General"/>
                <button text="Health"/>
                <button text="Science"/>
                <button text="Sports"/>
                <button text="Technology"/>
            </stackLayout>
        </scrollView>
    </stackLayout>
    
    <stackLayout class="wrapper">
        <scrollView scrollBarIndicatorVisible={false}>
            <stackLayout>
                <TodaysWeather/>
                <Recommended />
                <TodaysNews/>
            </stackLayout>
        </scrollView>
    </stackLayout>
</stackLayout>

<style>
    .topBar{
        flex-direction: row;
        background-color: white;
    }
    .h1{
        flex: 1;
        font-size: 24;
        font-weight: 800;
        padding-bottom: 10;
        margin: 15;
        margin-top: 25;
    }
    button{
        color: black;
        margin: 1;
        padding: 14
    }
    .wrapper{
        margin: 15;
        margin-bottom: 0;
    }
</style>