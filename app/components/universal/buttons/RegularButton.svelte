<script>
    export let text
    export let onTap
</script>

<button 
on:tap={onTap}
text="{text}"
/>

<style>
    button{
        background-color: #C8A374;
        color: white;
        border-radius: 10%;
    }
</style>