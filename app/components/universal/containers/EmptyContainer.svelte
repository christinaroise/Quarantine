<script>
    export let text
</script>


<stackLayout class="emptyContainer">
    <label class="text-centered body openSans" text={text}/>
</stackLayout>

<style>
    .emptyContainer{
        width: 100%;
        height: 100%;
        vertical-align: center;
        text-align: center;
    }
</style>