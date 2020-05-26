<script>
    import { bookmarkList } from '~/services/stores/store'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'

    export let obj
    export let onTapFav
    export let onTapLeft
    export let leftIconSrc
    export let title

    let promise = isItemSavedToLocalStorage();
    let iconUrl = '~/assets/icons/heart.png'

// This function checks local storage to make sure the item (article or newspaper) is saved. If is is saved the image src (iconUrl) changes. That way the user is visually aware of what's saved and what's not. 

// There seems to be a problem with the css on iOS devices. As if theres a left margin that I cant work around. 

    async function isItemSavedToLocalStorage(){
        let bookmarks = await LocalStorage.getBookmarks();
        let savedSources = await LocalStorage.getLibraryListLTE();
        if(bookmarks.some(article => article.url == obj.url)){
            iconUrl = '~/assets/icons/heartDark.png'
        }
        if(savedSources.some(source => source.name == obj.name)){
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
</script>

<actionBar flat="true">
    <stackLayout 
        orientation="horizontal">
        <image 
            width="20" 
            height="20" 
            verticalAlignment="center" 
            src='{leftIconSrc}'
            on:tap={onTapLeft}/>
        <label 
            text='{title}'
            class="title montserrat" 
            fontSize="24" 
            verticalAlignment="center"/>
        <image 
            width="20" 
            height="20" 
            verticalAlignment="center"  
            src={iconUrl}
             on:tap={onTapFav}
            on:tap={() => switchIcon()}/>
    </stackLayout>
</actionBar>


<style>
    actionBar{
        width: 100%;
    }
    stackLayout{
        width: 100%;
    }
    label{
        width: 80%;
        text-transform: uppercase;
        text-align: center;
        font-family: 'Open Sans';
        color: #232323;
        font-weight: 500;
    }
</style>