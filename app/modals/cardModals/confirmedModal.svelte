<script>
    import { closeModal } from 'svelte-native'
    import RegularButton from '~/components/universal/buttons/RegularButton'
    export let source
</script>


<cardView shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
    <flexBoxLayout class="card">
        <stackLayout class="content">
            <stackLayout class="textContent">
                <label
                class="h2 timesNewRoman"
                text="{source.name}"/> 
                <label 
                class="OpenSans"
                textWrap="{true}"
                text="has been added to your library"/>
            </stackLayout>
            <RegularButton 
            onTap={ () => closeModal() }
            text="OK"/>
        </stackLayout>
    </flexBoxLayout>
</cardView>

<style>
    .card{
        background-color: white;
        width: 300;
        height: 180;
        border-radius: 10%;
        justify-content: center;
    }
    .content{
        vertical-align: center;
        text-align: center;
    }
    .textContent{
        padding: 15;
    }

</style>