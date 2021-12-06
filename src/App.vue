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
        <div v-else-if="page === 'discover'">
            <Discover :articles="articles" />
        </div>

        <!-- bookmarked / read later menu -->
        <div v-else-if="page === 'bookmarked'">
            <Bookmarked :articles="articles" />
        </div>

        <!-- navigation panel -->
        <footer v-if="!contentView" class="bottom">
            <div class="bottom-container">
                <div @click="navigate('discover')" :style="selected[0]" class="nav-container">
                    <img class="icon" src="./assets/discover.svg" alt="discovery">
                </div>
                <div @click="navigate('home')" :style="selected[1]" class="nav-container">
                    <img class="icon" src="./assets/feed.svg" alt="home">
                </div>
                <div @click="navigate('bookmarked')" :style="selected[2]" class="nav-container">
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
            lastY: 0,
            bookmarked: [],
            articleData,
            contentView: false,
            selectedArticle: {},
            page: 'home',
            requestHandler: true,
            articles: [],
            selected: ['filter: invert(60%);', 'filter: invert(0%);', 'filter: invert(60%);'],
        }
    },
    methods: {
        bookmark(article, saveState) {
            this.confirmRequest(false);
            article.saved = saveState;
            this.bookmarked = [];
            for (let i = 0; i < this.articles.length; i++) {
                if (this.articles[i].saved) this.bookmarked.push(this.articles[i].title);
            }
            localStorage.bookmarked = this.bookmarked;
        },
        articleRequested(selectedArticle) {
            this.selectedArticle = selectedArticle;
            setTimeout(this.confirmRequest(true), 3)
        },
        confirmRequest(request) {
            if (!request) this.requestHandler = false;
            if (this.requestHandler) this.toggleContentView();
            request ? this.requestHandler = true:this.requestHandler = false;
        },
        toggleContentView() {
            window.scrollTo(0,0);
            this.contentView = !this.contentView;
        },
        navigate(page) {
            window.scrollTo(0,0);
            switch (page) {
                case 'discover':
                    this.selected = ['filter: invert(0%);', 'filter: invert(60%);', 'filter: invert(60%);']
                    break;
                case 'home':
                    this.selected = ['filter: invert(60%);', 'filter: invert(0%);', 'filter: invert(60%);']
                    break;
                case 'bookmarked':
                    this.selected = ['filter: invert(60%);', 'filter: invert(60%);', 'filter: invert(0%);']
                    break;
            }
            this.page = page;
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

        // sort by article date
        this.articles.sort((a, b) => b.dateScore - a.dateScore);

        // init bookmarked localStorage to prevent lag on first click
        let initBookmarks = localStorage.bookmarked;
        localStorage.bookmarked = initBookmarks;

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
    },
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
    font-size: 12pt;
    margin: 0px;
    font-family: Georgia, 'Times New Roman', Times, serif;
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
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* NAVIGATION DISPLAY */
.icon {
    height: 5vh;
    width: 5vh;
    margin-bottom: 0px;
}
.nav-container {
    height: 5vh;
    width: 5vh;
    margin-top: .5vh;
    margin-right: 10vw;
    margin-left: 10vw;
    margin-bottom: 0px;
}
.bottom-container {
    width: 80vw;
    justify-content: center;
    display: flex;
    margin-bottom: 0px;
}
.bottom {
    height: 6vh;
    background-color: white;
    position: fixed;
    bottom: 0;
    min-width: 100vw;
    border-top: 1px black solid;
    display: flex;
    justify-content: center;
    margin-bottom: 0px;
}

/* GLOBAL DISPLAY */
body {
    -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin: 0px;
}
</style>