<script>

export let leftIconSrc
export let leftOnTap
export let title
export let rightOnTap
export let rightIconSrc

//I created a custom actionBar. It is not 100% ideal as it was hard to find the correct styling in order to make the bar 100% responsive. (The "width: 100%"" is not functionable for whatever reason).

</script>

<actionBar flat="true">
    <stackLayout
        orientation="horizontal">
        <image 
            width="20" 
            height="20" 
            verticalAlignment="center" 
            src='{leftIconSrc}'
            on:tap={leftOnTap}/>
        <label 
            text='{title}'
            class="title montserrat" 
            fontSize="24" 
            verticalAlignment="center"/>
        <image 
            width="20" 
            height="20" 
            verticalAlignment="center"  
            src='{rightIconSrc}'
            on:tap={rightOnTap}/>
    </stackLayout>
</actionBar>

<style>
    actionBar{
        width: 100%;
    }
    stackLayout{
        width: 100%;
    }
    label{
        font-weight: 500;
        width: 80%;
        text-transform: uppercase;
        text-align: center;
    }
</style>