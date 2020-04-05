<script>
    import { closeModal } from 'svelte-native'
    import { SourceServices } from '~/services/SourceService'
    import { ArticleService } from '~/services/ArticleService'
    import ElegantTopBar from '~/components/universal/bars/ElegantTopBar'
    import PrimaryList from '~/components/universal/lists/PrimaryList'
    
    const utilsModule = require('tns-core-modules/utils/utils')
    const appSettings = require('tns-core-modules/application-settings')

    let articles = []

    export let item

</script>

<frame>
    <page class="backgroundcolorWhite" actionBarHidden={true}>
        <stackLayout>
            <cardView shadowOffsetHeight="2" shadowOpacity="0.1" shadowRadius="8">
                <ElegantTopBar 
                leftIconSrc={'~/assets/icons/left-arrow.png'} 
                onTap={() => closeModal()}
                title={item.name}
                rightIconSrc={'~/assets/icons/heart.png'}/>
            </cardView>
            <PrimaryList 
            item={articles}/>
        </stackLayout>
    </page>
</frame>

<style>
    cardView{
        z-index: 10;
    }
</style>