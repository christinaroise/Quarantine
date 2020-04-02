<script>
    import { ApiService } from '~/services/ApiService'
    import { ArticleService } from '~/services/ArticleService'
    import Dashboard from '~/screens/Dashboard'

    const api_key = 'e840db49fb1f48c99a39a73ddf05c0a4' // 'dc4286d2d7a04d47bb2ca997c66ecc73'

    export let value = [];
    export let categoryIsTapped = false;
    
    function setArticlesByCategory(category){
        categoryIsTapped = true
        ApiService.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api_key}`).then(result => {
            value = result.articles
        }) 
    }

</script>

<stackLayout>
    <scrollView 
    orientation="horizontal" 
    scrollBarIndicatorVisible={false}>
        <flexBoxLayout orientation="horizontal" class="buttonDarkContainer">
            <button 
            on:Tap={ () => setArticlesByCategory('business')}
            class="buttonLight"
            text="Business"/>
            <button 
            on:Tap={ () => setArticlesByCategory('entertainment')}
            class="buttonLight"
            text="Entertainment"/>
            <button 
            on:Tap={ () => setArticlesByCategory('general')}
            class="buttonLight"
            text="General"/>
            <button 
            on:Tap={ () => setArticlesByCategory('health')}
            class="buttonLight"
            text="Health"/>
            <button 
            on:Tap={ () => setArticlesByCategory('science')}
            class="buttonLight"
            text="Science"/>
            <button 
            on:Tap={ () => setArticlesByCategory('sports')}
            class="buttonLight"
            text="Sports"/>
            <button 
            on:Tap={ () => ArticleService.filterArticles('technology')}
            class="buttonLight"
            text="Technology"/>
        </flexBoxLayout>
    </scrollView>
</stackLayout>

<style>
    .buttonLight{
        margin: 1;
        padding-left: 10;
        padding-right: 6;
        font-family: 'Times New Roman';
        color: #232323;
    } 
    .buttonDarkContainer{
        margin: 5 5 15 5;
    }
    .buttonsDark{
        background-color: #232323;
        color: white;
        font-family: 'Open Sans';
        text-transform: capitalize;
        font-weight: 500;
        font-size: 16;
        padding: 10 20;
        height: 50;
        border-radius: 10%;
        margin: 8;
    }     
</style>