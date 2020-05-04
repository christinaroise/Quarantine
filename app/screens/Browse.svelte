<script>
    import { onMount } from 'svelte'
    import { sources } from '~/services/store.js'
    import { navigate }  from 'svelte-native'
    import { FilterService } from '~/services/FilterService'
    import { SourceService } from '~/services/SourceService'
    import { ApiService } from '~/services/ApiService'
    import { ModalService } from '~/services/ModalService'

    import TopBar from '../components/universal/bars/TopBar'
    import Search from '../screens/Search'
    import Filter from '~/components/universal/containers/FilterContainer'
    import FilterModal from '~/modals/cardModals/FilterModal'
    import SecondaryList from '~/components/universal/lists/SecondaryList'


    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')
    
    const goToSearch = async () => {
        navigate({
            page:Search,
            props:{
                    sources: $sources,
                }
        })
    }

    function showFilterContainer(){
        filterContainer = !filterContainer
    }

</script> 

<stackLayout>
    <TopBar 
    leftIconSrc="~/assets/icons/search.png"
    leftOnTap={() => goToSearch($sources)}
    title={'BROWSE'}
    rightIconSrc="~/assets/icons/filter.png"
    rightOnTap={() => ModalService.showFilterModal()}/>
    <label class="OpenSans" text="Find newspapers from across the globe"/>
    <scrollView 
    scrollBarIndicatorVisible={false}> 
        <stackLayout class="widthAuto backgroundcolorWhite">
            <SecondaryList 
            items={$sources}/>
        </stackLayout>
    </scrollView>
</stackLayout>


<style>
    .OpenSans {
        width: 100%;
        text-align: center;
        color: gray;
        padding-bottom: 15;
    }
</style>