<template>
    <div>

        <!-- penmen press banner -->
        <header>
            <center>
                <h1>SAVED ARTICLES</h1>
            </center>
        </header>

        <!-- bookmarked articles -->
        <p v-if="bookmarkedArticles.length === 0">Saved/Bookmarked Articles Show Up Here!</p>
        <div v-for="article in articles" :key="article.id">
            <div v-if="article.saved">
                <div class="container-1" @click="$parent.articleRequested(article)">  
                    <img class="picture" :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">                
                    <div class="container-2">
                        <p class="category">{{ article.category }}</p>
                        <h1 class="headline">{{ article.title }}</h1>
                        <p class="date">{{ article.date }} - {{ article.author }}</p>
                    </div>
                </div>
                <img @click="$parent.bookmark(article, false)" class="bookmark" src="../assets/remove-bookmark.svg" alt="unsave">
                <img class="bookmark" src="../assets/share.svg" alt="share">
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

</style>
