<script>


</script>

<stackLayout class="container backgroundColorWhite">
    <flexBoxLayout class="borderBottom">
        <label class="filterLabel marginLeft" text="Country"/>
        <button text="more"/>
    </flexBoxLayout>
    <flexBoxLayout class="borderBottom">
        <label class="filterLabel marginLeft" text="Category"/>
        <button text="more"/>
    </flexBoxLayout>
</stackLayout>

<style>
    .container{
        justify-content: center;
        padding-top: 10;
        padding-bottom: 10;
    }
    .filterLabel{
        text-transform: uppercase;
    }
    button{
        background-color: lightgray;
        border-width: 1;
        color: white;
        border-radius: 10%;
        margin-right: 15;
        font-size: 18;
    }
</style>