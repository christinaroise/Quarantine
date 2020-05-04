<script>
    import { closeModal } from 'svelte-native'
    import { LocalStorage } from '~/services/LocalStorage'
    import { inModal } from '~/services/store'
    import { ArticleService } from '~/services/ArticleService'
    import { ModalService } from '~/services/ModalService'
    import { ApiService } from '~/services/ApiService'
    import ElegantTopBar from '~/components/universal/bars/ElegantTopBar'
    import PrimaryList from '~/components/universal/lists/PrimaryList'
    
    export let source
    export let articles

    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')

    $inModal = true

</script>

<frame>
    <page>
        <stackLayout class="wrapper backgroundcolorWhite">
            <cardView class="backgroundcolorWhite" shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
                <ElegantTopBar 
                leftIconSrc={'~/assets/icons/left-arrow.png'} 
                onTap={ () => closeModal() }
                title={source.name}
                rightIconSrc={'~/assets/icons/heart.png'}
                rightOnTap={ () => LocalStorage.addToLibrary(source) }/>
            </cardView>
            <PrimaryList
            bind:value={$inModal}
            items={articles}/>
        </stackLayout>
    </page>
</frame>

<style>
    cardView{
        z-index: 10;
    }
</style>