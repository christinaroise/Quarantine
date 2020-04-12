<script>
    import { closeModal } from 'svelte-native'
    import RegularButton from '~/components/universal/buttons/RegularButton'
</script>


<cardView shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
    <flexBoxLayout class="container">
        <stackLayout class="card">
            <stackLayout class="textContent">
                <label
                class="h2 OpenSans"
                text="Filter"/> 
                <stackLayout>
                    <flexBoxLayout class="borderBottom">
                        <label text="Country"/>
                        <button text="+"/>
                    </flexBoxLayout>
                    <flexBoxLayout>
                        <label text="Category"/>
                        <button text="+"/>
                    </flexBoxLayout> 
                </stackLayout>
            </stackLayout>
            <flexBoxLayout>
                <RegularButton 
                onTap={ () => closeModal() }
                text="Set filter"/>
                <RegularButton 
                onTap={ () => closeModal() }
                text="Cancle"/>
            </flexBoxLayout>
        </stackLayout>
    </flexBoxLayout>
</cardView>

<style>
    .container{
        width: 90%;
        height: 50%;
        border-radius: 10%;
        background-color: white;
        justify-content: center;
        vertical-align: center;
        padding: 10;

    }

</style>