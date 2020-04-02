<script>
import LikeDarkBtn from '../buttons/LikeDarkBtn'

export let articleImgSrc
export let articleTitle
export let articleAuthor
export let articleDescription
</script>

<cardView shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
    <stackLayout class='article backgroundcolorWhite'>
        <absoluteLayout>
            <image class='image rounded' width="100%" height='200' src={articleImgSrc} alt='cover' stretch='aspectFill' />
            <LikeDarkBtn/>
        </absoluteLayout>
    <stackLayout class="articleInfo">
        <label textWrap="{true}" class='h4 timesNewRoman' text='{articleTitle}...' />
        <label class='author body timesNewRoman' text={articleAuthor}/>
        <label textWrap='{true}' class='body timesNewRoman' text={articleDescription}/>
    </stackLayout>
    </stackLayout>
</cardView>

<style>
    .article{
        margin: 15;
        border-radius: 10%;
    }
    .articleInfo{
        padding: 10;
    }
    .author{
        font-style: italic;
    }
</style>

