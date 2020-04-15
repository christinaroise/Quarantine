<script>
    export let text
</script>

<stackLayout>
    <flexBoxLayout>
        <button
        text={text}/>
    </flexBoxLayout>
</stackLayout>

<style>
    button{
        background-color: lightgray;
        color: white;
        border-radius: 10%;
        padding: 5;
        margin: 5;
    }
</style>