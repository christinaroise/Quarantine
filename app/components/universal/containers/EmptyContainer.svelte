<script>
    export let text
    //This is an empty container used when there are no data to be fetched. For example in Library or Bookmarks when the user has yet to save items to local storage. 
</script>


<stackLayout class="emptyContainer">
    <label 
    textWrap="{true}"
    class="text-centered body openSans" 
    text={text}/>
</stackLayout>

<style>
    .emptyContainer{
        width: 100%;
        height: 100%;
        padding-left: 50;
        padding-right: 50;
        vertical-align: center;
        text-align: center;
    }
</style>