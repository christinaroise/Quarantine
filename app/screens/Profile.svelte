<script>
    
</script>

<page>
    <flexBoxLayout class="wrapper">
        <flexBoxLayout class="topBar">
            <button text=""/>
            <label class="h1 title text-center montserrat" text="Filters" />
            <button class="textBtn" text="Clear"/>
        </flexBoxLayout>

        <stackLayout class="filterWrapper">
            <stackLayout class="filterContainer">
                <label class="h3 montserrat marginLeft" text="Sort by"/>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Newest"/>
                        <stackLayout class="height">
                            <image class='marginRight' src='~/assets/icons/addColor.png'  alt='button'/>
                        </stackLayout>
                    </flexBoxLayout>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Most Popular"/>
                        <stackLayout class="height">
                            <image class='marginRight' src='~/assets/icons/addColor.png'  alt='button'/>
                        </stackLayout>
                    </flexBoxLayout>
            </stackLayout>

           <stackLayout class="filterContainer">
                <label class="h3 montserrat marginLeft" text="Filter by"/>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Country"/>
                        <stackLayout class="height">
                            <image class='marginRight' src='~/assets/icons/addColor.png'  alt='button'/>
                        </stackLayout>
                    </flexBoxLayout>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="COVID-19"/>
                        <switch checked="{true}" backgroundColor="#C8A374"/>
                    </flexBoxLayout>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Donald Trump"/>
                        <switch checked="{true}" backgroundColor="#C8A374"/>
                    </flexBoxLayout>
            </stackLayout>

            <stackLayout  class="filterContainer">
                <label class="h3 montserrat marginLeft" text="Settings"/>
                <flexBoxLayout class="borderBottom">
                    <label class="filterLabel marginLeft" text="Language"/>
                    <segmentedBar
                        selectedBackgroundColor='#C8A374'
                        backgroundColor='white'
                        style=
                            'margin: 10; 
                            color: gray;
                            font-family: Open Sans'>
                        <segmentedBarItem title="NO" />
                        <segmentedBarItem title="EN" />
                    </segmentedBar>
                </flexBoxLayout>
            </stackLayout>
        </stackLayout>

        <button class="primaryBtn" text="Set changes"/>
    </flexBoxLayout>
</page>

<style>
    .wrapper{
        flex-direction: column;
    }
    .topBar{
        flex: 1;
    }
    .title{
        flex: 2;
    }
    .height{
        height: 30;
        margin: 8 0;
    }
    .filterWrapper{
        flex: 3;
    }
    .filterContainer{
        margin-bottom: 30;
    }
    .borderBottom{
        border-bottom-width: 0.5;
        border-bottom-color: lightgray;
    }
    .filterLabel{
        flex: 1;
        font-weight: 500;
    }
    .primaryBtn{
        height: 45;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        font-size: 16;
        text-transform: uppercase;
        background-color: #C8A374;
        color: white;
        border-radius: 10%;
    }

</style>