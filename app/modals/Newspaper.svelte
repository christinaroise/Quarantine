<script>
    import { closeModal } from 'svelte-native'
    import { LocalStorage } from '~/services/LocalStorage'
    import { ArticleService } from '~/services/ArticleService'
    import { ApiService } from '~/services/ApiService'
    import ElegantTopBar from '~/components/universal/bars/ElegantTopBar'
    import PrimaryList from '~/components/universal/lists/PrimaryList'
    
    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')

    export let source
    export let articles

</script>


<stackLayout class="backgroundcolorWhite">
    <cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
        <ElegantTopBar 
        leftIconSrc={'~/assets/icons/left-arrow.png'} 
        onTap={ () => closeModal() }
        title={source.name}
        rightIconSrc={'~/assets/icons/heart.png'}
        rightOnTap={ () => LocalStorage.addToLibrary(source) }/>
    </cardView>
    <PrimaryList
    items={articles}/>
</stackLayout>



<style>
    cardView{
        z-index: 10;
    }
</style>