<template>
    <div>
  
        <!-- main news feed / home -->
        <div v-if="!contentView && page === 'home'">

            <!-- penmen press banner -->
            <header>
                <center>
                    <h1>THE PENMEN PRESS</h1>
                </center>
            </header>

            <div v-for="article in articles" :key="article.id">
                <div class="container-1" @click="articleRequested(article)">  
                    <img class="picture" :src="require(`./assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">                
                    <div class="container-2">
                        <p class="category">{{ article.category }}</p>
                        <h1 class="headline">{{ article.title }}</h1>
                        <p class="date">{{ article.date }} - {{ article.author }}</p>
                    </div>
                </div>
                <img v-if="article.saved" @click="bookmark(article, false)" class="bookmark" src="./assets/remove-bookmark.svg" alt="unsave">
                <img v-else @click="bookmark(article, true)" class="bookmark" src="./assets/add-bookmark.svg" alt="save"> 
                <img class="bookmark" src="./assets/share.svg" alt="share">
            </div>
            <br />
            <center>
                <p>visit <a href="https://penmenpress.com/">https://penmenpress.com/</a> for more snhu reporting</p>
                <p>© penmenpress 2021, all rights reserved</p>
            </center>
            <br />
            <br />
            <br />
        </div>

        <!-- content view / reader view -->
        <div v-if="contentView">
            <Content :article="selectedArticle" />
        </div>

        <!-- discover menu -->
        <div v-if="page === 'discover' && !contentView">
            <Discover />
        </div>

        <!-- bookmarked / read later menu -->
        <div v-else-if="page === 'bookmarked' && !contentView">
            <Bookmarked :bookmarkedArticles="bookmarked" />
        </div>

        <!-- navigation panel -->
        <footer v-if="!contentView" class="bottom">
            <div class="bottom-container">
                <div :style="navBlip" class="selected-nav"></div> 
                <div @click="navigate(-120, 'red', 'discover')" class="nav-container">
                    <img class="icon" src="./assets/discover.svg" alt="discovery">
                </div>
                <div @click="navigate(0, 'rgb(71, 105, 194)', 'home')" class="nav-container">
                    <img class="icon" src="./assets/feed.svg" alt="home">
                </div>
                <div @click="navigate(120, 'orange', 'bookmarked')" class="nav-container">
                    <img class="icon" src="./assets/savedicon.svg" alt="bookmarked">
                </div>
            </div>
        </footer> 

    </div>
</template>

<script>

import articles from './assets/articles'
import Content from './components/Content.vue'
import Discover from './components/Discover.vue'
import Bookmarked from './components/Bookmarked.vue'

export default {
    name: 'App',
    components: {
        Content,
        Discover,
        Bookmarked
    },
    data: () => {
        return {
            bookmarked: [],
            articles,
            contentView: false,
            selectedArticle: {},
            navBlip: 'transform: translateX(0px); background-color: rgb(71, 105, 194);',
            page: 'home',
        }
    },
    methods: {
        bookmark(article, saveState) {
            article.saved = saveState;
            this.bookmarked = [];
            for (let i = 0; i < this.articles.length; i++) {
                if (this.articles[i].saved) this.bookmarked.push(this.articles[i].title)
            }
            localStorage.bookmarked = this.bookmarked
        },
        articleRequested(selectedArticle) {
            this.selectedArticle = selectedArticle;
            this.toggleContentView();
        },
        toggleContentView() {
            window.scrollTo(0,0);
            this.contentView = !this.contentView;
        },
        navigate(pos, color, page) {
            window.scrollTo(0,0);
            this.navBlip = `transform: translateX(${pos}px); background-color: ${color};` // translate navBlip
            this.page = page
        }
    },
    mounted() {
        if (localStorage.bookmarked) {
            let parseStorage = localStorage.bookmarked.split(',');
            this.bookmarked = ['Saved Articles Detected']
            console.log(this.articles)
            for (let i = 0; i < parseStorage.length; i++) {
                for (let j = 0; j < this.articles.length; j++) {
                    if (this.articles[j].title === parseStorage[i]) this.articles[j].saved = true;
                }
            }
        }
    }

}
</script>

<style>
.bookmark {
    width: 4vh;
    margin-left: 3.5vw;
}
.icon {
    height: 30px;
    width: 30px;
}
.selected-nav {
    border-radius: 25%;
    margin-top: 4.5px;
    width: 38px;
    height: 38px;
    opacity: 0.5;
    position: absolute;
    transition: 200ms ease-in-out;
    z-index: -1;
}
.nav-container {
    height: 30px;
    width: 30px;
    margin-top: 8px;
    margin-right: 45px;
    margin-left: 45px;
}
.bottom-container {
    height: 45px;
    width: 250px;
    justify-content: center;
    display: flex;
}
.bottom {
    background-color: white;
    position: fixed;
    bottom: 0;
    height: 45px;
    min-width: 100vw;
    border-top: 1px black solid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    /* opacity: 0.9; */
}
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
    min-width: 100px;
    border: 1px black solid;
    margin-right: 12px;
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
    margin: 1vh;
    border-radius: 8px;
    /* min-height: 20vh; */
}
.headline {
    margin: 1px;
    font-size: 12pt;
    line-height: 18px;
    margin-left: 0px;
}
header {
    /* position: sticky; */
    top: 0;
    color: white;
    background-color: rgb(71, 105, 194);
    z-index: 1;
    /* font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; */
}
html, body {
    background-color: rgb(71, 105, 194);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 0px;
    min-width: 100vw;
    min-height: 100vh;
    overflow: auto;
}
p {
    margin: 0px;
    font-size: 10pt
}
</style>