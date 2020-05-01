<script>
    import { closeModal } from 'svelte-native'
    import RegularButton from '~/components/universal/buttons/RegularButton'

</script>


<cardView shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
    <stackLayout class="container">
        <stackLayout class="emptyContainer">
        </stackLayout>
        <stackLayout class="card">
            <flexBoxLayout class="filterWrapper flexColumn">
                <stackLayout class="borderBottom">
                    <flexBoxLayout class="filterContainer">
                            <flexBoxLayout 
                            class="iconContainer">
                                <image 
                                height="30" width="20" class="icon"
                                src={"~/assets/icons/book.png"}/>
                            </flexBoxLayout>
                        <button text="Show more"/>
                    </flexBoxLayout>
                </stackLayout>
                <stackLayout class="borderBottom">
                    <flexBoxLayout class="filterContainer">
                        <flexBoxLayout 
                        class="iconContainer">
                            <image 
                            height="20" width="20" class="icon"
                            src={"~/assets/icons/share.png"}/>
                        </flexBoxLayout>
                        <button text="Copy link"/>
                    </flexBoxLayout> 
                </stackLayout>
                <stackLayout>
                    <flexBoxLayout class="filterContainer">
                        <flexBoxLayout 
                        class="iconContainer">
                            <image 
                            height="30" width="20" class="icon"
                            src={"~/assets/icons/delete.png"}/>
                        </flexBoxLayout>
                        <button text="Remove from library"/>
                    </flexBoxLayout> 
                </stackLayout>
            </flexBoxLayout>
            <flexBoxLayout class="buttonContainer">
                <RegularButton 
                onTap={ () => closeModal() }
                text="Cancle"/>
            </flexBoxLayout>
        </stackLayout>
    </stackLayout>
</cardView>

<style>
    .container{
        width: 100%;
        height: 100%;
        border-radius: 10%;
        background-color: transparent;
        vertical-align: bottom;
        padding: 10;
    }
    .card{
        flex: 2;
        background-color: white;
        width: 100%;
        height: auto;
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
    }
    .filterWrapper{
        padding: 20;
        height: auto;
        vertical-align: bottom;
    }
    .iconContainer{
        height: 20;
    }
    button{
        flex: 2;
        color: #232323;
        text-align: left;
    }
    .flexColumn{
        flex-direction: column;
    }
    .buttonContainer{
        justify-content: space-evenly;
        margin-bottom: 10;
    }

</style>