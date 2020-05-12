<script>
    import { bookmarkList } from '~/services/store'
    import { LocalStorage } from '~/services/LocalStorage'

    export let obj
    export let onTapFav
    export let onTapLeft
    export let leftIconSrc
    export let title

    let promise = isArticleBookmarked();
    let iconUrl = '~/assets/icons/heart.png'

    async function isArticleBookmarked(){
        var bookmarks = await LocalStorage.getBookmarks();
        if(bookmarks.some(article => article.url == obj.url)){
            iconUrl = '~/assets/icons/heartDark.png'
        }
    }

    function switchIcon() {
        if(iconUrl == '~/assets/icons/heart.png'){
            iconUrl = '~/assets/icons/heartDark.png'
        }else{
            iconUrl = '~/assets/icons/heart.png'
        }
    }

    //$bookmarkList does not automatically update

</script>

<actionBar flat="true" class="actionbarContainer">
    <flexBoxLayout class="wrapper">
        <stackLayout>
            <image on:tap={onTapLeft} width="20" src='{leftIconSrc}' class=" button fas icon1" />
        </stackLayout>
        <label class="title" text={title}/>
        <stackLayout>
            <image
                on:tap={onTapFav}
                on:tap={() => switchIcon()}
                width="20" 
                src={iconUrl}
                class=" button fas icon1"/>

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
</style>