<template>
    <div>
        <header id="header">
            <center>
            <h1>THE PENMEN PRESS</h1>
            <!-- <img src="./assets/header.png" alt="head"> -->
            </center>
        </header>
        <div v-if="!contentView">
            <div v-for="article in articles" :key="article.id">
                <div class="container-1" @click="articleRequested(article)"> 
                    <img class="picture" :src="require(`./assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">
                    <div class="container-2">                     
                        <p class="category">{{ article.category }}</p>
                        <h1 class="headline">{{ article.title }}</h1>
                        <p class="date">{{ article.date }} - {{ article.author }}</p>
                    </div>
                </div>
            </div>
            <br>
            <center>
            <p>visit <a href="https://penmenpress.com/">https://penmenpress.com/</a> for more snhu reporting</p>
            <p>© penmenpress 2021 all rights reserved</p>
            </center>
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
            window.scrollTo(0,0);
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
    font-size: 8pt;
}
.category {
    background-color: rgb(46, 185, 185);
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
    border-radius: 5%;
}
.container-2 {
    flex-direction: column;
    margin: 0px;
    position: relative;
    border: 0px;
}
.container-1 {
    display: flex;
    flex-direction: row;
    border: 2px black solid;    
    padding: 10px;
    background-color: white;
    margin-top: 5px;
    border-radius: 2%;
}
.headline {
    margin: 1px;
    font-size: 12pt;
    line-height: 18px;
    margin-left: 0px;
}
header {
    position: sticky;
    top: 0;
    color: black;
    background-color: rgb(230, 230, 230);
    z-index: 1; 
}
body {
    background-color: rgb(230, 230, 230);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
p {
    margin: 0px;
    font-size: 10pt
}
</style>