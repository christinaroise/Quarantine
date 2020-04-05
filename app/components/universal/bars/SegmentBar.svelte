<script>

    export let bindSegmentedBar
    export let onSegmentedBar
    export let text
    export let firstOption
    export let secondOption

</script>

<flexBoxLayout class="borderBottom">
    <label class="filterLabel marginLeft" text="{text}"/>
    <segmentedBar
        selectedBackgroundColor='#C8A374'
        backgroundColor='white'
        style=
            'margin: 10; 
            color: gray;
            font-family: Open Sans'>
        <segmentedBarItem title="{firstOption}" />
        <segmentedBarItem title="{secondOption}" />
    </segmentedBar>
</flexBoxLayout>



