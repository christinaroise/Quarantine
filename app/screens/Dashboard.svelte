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
                },
                fullscreen: false
            }
        )
    }

    export let article

</script>

<stackLayout>
    <cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
        <stackLayout class="backgroundcolorWhite">
            <flexBoxLayout class="topBarWrapper">
                <label class="h1 header montserrat" text="NEWS" />
                <!--
                <flexBoxLayout class="icons">
                    <image width="30" src="~/assets/icons/shield.png" class="fas icon1"/>
                    <image width="30" src='~/assets/icons/location.png' class="fas iconGlobal"/>
                </flexBoxLayout>
                -->
            </flexBoxLayout>
            <stackLayout>
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
        </stackLayout>
    </cardView>
        
    
    <stackLayout class="wrapperDash">
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
 cardView{
     z-index: 10;
 }
    .backgroundcolorWhite{
        background-color: white;
    }
    .topBarWrapper{
        height: 80;
        margin-top: 15;
        margin-left: 15;
        vertical-align: bottom;
    }
    .header{
        font-size: 25;
        font-weight: 800;
    }
    button{
        margin: 1;
        padding: 14;
        padding-bottom: 30;
        font-family: 'Times New Roman';
        color: #232323;
    }
    .wrapperDash{
        margin-bottom: 10;
    }

</style>