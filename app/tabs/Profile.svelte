<script>
    import { ApplicationSettings } from "tns-core-modules";
    import { Template } from 'svelte-native/components'
    import { 
        api_key, 
        covid19Filter, 
        covid19Value, 
        trumpFilter, 
        trumpValue, 
        newestValue, 
        popularValue, 
        articles, 
        todaysArticles, 
        country, 
        countryCode, 
        countryName, 
        libraryList } from '~/services/stores/store'
    import { countries } from '~/services/stores/countryStore'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import { ArticleService } from '~/services/ArticleService'
    import TopBar from '~/components/universal/bars/TopBar'

    const appSettings = require('tns-core-modules/application-settings')

    let listPicker = false
    let countryButtonText = $countryName

    let coronaRegExp = /\s*(\w*((C|c|K|k)ovid)|((C|c|K|k)orona)|((Q|q)uarantine)|((K|k)arantene)|((P|p)andemi)|((E|e)pidemi)|((V|v)irus)\w*)\s*/
    let trumpRegExp = /\s*(\w*((T|t|)rump)|((D|d)onald)|(POTUS)\w*)\s*/

    $:{
        $country = $countryCode
        countryButtonText = $countryName

        $covid19Filter = $covid19Value
        $trumpFilter = $trumpValue

        console.log("covid19Value: " + $covid19Value)
        console.log("trumpValue: " + $trumpValue)

        console.log("countryCode: " + $countryCode)
        console.log("countryName: " + $countryName)
        console.log("newestValue: " + $newestValue)
        console.log("popularValue: " + $popularValue)
        console.log('*-*-*-*-*')

        updateData()
    }

    const setCovid19Value = () =>{
        $covid19Filter = $covid19Value
        appSettings.setBoolean('default-covid19', $covid19Value)
    }
    const setTrumpValue = () =>{
        $trumpFilter = $trumpValue
        appSettings.setBoolean('default-trump', $trumpValue)
    }
    const setNewestValue = () =>{
        setTimeout(function(){ 
            $popularValue = !$newestValue
            appSettings.setBoolean('default-newest', $newestValue)
            appSettings.setBoolean('default-popular', $popularValue)
        }, 0);
        
    }
    const setPopularValue = () =>{  
        setTimeout(function(){ 
            $newestValue = !$popularValue 
            appSettings.setBoolean('default-popular', $popularValue) 
            appSettings.setBoolean('default-newest', $newestValue)
            
        }, 0); 
    }

    function showListPicker(){
        if(countryButtonText == $countryName){
            listPicker = true
            countryButtonText = "-"
        }else if(countryButtonText == "-"){
            listPicker = false
            countryButtonText = $countryName
        }
    }

    function onItemTap(event) {
        $countryCode = $countries[event.index].code
        $countryName = $countries[event.index].name
        appSettings.setString('default-countryCode', $countryCode)
        appSettings.setString('default-countryName', $countryName)
        showListPicker()
    }

    const updateData = () =>{
        console.log('*** UPDATING DATA ***')
        let headlinesList = []
        let everythingList = []
        const topHeadlines = `https://newsapi.org/v2/top-headlines?country=${$country}&apiKey=${api_key}`
        
        fetch(topHeadlines)
            .then( headlinesList => headlinesList.json() )
            .then( headlinesList => {
                $articles = headlinesList.articles
                $todaysArticles = $articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
                
                let filteredTitleList = []

                if($covid19Filter == true){
                    filteredTitleList = headlinesList.articles.filter( a => !coronaRegExp.test(a.title))
                    $articles = filteredTitleList.filter( a => !coronaRegExp.test(a.description)) 

                    $todaysArticles = $articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
                }
                
                if($trumpFilter == true){
                    filteredTitleList = headlinesList.articles.filter( a => !trumpRegExp.test(a.title))
                    if($covid19Filter == true){
                        $articles = filteredTitleList.filter( a => !trumpRegExp.test(a.description)) 
                    
                        $todaysArticles = $articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
                    }else{
                        $articles = filteredTitleList.filter( a => !trumpRegExp.test(a.description)) 
                        
                        $todaysArticles = $articles.filter(a => ArticleService.isCurrentDate(a.publishedAt))
                    }
                } 
            })
        .catch( error => console.log(error) )
        LocalStorage.getCompleteLibraryList()
    }

</script>


<frame>
    <page>
        <TopBar
        title="Filters"/>
        <stackLayout class="heightAuto wrapper">
            <stackLayout class="filterWrapper">
                <stackLayout class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="Sort by"/>
                    <flexBoxLayout class="borderBottom center">
                        <label class="filterLabel center marginLeft" text="Newest"/>
                        <switch 
                        bind:checked={$newestValue}
                        on:checkedChange={setNewestValue}
                        color="#C8A374"
                        backgroundColor="lightgray" 
                        offBackgroundColor="Lightgray"/>
                    </flexBoxLayout>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Most popular"/>
                        <switch
                        bind:checked={$popularValue}
                        on:checkedChange={setPopularValue}
                        color="#C8A374"
                        backgroundColor="lightgray" 
                        offBackgroundColor="Lightgray"/>
                    </flexBoxLayout>
                </stackLayout>
            <stackLayout class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="Filter by"/>
                        <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="Country"/>
                            <flexBoxLayout class="buttonContainer">
                                <button 
                                androidElevation="0"
                                on:tap={() => showListPicker()} 
                                text="{countryButtonText}"/>
                            </flexBoxLayout>
                        </flexBoxLayout>
                        {#if listPicker == true}
                            <listView 
                            items="{$countries}"
                            on:itemTap="{onItemTap}">
                                <Template 
                                let:item>
                                    <label text="{item.name}"/>
                                </Template>
                            </listView>
                        {/if}
                        <flexBoxLayout class="tile borderBottom">
                            <stackLayout class="filterLabel marginLeft">
                                <label text="COVID-19"/>
                                <label class="body" text="Filters out any COVID-19 related content"/>
                            </stackLayout>
                            <switch
                            bind:checked={$covid19Value}
                            on:checkedChange={setCovid19Value}
                            color="#C8A374"
                            backgroundColor="lightgray" 
                            offBackgroundColor="Lightgray"/>
                        </flexBoxLayout>
                        <flexBoxLayout class="tile borderBottom">
                            <stackLayout class="filterLabel marginLeft">
                                <label text="Donald Trump"/>
                                <label class="body" text="Filters out any Trump related content"/>
                            </stackLayout>
                            <switch
                            bind:checked={$trumpValue}
                            on:checkedChange={setTrumpValue}
                            color="#C8A374"
                            backgroundColor="lightgray" 
                            offBackgroundColor="Lightgray"/>
                        </flexBoxLayout>
                </stackLayout>
<!-- As of this moment there is no language option in the app. I've chosen to keep this component visible to show the user that it will soon be available. That way I won't, easily, lose a "customer" just because I don't have the prefered language, yet. -->
                <stackLayout  class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="App settings"/>
                    <flexBoxLayout class="tile borderBottom">
                        <stackLayout class="filterLabel marginLeft">
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
    .title{
        flex: 2;
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
    .buttonContainer{
        flex: 1;
        justify-content: flex-end;
    }
    button{
        font-size: 15;
        font-weight: 400;
        color: #232323;
        margin: 0;
        margin-right: 10;
        width: auto;
        padding-left: 5;
        padding-right: 5;
    }
    listView{
        height: 250;
        margin: 15;
        margin-top: 0;
        text-align: center;
    }
    .center{
        vertical-align: center;
    }

</style>