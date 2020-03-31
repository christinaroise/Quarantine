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
    .h2{
        margin: 10;
        font-weight: 600;
        color: #232323;
    }
</style>