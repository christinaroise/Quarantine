<script>

    export let onTap
    export let imgSrc
    export let tagName
    export let title
    export let subtitle
    export let date

</script>

<stackLayout 
    on:tap={onTap} 
    class='article'>
        <absoluteLayout>
            <image class='image rounded' width="235" height='140' src='{imgSrc}' alt='cover' stretch='aspectFill' />
            <label class="sourceTag body timesNewRoman" text='{tagName}'/>
        </absoluteLayout>
        <flexBoxLayout class="infoWrapper">
            <stackLayout class="articleInfo">
                <label textWrap="{true}" class='h4 timesNewRoman' text='{title}' />
                <label class='body timesNewRoman' text='{subtitle}'/>
            </stackLayout>
            <stackLayout>
                <label class="articleDate timesNewRoman" text='{date}'/>
            </stackLayout>
        </flexBoxLayout>
    </stackLayout>

<style>
    .article{
        width: 235;
        margin-left: 15;
        margin-bottom: 10;
        justify-content: space-between;
        background-color: white;
        border-radius: 5%;
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