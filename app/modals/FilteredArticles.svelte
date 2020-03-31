<script>
    import { closeModal } from 'svelte-native'
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
    .filteredWrapper{
        background-color: rgba(128, 128, 128, 0.16);
    }
</style>