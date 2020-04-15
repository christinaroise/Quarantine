<script>
    // import FollowBtn from '../../buttons/FollowBtn'

    export let onTap
    export let imgSrc
    export let title
    export let description
    export let btnOnTap

</script>

<flexBoxLayout
    orientation="horizontal">
        <stackLayout
        class="one">
            <flexBoxLayout 
            on:tap={onTap}
            class="article backgroundcolorWhite">
                <flexBoxLayout class="imageContainer">
                    <image class='icon rounded' src={imgSrc} alt='cover' stretch='aspectFit' />
                </flexBoxLayout>
                <stackLayout class="articleInfo">
                    <label textWrap="{true}" class='h4 timesNewRoman' text={title} />
                    <label textWrap='{true}' class='body timesNewRoman' text={description}/>
                </stackLayout>
            </flexBoxLayout>
        </stackLayout>
        <flexBoxLayout class="buttonContainer">
            <button 
            on:Tap={btnOnTap}
            text="+"/>
        </flexBoxLayout>
    </flexBoxLayout>


<style>
    .article{
        width: 380;
        margin: 5;
        height: 130;
    }
    .imageContainer{
        width: 150;
        justify-content: center;
        vertical-align: center;
        margin: 20 0 20 10;
    }
    .icon{
        width: 70;
    }
    .h4{
        padding-left: 17;
    }
    .articleInfo{
        width: 350;
        padding-left: 0;
        padding-bottom: 5;
        vertical-align: bottom;
    }
    .body{
        width: 250;
        margin: 0;
        background-color: white;
    }
    .one{
        flex: 2;
    }
    .buttonContainer{
        flex: 1;
        justify-content: flex-end;
        margin: 15;
        margin-right: 0;
        background-color: #C8A374;
    }
    button{
        background-color: #C8A374;
        width: 80;
        color: white;
        font-size: 65;
        font-weight: 200;
        font-family: 'Open Sans';
    }
</style>

