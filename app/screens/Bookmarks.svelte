<script>
    import { ApiService } from '~/services/ApiService'
    import { FilterService } from '~/services/ApiService'
    import { ArticleService } from '~/services/ArticleService'
    import { LocalStorage } from '~/services/LocalStorage'
    import { articles, bookmarkList } from '~/services/store'
    import TopBar from '~/components/universal/bars/TopBar'
    import ColumnList from '~/components/universal/lists/ColumnList'
    import EmptyContainer from '~/components/universal/containers/EmptyContainer'

</script> 

<stackLayout>
    <TopBar 
    title={'Bookmarks'}/>
    {#if $bookmarkList && $bookmarkList.length > 0}
        <ColumnList
        items={$bookmarkList}
        imgSrc={"~/assets/icons/more2.png"}/>
    {:else}
        <EmptyContainer
        text="Your list is empty"/>
    {/if}}
</stackLayout>
