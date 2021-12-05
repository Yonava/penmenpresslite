<template>
    <div>

        <!-- main feed banner -->
        <header class="feed-header"> 
            <h1 style="border-bottom: .2vh solid black; margin-left: 3%; opacity: 1; margin-top: 0vh;">NEWS FEED</h1>
        </header>

        <!-- article display -->
        <div class="parent" v-for="article in articles" :key="article.id">
            <div class="box-1" @click="$parent.articleRequested(article)">  
                <img class="photo" :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">                
                <div class="box-2">
                    <p class="author">{{ article.date }} - {{ article.author }}</p>
                    <p class="cat">{{ article.category.substring(1) }}</p>
                    <h2 class="title">{{ article.title }}</h2>
                </div>
                <div class="box-3">
                    <img v-if="article.saved" @click="$parent.bookmark(article, false)" class="book" src="../assets/remove-bookmark.svg" alt="unsave">
                    <img v-else @click="$parent.bookmark(article, true)" class="book" src="../assets/add-bookmark.svg" alt="save">
                </div>
            </div>
        </div>

        <!-- disclaimers -->
        <center style="font-size: 8pt;">
            <p style="margin-bottom: 0vh;">visit <a href="https://penmenpress.com/">https://penmenpress.com/</a> for more snhu reporting</p>
            <p style="margin-bottom: 10vh; margin-top: .5vh;">© penmenpress 2021, all rights reserved</p>
        </center>

    </div>
</template>

<script>

export default {
    props: [
        'articles',
    ],
}
</script>

<style scoped>

</style>