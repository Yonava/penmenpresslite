<template>
    <div class="main">

        <!-- search panel -->
        <div class="search">
            <center>
                <input 
                class="searchbar"
                type="text" 
                placeholder="Search articles, authors, and issues" 
                v-model="rawQuery" />
            </center>
        </div>

        <!-- display search results -->
        <div v-if="rawQuery.length > 0">
            <br>
            <br>
            <br>
            <p>Here's What I Could Find:</p>
            <div v-for="article in displayedArticles" :key="article.id">
                <div class="container-1" @click="$parent.articleRequested(article)"> 
                    <img class="picture" :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">
                    <div class="container-2">                     
                        <p class="category">{{ article.category }}</p>
                        <h1 class="headline">{{ article.title }}</h1>
                        <p class="date">{{ article.date }} - {{ article.author }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- featured articles -->
        <div v-else-if="rawQuery.length === 0">
            <h1 class="featured-title">Featured Articles</h1>
            <div class="featured">
                <div v-for="article in featuredArticles" :key="article.id">
                    <div class="container-1" @click="$parent.articleRequested(article)"> 
                        <img class="picture" :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">
                        <div class="container-2">                     
                            <p class="category">{{ article.category }}</p>
                            <h1 class="headline">{{ article.title }}</h1>
                            <p class="date">{{ article.date }} - {{ article.author }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

import articles from '../assets/articles.json'

export default {
    data: () => {
        return {
            articles: articles,
            featuredArticles: articles,
            displayedArticles: [],
            rawQuery: '',
        }
    },
    watch: {
        rawQuery() {
            this.search();
        }
    },
    methods: {
        // sanitizes user provided search query
        sanitizeQuery(raw) { 
            // let output = raw.replace(/\s/g, '');
            raw = raw.toLowerCase();
            return raw;
        },
        search() {

            let query = this.sanitizeQuery(this.rawQuery);
            this.displayedArticles = [];

            if (!query) return

            for (let i = 0; i < articles.length; i++) {
                switch (true) {

                    case this.articles[i].title.toLowerCase().includes(query):
                        this.displayedArticles.push(this.articles[i]);
                        break;

                    case this.articles[i].author.toLowerCase().includes(query):
                        this.displayedArticles.push(this.articles[i]);
                        break;

                    case this.articles[i].category.toLowerCase().includes(query):
                        this.displayedArticles.push(this.articles[i]);
                        break;
                    case this.articles[i].content.toLowerCase().includes(query):
                        this.displayedArticles.push(this.articles[i]);
                        break;
                }
            }
        }
    }
}

</script>

<style scoped>
.featured-title {
    margin-top: 12.5vh;
    margin-bottom: 1vh;
    margin-left: 1.5vw;
    color: white;
    position: fixed;
}
.featured {
    position: absolute;
    margin-top: 19vh;
    display: flex;
    flex-direction: row;
    max-width: none;
    max-height: 40vh;
    /* background-color: black; */
}
.main {
    margin: 0%;
}
.search {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 10vh;
    /* justify-items: center; */
}
.searchbar {
    margin-top: 2.5vh;
    width: 75vw;
    border: 2px black solid;
}
</style>
