<script>

    export let onTap
    export let imgSrc
    export let tagName
    export let title
    export let subtitle
    export let date
    
    //Needs a new name
</script>

<stackLayout 
    on:tap={onTap} 
    class='article'>
        <stackLayout>
            <absoluteLayout>
                <image 
                class='image rounded' 
                width="235" height='140' 
                src='{imgSrc}' 
                alt='cover image' 
                stretch='aspectFill' />
                <label 
                class="sourceTag body timesNewRoman" 
                text='{tagName}'/>
            </absoluteLayout>
        </stackLayout>
        <flexBoxLayout class="infoWrapper">
            <stackLayout class="articleInfo">
                <label 
                textWrap="{true}" 
                class='h4 timesNewRoman' 
                text='{title}' />
                <label 
                class='body timesNewRoman' 
                text='{subtitle}'/>
            </stackLayout>
            <stackLayout>
                <label 
                class="articleDate timesNewRoman" 
                text='{date}'/>
            </stackLayout>
        </flexBoxLayout>
    </stackLayout>

<style>
    .article{
        width: 235;
        height: auto;
        margin-left: 15;
        padding-bottom: 5;
        margin-bottom: 10;
        justify-content: space-between;
        border-radius: 5%;
        background-color: white;
    }
    .sourceTag{
        background-color: #C8A374;
        color: white;
        font-size: 12;
        margin: 10;
        padding: 2 10;
        border-radius: 5%;
    }
    .infoWrapper{
        padding-top: 5;
    }
    .articleInfo{
        width: 75%;
    }
    .articleDate{
        color: #C8A374;
        text-align: right;
        font-size: 12;
        font-weight: 500;
    }
</style>