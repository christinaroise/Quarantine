<script>
    export let onTap; 
    export let buttonText;
    export let backgroundColor;
</script>

<button 
    androidElevation="0"
    on:Tap={onTap}
    text="{buttonText}"
    class="{backgroundColor}"/>

<style>
    button{
        color: white;
        flex: 1;
        border-radius: 10;
    }
</style>