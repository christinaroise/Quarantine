<script>
    export let onTap;
    export let text;
    export let backgroundColor;
</script>

<button
androidElevation="0"
class="{backgroundColor}"
on:Tap={onTap}
text="{text}"/>

<style>
    button{
        width: 100;
        color: white;
        font-size: 20;
        font-weight: 400;
        font-family: 'Open Sans';
    }
</style>