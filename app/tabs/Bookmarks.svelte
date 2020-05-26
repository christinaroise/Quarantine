<script>
    import { ApiService } from '~/services/ApiService'
    import { FilterService } from '~/services/ApiService'
    import { ArticleService } from '~/services/ArticleService'
    import { LocalStorage } from '~/services/localStorage/LocalStorage'
    import { articles, bookmarkList } from '~/services/stores/store'
    import TopBar from '~/components/universal/bars/TopBar'
    import ColumnList from '~/components/universal/lists/ColumnList'
    import EmptyContainer from '~/components/universal/containers/EmptyContainer'

    //Bookmarks is where all the articles that are saved to local storage by the user is shown. 

</script> 

<frame actionBarHidden={false}>
    <page>
        <TopBar 
        title={'Bookmarks'}/>
        <stackLayout>
            {#if $bookmarkList && $bookmarkList.length > 0}
                <ColumnList
                items={$bookmarkList}
                imgSrc={"~/assets/icons/more2.png"}/>
            {:else}
                <EmptyContainer
                text="Your list is empty"/>
            {/if}
        </stackLayout>
    </page>
</frame>
