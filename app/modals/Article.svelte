<script>
    import { closeModal } from 'svelte-native'
    import { LocalStorage } from '~/services/LocalStorage'
    import { favorites } from '~/services/store'
    import ElegantTopBar from '~/components/universal/bars/ElegantTopBar'

    export let article

</script>

<frame actionBarHidden={false}>
    <page>
        <ElegantTopBar
            onTapLeft={() => closeModal()}
            leftIconSrc='~/assets/icons/left-arrow.png'
            title="Quarantine"
            obj={article}
            onTapFav={() => LocalStorage.createBookmarks(article)}/>
        <webView src='{article.url}'/>
    </page>
</frame>

<style>
</style>
