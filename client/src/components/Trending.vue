<template>
    <div>

        <!-- reload icon -->
        <center>
            <img class="refresh-icon" :style="refresh" src="../assets/refresh.svg" alt="refresh">
        </center>

        <!-- trending banner -->
        <header class="feed-header"> 
            <h1 style="margin-left: 3%; opacity: 1; margin-top: 0px; margin-bottom: 0px;">TRENDING</h1>
        </header>

        <img @click="top()" :style="topStyle" class="top-button" src="../assets/top-button.svg" alt="scroll-up">

        <!-- article display -->
        <div class="parent" style="margin-top: 2vh;" v-for="article in trendingArticles" :key="article.id">
            <div class="box-1" @click="$parent.articleRequested(article)"> 
                <p class="ranking">{{ rank(article) }}</p> 
                <img class="photo" :src="article.image" :alt="article.imageCaption">                
                <div class="box-2">
                    <p class="author">{{ article.date }} - {{ article.author.substring(1) }}</p>
                    <p class="cat">{{ article.category.substring(1) }}</p>
                    <h2 class="title">{{ article.title.substring(1) }}</h2>
                </div>
                <div class="box-3">
                    <img v-if="article.saved" @click="$parent.bookmark(article, false)" class="book" src="../assets/remove-bookmark.svg" alt="unsave">
                    <img v-else-if="!articles.saved" @click="$parent.bookmark(article, true)" class="book" src="../assets/add-bookmark.svg" alt="save">
                </div>
            </div>
        </div>

        <br><br>

    </div>
</template>

<script>
export default {
    props: [
        'articles',
    ],
    data: () => {
        return {
            trendingArticles: [],
            refresh: 'display: none;',
            blocked: false,
            topStyle: 'display: none;',
        }
    },
    mounted() {
        this.sortTrending();
    },
    created() {
        addEventListener("scroll", this.captureY);
        addEventListener("touchend", this.checkReload);
    },
    destroyed() {
        removeEventListener("scroll", this.captureY);
        removeEventListener("touchend", this.checkReload);
    },
    methods: {
        checkReload() {
            if (window.scrollY < -100 && !this.blocked) {
                this.blocked = true;
                this.refresh = 'transform: rotate(1350deg)';
                this.$parent.loadAssets();
                setTimeout(() => {
                    this.blocked = false;
                    this.refresh = 'display: none';
                    this.sortTrending();
                }, 3000)
            }
        },
        captureY() {
            window.scrollY > 500 ? this.topStyle = '':this.topStyle = 'display: none;';
            console.log(this.topStyle)
            if (window.scrollY < -100 && !this.blocked) this.refresh = '';
            else if (!this.blocked) this.refresh = 'display: none'
        },
        sortTrending() {
            this.trendingArticles = this.articles;
            this.trendingArticles.sort((a, b) => b.score - a.score)
        },
        rank(article) {
            let pos = this.trendingArticles.indexOf(article) + 1;
            if (pos < 10) pos = '0' + pos;
            return pos;
        },
        top() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style scoped>

.top-button {
    position: fixed;
    top: 85vh;
    left: 47%;
    background-color: black;
    border-radius: 50%;
    width: 25px;    
}
.ranking {
    margin: 0%; 
    margin-right: 2%;
    border-radius: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    flex-wrap: wrap;
    font-weight: bold;
    font-size: 8pt;
}
.refresh-icon {
    width: 3vh;
    margin: 1vh;
    transition: 3s;
}
</style>