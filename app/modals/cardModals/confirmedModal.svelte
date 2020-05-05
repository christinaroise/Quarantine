<script>
    import { closeModal } from 'svelte-native'
    import RegularButton from '~/components/universal/buttons/RegularButton'
    export let title
    export let text
</script>

<frame actionBarHidden={true}>
    <page>
        <cardView shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
            <flexBoxLayout class="card">
                <stackLayout class="content">
                    <stackLayout class="textContent">
                        <label
                        class="h2 timesNewRoman"
                        text="{title}"/> 
                        <label 
                        class="OpenSans"
                        textWrap="{true}"
                        text="{text}"/>
                    </stackLayout>
                    <flexBoxLayout class="buttonContainer">
                        <RegularButton 
                        onTap={ () => closeModal() }
                        text="OK"/>
                    </flexBoxLayout>
                </stackLayout>
            </flexBoxLayout>
        </cardView>
    </page>
</frame>


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
    .buttonContainer{
        width: 90%;
    }

</style>