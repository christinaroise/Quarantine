<script>
    import { favorites } from '~/services/store'
    
    export let obj
    export let onTapFav
    export let onTapLeft
    export let leftIconSrc
    export let title
    export let isFavorited = undefined
</script>

<actionBar flat="true" class="actionbarContainer">
    <flexBoxLayout class="wrapper">
        <stackLayout>
            <image on:tap={onTapLeft} width="20" src='{leftIconSrc}' class=" button fas icon1" />
        </stackLayout>
        <label class="title" text={title}/>
        <stackLayout>
            {#if $favorites.has(obj.id)}
                <image
                on:tap={onTapFav}
                width="20" 
                src='~/assets/icons/heartDark.png' 
                class=" button fas icon1" 
                class:fav={isFavorited}/>
            {:else}
                <image 
                on:tap={onTapFav}
                width="20" 
                src='~/assets/icons/heart.png' 
                class=" button fas icon1" 
                class:fav={isFavorited}/>
            {/if}
        </stackLayout>
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
    .fav{
        width: 40;
    }
</style>