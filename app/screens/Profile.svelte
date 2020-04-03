<script>
    import {onMount} from 'svelte'
    import {FilterService} from '~/services/FilterService'

    let countryNumber = 0
    let country = 'us'

    $: {
        country = countryNumber == 0 ? 'us' : 'no'
    }

    onMount(() => {
        country = FilterService.getCountryValue()
        console.log(country)
        if(country == 'us'){
            countryNumber = 0
        }else{
            countryNumber = 1
        }
    })

    //returns OLD value. NEEDS TO BE FIXED
    
    const onSelectedIndexChange = (value) =>{
        FilterService.setCountryEnabled(country)
        console.log(value)
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
                            <stackLayout class="height">
                                <switch checked="{true}" backgroundColor="#C8A374"/>
                            </stackLayout>
                        </flexBoxLayout>
                        <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="Most Popular"/>
                            <stackLayout class="height">
                                <switch checked="{false}" backgroundColor="#C8A374"/>
                            </stackLayout>
                        </flexBoxLayout>
                </stackLayout>

            <stackLayout class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="Filter by"/>
                        <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="Country"/>
                            <segmentedBar
                            bind:selectedIndex={countryNumber}
                            on:selectedIndexChange="{(e) => { onSelectedIndexChange(e)
                            }}"
                            selectedBackgroundColor='#C8A374'
                            backgroundColor='white'
                            style=
                                'margin: 10; 
                                color: gray;
                                font-family: Open Sans'>
                            <segmentedBarItem title="Norway" />
                            <segmentedBarItem title="USA" />
                        </segmentedBar>
                        </flexBoxLayout>
                        <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="COVID-19"/>
                            <switch checked="{false}" backgroundColor="#C8A374"/>
                        </flexBoxLayout>
                        <flexBoxLayout class="borderBottom">
                            <label class="filterLabel marginLeft" text="Donald Trump"/>
                            <switch checked="{false}" backgroundColor="#C8A374"/>
                        </flexBoxLayout>
                </stackLayout>

                <stackLayout  class="filterContainer">
                    <label class="h3 montserrat marginLeft" text="Settings"/>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Language"/>
                        <segmentedBar
                            selectedBackgroundColor='#C8A374'
                            backgroundColor='white'
                            style=
                                'margin: 10; 
                                color: gray;
                                font-family: Open Sans'>
                            <segmentedBarItem title="NO" />
                            <segmentedBarItem title="EN" />
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
    .height{
        height: 30;
        margin: 8 0;
    }
    .filterWrapper{
        flex: 3;
    }
    .filterContainer{
        margin-bottom: 30;
    }
    .filterLabel{
        flex: 1;
        font-weight: 500;
    }

</style>