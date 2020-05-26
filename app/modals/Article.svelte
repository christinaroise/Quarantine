<script>
    import { closeModal } from 'svelte-native'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import { favorites } from '~/services/stores/store'
    import ModalTopBar from '~/components/universal/bars/ModalTopBar'

    export let article

//This modal shows articles in webView

</script>

<frame actionBarHidden={false}>
    <page>
        <ModalTopBar
            onTapLeft={() => closeModal()}
            leftIconSrc='~/assets/icons/left-arrow.png'
            title="Quarantine"
            obj={article}
            onTapFav={() => LocalStorage.addOrRemoveItemTo(article, "SavedArticles")}/>
        <webView src='{article.url}'/>
    </page>
</frame>

<style>
</style>
