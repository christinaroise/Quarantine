<script>
    import RecommendedArticles from './articles/RecommendedArticles'

</script>

<stackLayout class="wrapper">
    <label class="h2" text="Recommended"/>
    <scrollView orientation="horizontal" scrollBarIndicatorVisible={false}>
        <RecommendedArticles/>
    </scrollView>
</stackLayout>

<style>
    .wrapper{
        margin-bottom: 15;
    }
    .h2{
        font-weight: 600;
    }
</style>