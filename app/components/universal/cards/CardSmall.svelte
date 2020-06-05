<script>
    export let onTap;
    export let imgSrc;
    export let tagName;
    export let title;
    export let subtitle;
</script>

<stackLayout 
on:tap={onTap} 
class='card'>
    <absoluteLayout>
        <image 
        class='image rounded' 
        width="166" 
        height='100' 
        src={imgSrc} 
        alt='cover' 
        stretch='aspectFill' />
        {#if tagName}
            <label 
            class="cardTag body" 
            text={tagName}/>
        {/if}
    </absoluteLayout>
    <stackLayout>
        <label 
        textWrap="{true}" 
        class='h4 timesNewRoman' 
        text={title}/>
        <label 
        class='body timesNewRoman' 
        text={subtitle}/>
    </stackLayout>
</stackLayout>

<style>
    .card{
        width: 166;
        margin-bottom: 10;
        justify-content: space-between;
        border-radius: 5%;
    }
    .cardTag{
        background-color: #C8A374;
        color: white;
        font-size: 12;
        margin: 10;
        padding: 2 10;
        border-radius: 5%;
    }
</style>