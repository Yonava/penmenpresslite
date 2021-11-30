<template>
    <div>

        <!-- saved articles banner -->
        <header class="saved-header">
            <center>
                <h1>SAVED ARTICLES</h1>
            </center>
        </header>

        <!-- bookmarked articles -->
        <center v-if="bookmarkedArticles.length === 0">
            <p class="non-saved">Saved/Bookmarked Articles Show Up Here</p>
            <img class="icon-display" src="../assets/add-bookmark.svg" alt="save">
        </center>
        <div v-for="article in articles" :key="article.id">
            <div v-if="article.saved">
                <div class="container-1" @click="$parent.articleRequested(article)">  
                    <img class="picture" :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">                
                    <div class="container-2">
                        <p class="category">{{ article.category.substring(1) }}</p>
                        <h1 class="headline">{{ article.title }}</h1>
                        <p class="date">{{ article.date }} - {{ article.author }}</p>
                    </div>
                    <div>
                        <img @click="$parent.bookmark(article, false)" class="bookmark" src="../assets/remove-bookmark.svg" alt="unsave">
                        <!-- <img class="bookmark" src="./assets/share.svg" alt="share"> -->
                    </div>
                </div>
            </div>
        </div>
        <br><br><br><br>
    </div>
</template>

<script>

import articles from '../assets/articles.json'

export default {

    data: () => {
        return {
            articles,
        }
    },
    props: [
        'bookmarkedArticles',
    ]
}

</script>

<style scoped>
.non-saved {
    margin: 10vh;
    margin-bottom: 2.5vh;
    font-size: 16pt;
    color: white;
}
.saved-header {
    top: 0;
    position: sticky;
}
.icon-display {
    width: 10vh;
    height: 10vh;
    background-color: white;
    padding: 2vh; 
    border: .3vh black solid; 
    border-radius: 25%;
}

</style>
