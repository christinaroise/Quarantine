<script>
    export let title
    //This is an error container used when theres an error in fetching data from news api. It has the activityIndicator and a label with text as prop. 
</script>

<stackLayout>
    <activityIndicator 
    busy={true} 
    color="#C8A374"/>
    <label class="body" text="{title}"/>
</stackLayout>

<style>
    stackLayout{
        justify-content: center;
        vertical-align: center;
        text-align: center;
        height: 600;
    }
    label{
        padding: 10;
    }
</style>