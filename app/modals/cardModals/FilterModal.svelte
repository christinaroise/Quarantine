<script>
    import { closeModal } from 'svelte-native'
    import RegularButton from '~/components/universal/buttons/RegularButton'
    import SmallButton from '~/components/universal/buttons/SmallButton'
    import countries from '~/json/countries.json'
    import { categories } from '~/services/store'

    let countryIsEnabled = false
    let categoryIsEnabled = false
    let categoryBtnText="+"
    let countryBtnText="+"

    function enableCategories(){
        categoryIsEnabled = !categoryIsEnabled
        if(categoryBtnText=="+"){
            categoryBtnText="-"
        }else{
            categoryBtnText="+"
        }
    }
    function enableCountries(){
        countryIsEnabled = !countryIsEnabled
        if(countryBtnText=="+"){
            countryBtnText="-"
        }else{
            countryBtnText="+"
        }
    }

</script>

<frame actionBarHidden={true}>
    <page>
        <cardView shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
            <stackLayout class="container">
                <stackLayout class="emptyContainer">
                </stackLayout>
                <flexBoxLayout class="card flexColumn">
                    <flexBoxLayout class="filterWrapper flexColumn">
                        <label
                        class="h2 OpenSans"
                        text="Filter"/> 
                        <stackLayout>
                            <stackLayout class="borderBottom">
                                <flexBoxLayout class="filterContainer">
                                    <label text="Country"/>
                                    <button 
                                    id="showMoreBtn"
                                    on:Tap={() => enableCountries() }
                                    text="{countryBtnText}"/>
                                </flexBoxLayout>
                                {#if countryIsEnabled}
                                    <flexBoxLayout class="smallButtonContainer">
                                        <scrollView 
                                        scrollBarIndicatorVisible={false}>
                                            <wrapLayout class="heightAuto">
                                                {#each countries as country}
                                                    <SmallButton 
                                                    width="auto" 
                                                    text={country.name}/>
                                                {:else}
                                                    <label text="Ops!"/>
                                                {/each}
                                            </wrapLayout>
                                        </scrollView>
                                    </flexBoxLayout>
                                {/if}
                            </stackLayout>
                            <stackLayout>
                                <flexBoxLayout class="filterContainer">
                                    <label text="Category"/>
                                    <button 
                                    id="showMoreBtn"
                                    on:Tap={() => enableCategories() }
                                    text="{categoryBtnText}"/>
                                </flexBoxLayout> 
                                {#if categoryIsEnabled}
                                    <flexBoxLayout class="smallButtonContainer">
                                        <scrollView
                                        scrollBarIndicatorVisible={false}>
                                            <wrapLayout class="heightAuto">
                                                {#each $categories as category}
                                                    <SmallButton 
                                                    width="auto" 
                                                    text={category}/>
                                                {:else}
                                                    <label text="Ops!"/>
                                                {/each}
                                            </wrapLayout>
                                        </scrollView>
                                    </flexBoxLayout>
                                {/if}
                            </stackLayout>
                        </stackLayout>
                    </flexBoxLayout>
                    <flexBoxLayout class="buttonContainer">
                        <RegularButton 
                        onTap={ () => closeModal() }
                        text="Set filter"/>
                        <RegularButton 
                        onTap={ () => closeModal() }
                        text="Cancle"/>
                    </flexBoxLayout>
                </flexBoxLayout>
            </stackLayout>
        </cardView>
    </page>
</frame>


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
    button{
        color: #C8A374;
        font-size: 40;
        font-weight: 200;
        text-align: right;
    }
    .flexColumn{
        flex-direction: column;
    }
    .filterContainer > label{
        flex: 2;
    }
    .smallButtonContainer{
        margin-bottom: 10;
        height: 100;
    }
    .buttonContainer{
        justify-content: space-evenly;
        margin-bottom: 10;
    }

</style>