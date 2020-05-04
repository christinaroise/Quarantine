<script>
    import { closeModal } from 'svelte-native'
    export let article

    /*

            {#if optionsContainer == true}
            <flexBoxLayout class="optionsWrapper">
                <stackLayout class="optionsContainer">
                    <button text="Save to bookmarks"/>
                    <button text="Copy link"/>
                </stackLayout>
            </flexBoxLayout>
        {/if}

        */
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
                        <image width="20" src="~/assets/icons/more2.png" class=" button fas icon1" />
                    <stackLayout/>
            </flexBoxLayout>
        </actionBar>
        <webView src='{article.url}' />
    </page>
</frame>

<style>.actionbarContainer{
        width: 100%;
        vertical-align: center;
    }
    .title{
        width: 85%;
        text-align: center;       
        font-family: 'Open Sans';
        color: #232323;
        font-weight: 600;
    }
    .button{
        color: #232323;
        font-family: 'montserrat';
        height: 100%;
    }
    .optionsWrapper{
        width: 100%;
        height: auto;
        justify-content: flex-end;
        
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
