<script>
    import {screen} from "tns-core-modules/platform/platform"
    import { closeModal } from 'svelte-native'
    import { LocalStorage } from '~/services/LocalStorage'
    import { sourceList, heartIcon } from '~/services/store'
    import ElegantTopBar from '~/components/universal/bars/ElegantTopBar'
    import PrimaryList from '~/components/universal/lists/PrimaryList'
    
    export let source
    export let articles
    
    let optionsContainer = false

    const fullWidth = screen.mainScreen.widthPixels

</script>

<frame actionBarHidden={true}>
    <page class="page">
        <ElegantTopBar
            onTapLeft={() => closeModal()}
            leftIconSrc='~/assets/icons/left-arrow.png'
            title={source.name}
            rightIconSrc={$heartIcon}
            onTapRight={() => LocalStorage.addToLibrary(source)}/>
        <stackLayout>
            <PrimaryList
            items={articles}/>
        </stackLayout>
    </page>
</frame>

<style>
    .page{
        width: 100%;
    }
</style>