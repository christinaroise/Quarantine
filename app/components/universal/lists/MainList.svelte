<script>
    import { closeModal } from 'svelte-native'
    import { Template } from 'svelte-native/components'
    import { ModalService } from '~/services/ModalService'
    import { ArticleService } from '~/services/ArticleService'
    import CardLarge from '~/components/universal/cards/CardLarge'
    import ErrorContainer from '~/components/universal/containers/ErrorContainer'
    
    export let items

    // Needs a new name

    // This is a list that shows full width, and large scale article cards.
    // I chose listView over scrollView as it shortens code and makes more sense seeing as it takes on a list of items. 
    
</script>

{#if items}
    <listView 
    items="{items}"
    separatorColor="transparent">
        <Template let:item>
            <CardLarge 
            btnTitle={'Like'}
            onTap={() => ModalService.showArticle(item)}
            imgSrc={item.urlToImage}
            tagName={item.source.name}
            title={ArticleService.trimTitleMin(item.title) + '...'}
            subtitle={ArticleService.trimAuthor(item.author)}
            description={item.description}/>
        </Template>
    </listView>
{:else}
    <ErrorContainer
    title="Looking for data"/>
{/if}

<style>
    listView{
        width: 100%;
        height: 100%;
    }
</style>