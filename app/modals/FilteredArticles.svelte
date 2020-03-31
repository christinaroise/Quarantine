<script>
    import { closeModal } from 'svelte-native'
    export let article
</script>

<frame>
    <page>
        <stackLayout class="filteredWrapper">
            <label text="test"/>
            <image on:tap={ () => closeModal() } width="20" src="~/assets/icons/left-arrow.png" class=" button fas icon1" />
        </stackLayout>
    </page>
</frame>

<style>

</style>