<script>
export let leftOnTap
export let rightOnTap
export let leftIconSrc
export let rightIconSrc
export let title

</script>

<stackLayout>
    <flexBoxLayout class="topBarWrapper">
        <stackLayout 
        on:tap={leftOnTap}>
            <image width="20" src='{leftIconSrc}' class=" button fas icon1" />
        </stackLayout>
        <label class="h1 montserrat" text='{title}'/>
        <stackLayout
        on:tap={rightOnTap}>
            <image width="20" src='{rightIconSrc}' class=" button fas icon1" />
        </stackLayout>
    </flexBoxLayout>
</stackLayout>


<style>
    .topBarWrapper{
        height: 60;
        text-align: center;
        padding: 15;
        vertical-align: center;
    }
    .h1{
        flex: 2;
        text-transform: uppercase;
    }
</style>