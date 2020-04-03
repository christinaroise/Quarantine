<script>
export let onTap
export let leftIconSrc
export let rightIconSrc
export let title

</script>

<stackLayout>
    <flexBoxLayout class="topBarWrapper">
        <stackLayout on:tap={onTap}>
            <image width="20" src='{leftIconSrc}' class=" button fas icon1" />
        </stackLayout>
        <label class="h1 timesNewRoman" text='{title}'/>
        <stackLayout>
            <image width="20" src='{rightIconSrc}' class=" button fas icon1" />
        </stackLayout>
    </flexBoxLayout>
</stackLayout>


<style>
    .topBarWrapper{
        text-align: center;
        padding: 15;
        vertical-align: center;
    }
    .h1{
        flex: 2;
        text-transform: capitalize;
    }
</style>