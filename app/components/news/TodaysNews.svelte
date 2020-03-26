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
    .wrapper{
        margin-bottom: 10;
    }
    .h2{
        font-weight: 600;
    }
</style>