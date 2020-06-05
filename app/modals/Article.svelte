<script>
    import { closeModal } from 'svelte-native';
    import { LocalStorage } from '~/services/localStorage/LocalStorage';
    import ModalActionBar from '~/components/universal/bars/ModalActionBar';

    export let article;

//This modal shows articles in webView

</script>

<frame actionBarHidden={false}>
    <page>
        <ModalActionBar
            onTapLeft={() => closeModal()}
            leftIconSrc='~/assets/icons/left-arrow.png'
            title="Quarantine"
            obj={article}
            onTapFav={() => LocalStorage.addOrRemoveItemTo(article, "SavedArticles")}/>
        <webView src='{article.url}'/>
    </page>
</frame>
