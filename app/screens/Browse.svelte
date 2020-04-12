<script>
    import { onMount } from 'svelte'
    import { navigate }  from 'svelte-native'
    import { FilterService } from '~/services/FilterService'
    import { SourceService } from '~/services/SourceService'
    import { ApiService } from '~/services/ApiService'
    import { ModalService } from '~/services/ModalService'

    import TopBar from '../components/universal/bars/TopBar'
    import Search from '../screens/Search'
    import Filter from '~/components/universal/containers/FilterContainer'
    import SecondaryList from '~/components/universal/lists/SecondaryList'


    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
    const api_key = 'f015a847676d491f9b581d535c9361ac' 
     // 'dc4286d2d7a04d47bb2ca997c66ecc73' 
     // 'e840db49fb1f48c99a39a73ddf05c0a4' 

    let sources = []
    let filterContainer = false
 
    onMount(() => {
        ApiService.get(`https://newsapi.org/v2/sources?country=${FilterService.getSelectedCountry()}&apiKey=${api_key}`).then(result => {
            sources = result.sources
        })
    })
    
    const goToSearch = async () => {
        navigate({
            page:Search,
            props:{
                    sources: sources,
                }
        })
    }

    function showFilterContainer(){
        filterContainer = !filterContainer
    }

</script>


<stackLayout class="backgroundColorWhite">
    <TopBar 
    leftIconSrc="~/assets/icons/search.png"
    leftOnTap={() => goToSearch()}
    title={'BROWSE'}
    rightIconSrc="~/assets/icons/filter.png"
    rightOnTap={() => showFilterContainer()}/>
    <label class="OpenSans" text="Find newspapers from across the globe"/>
    {#if filterContainer}
        <Filter/>
    {/if}
   <!-- <FilterContainer/> --> 
    <scrollView> 
        <stackLayout>
            <SecondaryList 
            items={sources}/>
        </stackLayout>
    </scrollView>
</stackLayout>


<style>
    .OpenSans {
        width: 100%;
        text-align: center;
        color: gray;
    }
</style>