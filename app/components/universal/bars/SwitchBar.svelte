<script>

    export let text
    export let onCheckedChange
</script>

<flexBoxLayout class="borderBottom">
    <label class="filterLabel marginLeft" text="{text}"/>
    <switch 
    checked="{false}" 
    on:checkedChange="{onCheckedChange}"
    backgroundColor="#C8A374"/>
</flexBoxLayout>