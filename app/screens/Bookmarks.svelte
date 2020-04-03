<script>
    import { ApiService } from '~/services/ApiService'
    import { FilterService } from '~/services/ApiService'
    import { ArticleService } from '~/services/ArticleService'
    import TopBar from '~/components/universal/bars/TopBar'
    import ColumnList from '~/components/universal/lists/ColumnList'
    import EmpytContainer from '~/components/universal/containers/EmptyContainer'

    let sources = [] 
    let articles = [] 

</script>

<stackLayout>
    <TopBar 
    title={'Bookmarks'}/>
    <ColumnList
    items={articles}/>
</stackLayout>
