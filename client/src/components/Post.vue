<template>
    <div>
        <h1>Post</h1>
        <hr>
        <p style="color: red" v-if="error">{{ error }}</p>

        <div class="parent" v-for="article in articles" :key="article.id">
            <div class="box-1" @click="$parent.articleRequested(article)">  
                <img class="photo" :src="article.image" :alt="article.imageCaption">                
                <div class="box-2">
                    <p class="author">{{ article.date }} - {{ article.author.substring(1) }}</p>
                    <p class="cat">{{ article.category.substring(1) }}</p>
                    <h2 class="title">{{ article.title.substring(1) }}</h2>
                </div>
                <div class="box-3">
                    <img v-if="article.saved" @click="$parent.bookmark(article, false)" class="book" src="../assets/remove-bookmark.svg" alt="unsave">
                    <img v-else @click="$parent.bookmark(article, true)" class="book" src="../assets/add-bookmark.svg" alt="save">
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {    
    data: () => {
        return {
            articles: [],
            error: '',
            text: '',   
        }
    },
    async created() {
        
    },
}
</script>
