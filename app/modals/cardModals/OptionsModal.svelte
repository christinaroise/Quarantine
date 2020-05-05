<script>
    import { closeModal } from 'svelte-native'
    import { LocalStorage } from '~/services/LocalStorage'
    import { bookmarkList } from '~/services/store'
    import RegularButton from '~/components/universal/buttons/RegularButton'

    export let show
    export let list 
    export let article

</script>

<frame actionBarHidden={true}>
    <page>
        <cardView shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
            <stackLayout class="container">
                <stackLayout class="emptyContainer">
                </stackLayout>
                <stackLayout class="card backgroundcolorWhite">
                    <flexBoxLayout class="filterWrapper flexColumn">
                        <stackLayout class="borderBottom">
                            <flexBoxLayout class="filterContainer">
                                    <flexBoxLayout 
                                    class="iconContainer">
                                        <image 
                                        height="30" width="20" class="icon"
                                        src={"~/assets/icons/book.png"}/>
                                    </flexBoxLayout>
                                <button text="{show}"/>
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
                                <button 
                                on:tap={() => LocalStorage.popArticleFromList(article, $bookmarkList)}
                                text="Remove from {list}"/>
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
    </page>
</frame>

<style>
    .container{
        width: 380;
        height: 100%;
        border-radius: 10%;
        background-color: transparent;
        vertical-align: bottom;
    }
    .card{
        flex: 2;
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
        margin: 20 10;
    }

</style>