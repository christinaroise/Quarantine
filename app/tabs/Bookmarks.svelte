<script>
    import { bookmarkList } from '~/services/stores/listsStore';
    import ActionBar from '~/components/universal/bars/ActionBar';
    import ColumnList from '~/components/universal/lists/ColumnList';
    import EmptyContainer from '~/components/universal/containers/EmptyContainer'

    //Bookmarks is where all the articles that are saved to local storage by the user is shown. 

</script> 

<frame actionBarHidden={false}>
    <page>
        <ActionBar 
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
