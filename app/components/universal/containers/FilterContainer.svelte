<script>

//This filter container is currently not in use, but the idea is for it to pop-up when filtering in Browse is activated. 

</script>

<stackLayout class="backgroundColorWhite">
    <flexBoxLayout class="borderBottom">
        <label 
        class="marginLeft" 
        text="Country"/>
        <button
        androidElevation="0" 
        text="more"/>
    </flexBoxLayout>
    <flexBoxLayout class="borderBottom">
        <label 
        class="marginLeft" 
        text="Category"/>
        <button 
        androidElevation="0"
        text="more"/>
    </flexBoxLayout>
</stackLayout>

<style>
    stackLayout{
        justify-content: center;
        padding-top: 10;
        padding-bottom: 10;
    }
    label{
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