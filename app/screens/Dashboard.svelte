<script>
    import { showModal } from 'svelte-native'
    import TodaysWeather from '../components/weather/TodaysWeather'
    import Recommended from '../components/news/Recommended'
    import TodaysNews from '../components/news/TodaysNews'

    import FilteredArticles from '~/modals/FilteredArticles'

    const utilsModule = require('tns-core-modules/utils/utils')

    const showFiltered = async (article) => {
        await showModal(
            {
                page: FilteredArticles,
                props:{
                    article:article
                }
            }
        )
    }

    export let article

</script>

<stackLayout >
    <stackLayout>
       <stackLayout class="topBarWrapper">
            <flexBoxLayout>
                <label class="h1 header montserrat" text="NEWS" />
                <!--
                <flexBoxLayout class="icons">
                    <image width="30" src="~/assets/icons/shield.png" class="fas icon1"/>
                    <image width="30" src='~/assets/icons/location.png' class="fas iconGlobal"/>
                </flexBoxLayout>
                -->
            </flexBoxLayout>
       </stackLayout>
        <scrollView 
        orientation="horizontal" 
        scrollBarIndicatorVisible={false}>
            <flexBoxLayout orientation="horizontal" >
                <button 
                on:tap={ () => showFiltered(article)} 
                text="Business"/>
                <button 
                on:tap={ () => showFiltered(article)} 
                text="Entertainment"/>
                <button 
                on:tap={ () => showFiltered(article)} 
                text="General"/>
                <button 
                on:tap={ () => showFiltered(article)} 
                text="Health"/>
                <button 
                on:tap={ () => showFiltered(article)} 
                text="Science"/>
                <button 
                on:tap={ () => showFiltered(article)} 
                text="Sports"/>
                <button 
                on:tap={ () => showFiltered(article)} 
                text="Technology"/>
            </flexBoxLayout>
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
    .topBarWrapper{
        height: 80;
        margin: 15;
        margin-bottom: 0;
        vertical-align: bottom;
    }
    .header{
        font-size: 28;
        font-weight: 700;
    }
    button{
        color: #232323;
        margin: 1;
        padding: 14
    }

</style>