<script>
    import { closeModal } from 'svelte-native'
    export let article
</script>

<frame>
<page class="page">
    <actionBar flat="true" class="actionbarContainer">
        <flexBoxLayout class="wrapper">
            <stackLayout>
                <image on:tap={ () => closeModal() } width="20" src="~/assets/icons/left-arrow.png" class=" button fas icon1" />
            </stackLayout>
            <label class="title" text="Quarantine"/>
            <stackLayout>
                <image width="20" src="~/assets/icons/heart.png" class=" button fas icon1" />
            </stackLayout>
        </flexBoxLayout>
    </actionBar>
    <webView src='{article.url}' />
</page>
</frame>

<style>
    .actionbarContainer{
        width: 100%;
    }
    .title{
        width: 85%;
        vertical-align: center;
        text-align: center;       
        font-family: 'Open Sans';
        color: #232323;
        font-weight: 600;
    }
    .button{
        height: 100%;   
        vertical-align: center;
    }
</style>
