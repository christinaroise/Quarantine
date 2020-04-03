<script>
    import FollowBtn from '../../buttons/FollowBtn'

    export let onTap
    export let imgSrc
    export let title
    export let author
    export let description

    export let btnTitle

</script>

<cardView 
on:tap={onTap}
shadowOffsetHeight="2" shadowOpacity="0.2" shadowRadius="8">
    <stackLayout class='article backgroundcolorWhite'>
        <absoluteLayout>
            <image class='image rounded' width="100%" height='200' src={imgSrc} alt='cover' stretch='aspectFill' />
            <!--<FollowBtn title={btnTitle}/>-->
        </absoluteLayout>
    <stackLayout class="articleInfo">
        <label textWrap="{true}" class='h4 timesNewRoman' text='{title}' />
        <label class='author body timesNewRoman' text={author}/>
        <label textWrap='{true}' class='body timesNewRoman' text={description}/>
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

