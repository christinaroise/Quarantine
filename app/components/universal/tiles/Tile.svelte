<script>
    export let onTap;
    export let imgSrc;
    export let title;
    export let text;
</script>

<flexBoxLayout 
on:tap={onTap}
class="tile">
    <flexBoxLayout class="iconContainer">
        <image 
        class='icon rounded' 
        src={imgSrc} alt='cover' 
        stretch='aspectFit'/>
    </flexBoxLayout>
    <stackLayout class="tileInfo">
        <label 
        textWrap="{true}" 
        class='h4 timesNewRoman' 
        text={title}/>
        <label 
        textWrap='{true}' 
        class='body timesNewRoman' 
        text={text}/>
    </stackLayout>
</flexBoxLayout>

<style>
    .tile{
        width: 380;
        margin: 5;
        height: 130;
    }
    .iconContainer{
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
    .tileInfo{
        width: 350;
        padding-left: 0;
        padding-bottom: 5;
        vertical-align: bottom;
    }
    .body{
        width: 250;
        margin: 0;
    }
</style>

