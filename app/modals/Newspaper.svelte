<script>
    import { closeModal } from 'svelte-native'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import ModalTopBar from '~/components/universal/bars/ModalTopBar'
    import MainList from '~/components/universal/lists/MainList'
    
    export let source
    export let articles
    
    let optionsContainer = false

//This modal shows a newspaper's articles as a list. You can further click on an article in order to read it in webview (article.svelte (modal))

</script>

<frame actionBarHidden={true}>
    <page class="page">
        <ModalTopBar
            onTapLeft={() => closeModal()}
            leftIconSrc='~/assets/icons/left-arrow.png'
            title={source.name}
            obj={source}
            onTapFav={() => LocalStorage.addOrRemoveItemTo(source, "SavedNewspapers")}/>
        <stackLayout>
            <MainList
            items={articles}/>
        </stackLayout>
    </page>
</frame>

<style>
    .page{
        width: 100%;
    }
</style>