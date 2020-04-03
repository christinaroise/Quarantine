<script>
    import FollowBtn from '../../buttons/FollowBtn'

    export let onTap
    export let imgSrc
    export let title
    export let description

</script>

<flexBoxLayout 
on:tap={onTap}
class="article backgroundcolorWhite borderBottom">
    <flexBoxLayout class="imageContainer">
        <image class='image rounded' src={imgSrc} alt='cover' stretch='aspectFill' />
    </flexBoxLayout>
    <stackLayout class="articleInfo">
        <label textWrap="{true}" class='h4 timesNewRoman' text='{title}' />
        <label textWrap='{true}' class='body timesNewRoman' text={description}/>
    </stackLayout>
</flexBoxLayout>


<style>
    .article{
        width: 100%;
        height: 110;
        margin: 5;
    }
    .imageContainer{
        width: 110;
        justify-content: center;
        vertical-align: center;
        background-color: peachpuff;
        margin: 20 10;
    }
    .articleInfo{
        width: 90%;
        padding: 10;
        padding-bottom: 5;
        vertical-align: bottom;
    }
</style>

