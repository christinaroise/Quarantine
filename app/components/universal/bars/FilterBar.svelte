<script>
    import { ApiService } from '~/services/ApiService'
    import { FilterService } from '~/services/FilterService'
    import { ArticleService } from '~/services/ArticleService'
    import { filterComponent } from '~/services/stores.js'
    import Dashboard from '~/screens/Dashboard'

   const api_key = 'dc4286d2d7a04d47bb2ca997c66ecc73' 
     // 'e840db49fb1f48c99a39a73ddf05c0a4' 
     // 'f015a847676d491f9b581d535c9361ac' 


    export let value = [];
    
    function setArticlesByCategory(category){
        $filterComponent = true
        ApiService.get(`https://newsapi.org/v2/top-headlines?country=${FilterService.getSelectedCountry()}&category=${category}&apiKey=${api_key}`).then(result => {
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
        padding-left: 14;
        padding-right: 6;
        padding-bottom: 10;
        font-family: 'Times New Roman';
        color: #232323;
    } 
   
</style>