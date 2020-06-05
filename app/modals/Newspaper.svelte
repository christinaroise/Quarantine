<script>
    import { closeModal } from 'svelte-native';
    import { LocalStorage } from '~/services/localStorage/LocalStorage';
    import ModalActionBar from '~/components/universal/bars/ModalActionBar';
    import List from '~/components/universal/lists/List';
    
    export let source;
    export let articles;

    //This modal shows a newspaper's articles as a list. You can further click on an article in order to read it in webview (article.svelte (modal))
</script>

<frame actionBarHidden={true}>
    <page>
        <ModalActionBar
            onTapLeft={() => closeModal()}
            leftIconSrc='~/assets/icons/left-arrow.png'
            title={source.name}
            obj={source}
            onTapFav={() => LocalStorage.addOrRemoveItemTo(source, "SavedNewspapers")}/>
        <stackLayout>
            <List
            items={articles}/>
        </stackLayout>
    </page>
</frame>

<style>
    page{
        width: 100%;
    }
</style>