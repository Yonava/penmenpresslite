<template>
    <div>

        <!-- home feed -->
        <div v-if="!contentView && page === 'home'">
            <Feed :articles="articles" />
        </div>

        <!-- content view / reader view -->
        <div v-else-if="contentView">
            <Content :article="selectedArticle" />
        </div>

        <!-- discover menu -->
        <div v-else-if="page === 'discover' && !contentView">
            <Discover :articles="articles" />
        </div>

        <!-- bookmarked / read later menu -->
        <div v-else-if="page === 'bookmarked' && !contentView">
            <Bookmarked :articles="articles" />
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

import ArticleObj from './classes/Articles.js'
import articleData from './assets/articles'
import Content from './components/Content.vue'
import Discover from './components/Discover.vue'
import Bookmarked from './components/Bookmarked.vue'
import Feed from './components/Feed.vue'

export default {
    name: 'App',
    components: {
        Content,
        Discover,
        Bookmarked,
        Feed,
    },
    data: () => {
        return {
            bookmarked: [],
            articleData,
            contentView: false,
            selectedArticle: {},
            navBlip: 'transform: translateX(0px); background-color: rgb(71, 105, 194);',
            page: 'home',
            requestHandler: true,
            articles: [],
        }
    },
    methods: {
        bookmark(article, saveState) {
            this.confirmRequest(false);
            console.log(article.saved)
            article.saved = saveState;
            this.bookmarked = [];
            for (let i = 0; i < this.articles.length; i++) {
                if (this.articles[i].saved) this.bookmarked.push(this.articles[i].title)
            }
            localStorage.bookmarked = this.bookmarked
        },
        articleRequested(selectedArticle) {
            this.selectedArticle = selectedArticle;
            setTimeout(this.confirmRequest(true), 3)
        },
        confirmRequest(request) {
            if (!request) this.requestHandler = false
            if (this.requestHandler) this.toggleContentView();
            request ? this.requestHandler = true:this.requestHandler = false 
        },
        toggleContentView() {
            window.scrollTo(0,0);
            this.contentView = !this.contentView;
        },
        navigate(pos, color, page) {
            window.scrollTo(0,0);
            this.navBlip = `transform: translateX(${pos}px); background-color: ${color};` // translate navBlip
            this.page = page
        },
    },
    mounted() {
        // init article objects
        for (let i = 0; i < articleData.length; i++) {
                let loadArticles = new ArticleObj(
                    articleData[i].title,
                    articleData[i].image,
                    articleData[i].imageCaption,
                    articleData[i].category,
                    articleData[i].author,
                    articleData[i].date,
                    articleData[i].content
                )
                this.articles.push(loadArticles);
            }

        // fetch bookmarked articles from storage
        if (localStorage.bookmarked) {
            let parseStorage = localStorage.bookmarked.split(',');
            this.bookmarked = ['Saved Articles Detected']
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
/* ARTICLE DISPLAY */
.box-1 {
    display: flex;
    flex-direction: row;
    flex: 4;
}
.box-2 {
    flex-direction: column;
    margin: 2vw;
    margin-top: 0px;
    flex: 10;
}
.box-3 {
    display: absolute;
    flex-direction: row;
    flex: 1;
}
.parent {
    width: 94%;
    margin: auto;
    padding: 1vw;
    margin-bottom: 3vh;
}
.photo {
    padding: 2px;
    height: 13vh;
    width: 13vh;
    min-width: 13vh;
    border: 1px black solid;
    object-fit: cover;
    border-radius: 5%;
    margin: 0px;
}
.title {
    font-size: 10pt;
    margin: 0px;
}
.book {
    width: 4vh;
    margin: 0px;
}
.cat {
    margin-top: .5vh;
    margin-bottom: .5vh;
    background-color: rgb(46, 185, 185);
    color: white;
    font-size: 8pt;
    padding: .5vw;
}
.author {
    margin: 0px;
    font-size: .5rem;
}

/* HEADER DISPLAY */
.feed-header {
    top: 0;
    position: sticky;
    background-color: white;
    opacity: 0.95;
}

/* NAVIGATION DISPLAY */
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
    opacity: 0.9;
}

/* GLOBAL DISPLAY */
body {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
    margin: 0px;
}
</style>