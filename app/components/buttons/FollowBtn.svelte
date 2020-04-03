<script>

    export let title
</script>

<flexBoxLayout class="followBtn">
    <button text={title}/>
</flexBoxLayout>

<style>
    .followBtn{
        width: 100%;
        justify-content: flex-end;
    }

    button{
        height: 30;
        padding-left: 5;
        padding-right: 5;
        background-color: #C8A374;
        border-radius: 10%;
        margin-right: 8;
        color: white;
        font-size: 12;
        font-family: 'Open Sans';
        text-transform: uppercase;
    }
</style>