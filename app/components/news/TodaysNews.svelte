<script>
    import TodaysArticles from './articles/TodaysArticles'

</script>

<stackLayout class="wrapper">
    <label class="h2" text="Today's News"/>
    <scrollView orientation="horizontal" scrollBarIndicatorVisible={false}>
        <TodaysArticles/>
    </scrollView>
</stackLayout>

<style>
    .h2{
        margin: 15;
        font-weight: 600;
        color: #232323;
    }
</style>