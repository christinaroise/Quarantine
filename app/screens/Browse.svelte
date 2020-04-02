<script>
    import TopBar from '../components/universal/TopBar'
    import FilterBar from '../components/universal/FilterBar'
    import Recommended from '../components/news/Recommended'
    import Newspapers from '../components/news/Newspapers'

</script>

<stackLayout>
    <TopBar 
    leftIconSrc={'~/assets/icons/search.png'} 
    title={'BROWSE'}
    rightIconSrc={'~/assets/icons/search.png'}/>
    <scrollView>
        <stackLayout>
           <Newspapers/>
        </stackLayout>
    </scrollView>
</stackLayout>


<style>

</style>