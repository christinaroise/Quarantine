<script>
    import { Template } from 'svelte-native/components';

    export let test;
    export let onItemTap;
</script>

 <listView 
items="{test}"
on:itemTap="{onItemTap}">
    <Template 
    let:item>
        {#if item.name}
            <label text="{item.name}"/>
        {:else}
            <label text="{item}"/>
        {/if}
    </Template>
</listView>

<style>
    listView{
        height: 180;
        margin: 15;
        margin-top: 0;
        text-align: center;
    }
</style>