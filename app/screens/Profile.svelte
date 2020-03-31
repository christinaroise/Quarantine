<script>
    
</script>

<page>
    <stackLayout class="wrapper">
        <flexBoxLayout class="topBar">
            <button text=""/>
            <label class="h1 title text-center montserrat" text="Filters" />
            <button class="setDefaultBtn" text="Clear"/>
        </flexBoxLayout>
        <stackLayout>
           <stackLayout class="filterContainer">
                <label class="h3 montserrat marginLeft" text="Filter by"/>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="Country"/>
                        <button class="filterBtn" text="+"/>
                    </flexBoxLayout>
                    <flexBoxLayout class="borderBottom">
                        <label class="filterLabel marginLeft" text="COVID-19"/>
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
        <stackLayout class="setChangesBtnContainer">
            <button class="setChangesBtn" text="Set changes"/>
        </stackLayout>
    </stackLayout>
</page>

<style>
    .title{
        flex: 2;
    }
    .setDefaultBtn{
        color: #232323;
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 16;
        text-align: right;
    }
    .filterContainer{
        margin-bottom: 30;
    }
    .marginLeft{
        margin-left: 15;
    }
    .borderBottom{
        border-bottom-width: 0.5;
        border-bottom-color: lightgray;
    }
    .filterLabel{
        flex: 1;
        font-weight: 500;
    }
    .filterBtn{
        background-color: #C8A374;
        color: white;
        width: 30;
        height: 30;
        border-radius: 100%;
    }
    .setChangesBtnContainer{
        height: 100%;
        vertical-align: bottom;
        padding-bottom: 5;
    }
    .setChangesBtn{
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