<script>
    export let onTap;
    export let imgSrc;
    export let title;
    export let subtitle;
    export let text;
</script> 

<cardView 
on:tap={onTap}
radius="25"
shadowOffsetHeight="2" 
shadowOpacity="0.2" 
shadowRadius="8"
elevation="5"
ripple="true">
    <stackLayout 
    class='card backgroundcolorWhite'>
        <absoluteLayout>
            <image 
            class='image' 
            width="100%" 
            height='200' 
            src={imgSrc} 
            alt='cover image' 
            stretch='aspectFill'/>
        </absoluteLayout>
        <stackLayout 
        class="cardInfo">
            <label 
            textWrap="{true}" 
            class='h4 timesNewRoman' 
            text='{title}'/>
            {#if subtitle}
                <label 
                class='italic body timesNewRoman' 
                text={subtitle}/>
            {/if}
            <label 
            textWrap='{true}' 
            class='body timesNewRoman' 
            text={text}/>
        </stackLayout>
    </stackLayout>
</cardView>

<style>
    cardView{
        margin: 5;
        border-radius: 10%;
    }
    .card{
        padding: 0;
    }
    .cardInfo{
        padding: 10;
    }
    .image{
        border-top-left-radius: 10%;
        border-top-right-radius: 10%;
    }
</style>

