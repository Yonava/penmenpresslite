<template>
    <div>
        <header>
            <center>
            <h1>THE PENMEN PRESS</h1>
            <!-- <img src="./assets/header.png" alt="head"> -->
            </center>
        </header>
        <div v-if="!contentView">
            <div v-for="article in articles" :key="article.id">
                <div class="container-1" @click="articleRequested(article)">
                    <img class="picture" :src="require(`./assets/pictures/${article.image}.jpg`)" :alt="article.imageCaption">
                    <div class="container-2">                     
                        <p class="category">{{ article.category }}</p>
                        <h1 class="headline">{{ article.title }}</h1>
                        <p class="date">{{ article.date }} - {{ article.author }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="contentView">
            <Content :article="selectedArticle" />
        </div>
    </div>
</template>

<script>

import articles from './assets/articles'
import Content from './components/Content.vue'

export default {
    name: 'App',
    components: {
        Content
    },
    data: () => {
        return {
            articles: articles,
            contentView: false,
            selectedArticle: {},
        }
    },
    methods: {
        articleRequested(selectedArticle) {
            this.selectedArticle = selectedArticle;
            this.toggleContentView();
        },
        toggleContentView() {
            this.contentView = !this.contentView;
        }

    }

}
</script>

<style>
.date {
    position: absolute;
    bottom: 0;
    margin-bottom: 9px;
    font-size: 8pt;
}
.category {
    background-color: rgb(70, 204, 204);
    width: 180px; /* temp, dont know how to make it just flex without looking dumb */
    color: white;
    font-size:9pt;
    padding: 2px;
}
.picture {
    padding: 2px;
    height: 100px;
    width: 100px;
    border: 1px black solid;
    margin-right: 12px;
    max-height: 10;
    object-fit: cover;
}
.container-2 {
    flex-direction: column;
    margin: 0px;
    border: 0px;
}
.container-1 {
    display: flex;
    flex-direction: row;
    border: 2px black solid;    
    padding: 10px;
    background-color: white;
    margin-top: 5px;
    position: relative;
    border-radius: 2%;
}
.headline {
    margin: 1px;
    font-size: 12pt;
}
header {
    position: sticky;
    top: 0;
    color: white;
    background-color: black;
}
body {
    background-color: rgb(224, 220, 220);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
p {
    margin: 0px;
    font-size: 10pt
}
</style>