<script>
    import {onMount} from 'svelte'
    import {FilterService} from '~/services/FilterService'
    import SwitchBar from '~/components/universal/bars/SwitchBar'

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

<page>
    <stackLayout>
        <flexBoxLayout class="topBar">
            <button text=""/>
            <label class="h1 title text-center montserrat" text="Filters" />
            <button class="textBtn" text="Clear"/>
        </flexBoxLayout>
        <flexBoxLayout class="wrapper">
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
                        <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="COVID-19"/>
                            <switch
                            bind:checked="{covidValue}"
                            on:checkedChange="{onCovidChange}"
                            backgroundColor="#C8A374"/>
                        </flexBoxLayout>
                        <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="Donald Trump"/>
                            <switch 
                            bind:checked="{trumpValue}"
                            on:checkedChange="{onTrumpChange}"
                            backgroundColor="#C8A374"/>
                        </flexBoxLayout>
                </stackLayout>

                <stackLayout  class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="App settings"/>
                      <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="Language"/>
                            <segmentedBar
                            bind:selectedIndex={languageNumber} 
                            on:selectedIndexChange="{onLanguageChange}"
                            selectedBackgroundColor='#C8A374'
                            selectedColor="white"
                            backgroundColor='white'
                            style=
                                'margin: 10; 
                                color: gray;
                                font-family: Open Sans'>
                                <segmentedBarItem title="English" />
                                <segmentedBarItem title="Norwegian" />
                            </segmentedBar>
                        </flexBoxLayout>
                </stackLayout>
            </stackLayout>
        </flexBoxLayout>
    </stackLayout>
</page>

<style>
    .wrapper{
        flex-direction: column;
    }
    .topBar{
        flex: 1;
        height: 60;
        margin: 10;
        margin-bottom: 0;
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

</style>