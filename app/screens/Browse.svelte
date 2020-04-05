<script>
    import { onMount } from 'svelte'
    import { FilterService } from '~/services/FilterService'
    import { SourceService } from '~/services/SourceService'
    import { ApiService } from '~/services/ApiService'

    import TopBar from '../components/universal/bars/TopBar'
    import FilterBar from '../components/universal/bars/FilterBar'
    import SecondaryList from '~/components/universal/lists/SecondaryList'


    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
   const api_key = 'e840db49fb1f48c99a39a73ddf05c0a4' 
     // 'f015a847676d491f9b581d535c9361ac' 
     // 'dc4286d2d7a04d47bb2ca997c66ecc73' 

    let sources = []

    onMount(() => {
        ApiService.get(`https://newsapi.org/v2/sources?country=${FilterService.getSelectedCountry()}&apiKey=${api_key}`).then(result => {
            sources = result.sources
        })
    })

</script>

<stackLayout>
    <TopBar  
    title={'BROWSE'}/>
    <scrollView>
        <stackLayout>
            <SecondaryList 
           items={sources}/>
        </stackLayout>
    </scrollView>
</stackLayout>