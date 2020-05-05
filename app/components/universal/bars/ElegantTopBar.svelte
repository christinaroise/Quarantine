<script>
export let onTapLeft
export let leftIconSrc
export let title
export let onTapRight
export let rightIconSrc

</script>


<actionBar flat="true" class="actionbarContainer">
    <flexBoxLayout class="wrapper">
        <stackLayout>
            <image on:tap={onTapLeft} width="20" src='{leftIconSrc}' class=" button fas icon1" />
        </stackLayout>
        <label class="title" text={title}/>
            <stackLayout>
                <image on:tap={onTapRight} width="20" src="{rightIconSrc}" class=" button fas icon1" />
            <stackLayout/>
    </flexBoxLayout>
</actionBar>


<style>
    .actionbarContainer{
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
</style>