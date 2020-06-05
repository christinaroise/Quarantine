<script>

    export let onTap;
    export let imgSrc;
    export let tagName;
    export let title;
    export let subtitle;
    export let date;

</script>

<stackLayout 
    on:tap={onTap} 
    class='card'>
        <stackLayout>
            <absoluteLayout>
                <image 
                class='image rounded' 
                width="235" height='140' 
                src='{imgSrc}' 
                alt='cover image' 
                stretch='aspectFill'/>
                <label 
                class="cardTag body timesNewRoman" 
                text='{tagName}'/>
            </absoluteLayout>
        </stackLayout>
        <flexBoxLayout class="textWrapper">
            <stackLayout class="cardText">
                <label 
                textWrap="{true}" 
                class='h4 timesNewRoman' 
                text='{title}'/>
                <label 
                class='body timesNewRoman' 
                text='{subtitle}'/>
            </stackLayout>
            <stackLayout>
                <label 
                class="cardDate timesNewRoman" 
                text='{date}'/>
            </stackLayout>
        </flexBoxLayout>
    </stackLayout>

<style>
    .card{
        width: 235;
        height: auto;
        margin-left: 15;
        padding-bottom: 5;
        margin-bottom: 10;
        justify-content: space-between;
        border-radius: 5%;
        background-color: white;
    }
    .cardTag{
        background-color: #C8A374;
        color: white;
        font-size: 12;
        margin: 10;
        padding: 2 10;
        border-radius: 5%;
    }
    .textWrapper{
        padding-top: 5;
    }
    .cardText{
        width: 75%;
    }
    .cardDate{
        color: #C8A374;
        text-align: right;
        font-size: 12;
        font-weight: 500;
    }
</style>