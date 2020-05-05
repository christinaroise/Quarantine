<script>
    import { closeModal } from 'svelte-native'
    import { LocalStorage } from '~/services/LocalStorage'
    import { saveOrRemoveText, bookmarkList } from '~/services/store'
    import ElegantTopBar from '~/components/universal/bars/ElegantTopBar'

    export let article
    
    let optionsContainer = false

    function isOptionsContainerActive(){
        if(optionsContainer == false){
            optionsContainer = true
        }else if(optionsContainer == true){
            optionsContainer = false
        }
    }
    for(var i = 0; i < $bookmarkList.length; i ++){
        if($bookmarkList[i].url == article.url){
            $saveOrRemoveText = "Remove"
        }else{
            $saveOrRemoveText = "Save to bookmarks"
        }
    }

</script>

<frame actionBarHidden={false}>
    <page class="page">
        <ElegantTopBar
            onTapLeft={() => closeModal()}
            leftIconSrc='~/assets/icons/left-arrow.png'
            title="Quarantine"
            rightIconSrc='~/assets/icons/more2.png'
            onTapRight={ () => isOptionsContainerActive() }/>
        {#if optionsContainer == true}
            <flexBoxLayout class="optionsWrapper">
                <stackLayout class="optionsContainer">
                    <button 
                    on:tap={ () => LocalStorage.saveArticle(article) }
                    text="{$saveOrRemoveText}"/>
                    <button text="Copy link"/> 
                </stackLayout>
            </flexBoxLayout>
        {:else if optionsContainer == false}
            <webView src='{article.url}' />
        {/if}
    </page>
</frame>

<style>
    .optionsWrapper{
        width: 100%;
        height: 90;
        justify-content: flex-end; 
        vertical-align: top;
    }
    .optionsContainer{
        background-color: white;
        width: auto;
    }
    button{
        margin: 0;
        padding: 0 10;
        text-align: right;
        color: #232323;
    }
</style>
