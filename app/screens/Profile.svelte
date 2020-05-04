<script>
    import {onMount} from 'svelte'
    import {FilterService} from '~/services/FilterService'
    import TopBar from '~/components/universal/bars/TopBar'

    /*$: {
        country = countryNumber == 0 ? 'us' : 'no'

        checked="{false}" 
        on:checkedChange="{onCheckedChange}"
    }*/

    let country = FilterService.getSelectedCountry()
    let countryNumber = FilterService.getSelectedCountry() == 'us'? 0 : 1

    let covidValue = FilterService.isCovidEnabled()

    let trumpValue = FilterService.isTrumpEnabled()

    let language = FilterService.getLanguage()
    let languageNumber = FilterService.getLanguage() == 'en'? 0 : 1 


    onMount(() => {

    })

    function onCountryChange(){
        setTimeout(function(){ 
            console.log(countryNumber)
            country = countryNumber == 0 ? 'us' : 'no'
            FilterService.setSelectedCountry(country)
        }, 0);
    }

    function onCovidChange(){
        setTimeout(function(){ 
            FilterService.setCovidEnabled(covidValue)
            console.log(covidValue)
        }, 0);
    }

    function onTrumpChange(){
        setTimeout(function(){ 
            FilterService.setTrumpEnabled(trumpValue)
            console.log(trumpValue)
        }, 0);
    }

    function onLanguageChange(){
        setTimeout(function(){ 
            language = languageNumber == 0 ? 'en' : 'no'
            FilterService.setLanguage(language)
            console.log(language)
        }, 0);
    }


</script>


<stackLayout>
    <TopBar
    title="Filters"/>
    <scrollView>
        <stackLayout class="heightAuto wrapper">
            <stackLayout class="filterWrapper">
                <stackLayout class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="Sort by"/>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Newest"/>
                        <switch 
                        checked="{false}" 
                        backgroundColor="#C8A374"/>
                    </flexBoxLayout>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Most popular"/>
                        <switch 
                        checked="{false}" 
                        backgroundColor="#C8A374"/>
                    </flexBoxLayout>
                </stackLayout>
            <stackLayout class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="Filter by"/>
                        <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="Country"/>
                            <segmentedBar
                            bind:selectedIndex={countryNumber} 
                            on:selectedIndexChange="{onCountryChange}"
                            selectedBackgroundColor='#C8A374'
                            backgroundColor='white'
                            style=
                                'margin: 10; 
                                color: gray;
                                font-family: Open Sans'>
                                <segmentedBarItem title="USA" />
                                <segmentedBarItem title="Norway" />
                            </segmentedBar>
                        </flexBoxLayout>
                        <flexBoxLayout class="tile borderBottom">
                            <stackLayout class="filterLabel marginLeft">
                                <label text="COVID-19"/>
                                <label class="body" text="Filters out any COVID-19 related content"/>
                            </stackLayout>
                            <switch
                            bind:checked="{covidValue}"
                            on:checkedChange="{onCovidChange}"
                            backgroundColor="#C8A374"/>
                        </flexBoxLayout>
                        <flexBoxLayout class="tile borderBottom">
                            <stackLayout class="filterLabel marginLeft">
                                <label text="Donald Trump"/>
                                <label class="body" text="Filters out any Trump related content"/>
                            </stackLayout>
                            <switch 
                            bind:checked="{trumpValue}"
                            on:checkedChange="{onTrumpChange}"
                            backgroundColor="#C8A374"/>
                        </flexBoxLayout>
                </stackLayout>

                <stackLayout  class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="App settings"/>
                    <flexBoxLayout class="tile borderBottom">
                        <stackLayout class="filterLabel marginLeft">
                            <label text="Language"/>
                            <label class="body" text="More options to come"/>
                        </stackLayout>
                        <segmentedBar
                            selectedBackgroundColor='#C8A374'
                            color='white'
                            style=
                                'margin: 10; 
                                font-family: Open Sans
                                border-radius: 10%;'>
                            <segmentedBarItem title="English" />
                        </segmentedBar>
                    </flexBoxLayout>
                </stackLayout>
            </stackLayout>
        </stackLayout>
    </scrollView>
</stackLayout>

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

</style>