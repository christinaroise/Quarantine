<script>
    export let text
</script>


<stackLayout class="emptyContainer">
    <label 
    textWrap="{true}"
    class="text-centered body openSans" 
    text={text}/>
</stackLayout>

<style>
    .emptyContainer{
        width: 70%;
        height: 100%;
        vertical-align: center;
        text-align: center;
    }
</style>