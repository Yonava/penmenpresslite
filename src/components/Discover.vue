<template>
    <div class="main">
    
        <!-- search panel -->
        <div :style="searchStyleMain" class="search">
            
            <img v-if="!searching" @click="engageSearch('')" class="search-icon" src="../assets/search.svg" alt="search">
            <h1 @click="disengageSearch()" :style="searchTitleStyle" class="search-title">
                {{ searchTitle }}
            </h1>
            
            <input 
            :style="searchStyle"
            class="searchbar"
            type="text" 
            :placeholder="searchPlaceholder" 
            v-model="rawQuery"
            @click="engageSearch(rawQuery)" />
               
        </div>

        <!-- display search results -->
        <div v-if="searching && !rawQuery" class="empty-search">
            <center>
                <img src="../assets/search.svg" alt="search">
            </center>   
        </div>
        <div v-if="rawQuery.length > 0 && searching">
            <br /><br /><br />
            <p v-if="displayedArticles.length > 0" class="search-text">Here's What We Found:</p>
            <div v-else>
                <center>
                    <p class="search-text">Bad News!</p>
                    <p class="search-text">We Can't Find What You're Searching For :(</p>
                </center>
            </div>
            <div v-for="article in displayedArticles" :key="article.id">
                <div class="container-1" @click="$parent.articleRequested(article)"> 
                    <img class="picture" :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">
                    <div class="container-2">                     
                        <p class="category">{{ article.category.substring(1) }}</p>
                        <h1 class="headline">{{ article.title }}</h1>
                        <p class="date">{{ article.date }} - {{ article.author }}</p>
                    </div>
                    <div>
                        <img v-if="article.saved" @click="$parent.bookmark(article, false)" class="bookmark" src="../assets/remove-bookmark.svg" alt="unsave">
                        <img v-else @click="$parent.bookmark(article, true)" class="bookmark" src="../assets/add-bookmark.svg" alt="save">
                        <!-- <img class="bookmark" src="./assets/share.svg" alt="share"> -->
                    </div>
                </div>
            </div>  
        </div>
        <br /><br /><br />
      

        <!-- article of the day -->
        <div v-if="!searching">
            <center>
                <h1 class="featured-title">Article of the Day</h1>
            </center>
            <div class="container-1" @click="$parent.articleRequested(articles[3])">  
                <img class="picture" :src="require(`../assets/pictures/${articles[3].image}.webp`)" :alt="articles[3].imageCaption">                
                <div class="container-2">
                    <p class="category">{{ articles[3].category.substring(1) }}</p>
                    <h1 class="headline">{{ articles[3].title }}</h1>
                    <p class="date">{{ articles[3].date }} - {{ articles[3].author }}</p>
                </div>
                <div>
                    <img v-if="articles[3].saved" @click="$parent.bookmark(articles[3], false)" class="bookmark" src="../assets/remove-bookmark.svg" alt="unsave">
                    <img v-else @click="$parent.bookmark(articles[3], true)" class="bookmark" src="../assets/add-bookmark.svg" alt="save">
                    <!-- <img class="bookmark" src="./assets/share.svg" alt="share"> -->
                </div>
            </div>
        </div>

        <!-- category tags -->
        <center>
            <div v-if="!searching">
                <!-- underscore character ensures strictly category search -->
                <h1 style="color: white; margin: 1vh; margin-bottom: 0px;">Categories</h1>
                <h2 :style="tags" @click="engageSearch('_News')">News</h2>
                <h2 :style="tags" @click="engageSearch('_Arts & Entertainment')">Arts & Entertainment</h2>
                <h2 :style="tags" @click="engageSearch('_Lifestyle')">Lifestyle</h2>
                <h2 :style="tags" @click="engageSearch('_Opinion')">Opinion</h2>
                <h2 :style="tags" @click="engageSearch('_Sports')">Sports</h2>
                <br>
            </div>
        </center>
    </div>
</template>

<script>
import articles from '../assets/articles.json'

export default {
    data: () => {
        return {  
            maskQuery: false,
            searching: false,         
            articles,
            displayedArticles: [],
            rawQuery: '',
            searchStyle: 'width: 0vw; opacity: 0;',
            searchPlaceholder: '',
            searchTitle: '',
            searchTitleStyle: '',
            searchStyleMain: '',
            tags: 'width: 90vw; background-color: rgb(207, 233, 241);',
        }
    },
    watch: {
        rawQuery() {
            if (this.maskQuery) this.maskQuery = false
            else this.search();
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
            if (this.rawQuery[0] === '_') {
                this.maskQuery = true;
                this.rawQuery = 'Category: ' + this.rawQuery.substring(1);
            }
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
        },
        engageSearch(searchQuery) {
            this.searchPlaceholder = 'Articles, Authors, or Issues';
            this.searchStyle = 'width: 100vw; opacity: 1; padding-left: 4vw; font-size: 2.5vh;';
            this.searchTitle = '<';
            this.searchTitleStyle = "font-family: monospace; font-weight: bold; opacity: 0.5; cursor: pointer; margin-top: 20px";
            this.searching = true;
            this.rawQuery = searchQuery;
            this.searchStyleMain = 'border-bottom: 1px solid black;';
        },
        disengageSearch() {
            this.searchPlaceholder = '';
            this.searchStyle = 'width: 0vw;';
            setTimeout(() => this.searchStyle += 'opacity: 0;', 100);
            this.searchTitle = '';
            this.searchTitleStyle = '';
            this.searching = false;
            this.rawQuery = '';
            this.searchStyleMain = '';
        },
    }
}

</script>

<style scoped>
.empty-search {
    margin: 20vh;
}
.search-icon {
    padding-left: 4vh;
    padding-top: 2.5vh;
    max-width: 4vh;
    max-height: 4vh;
    transition: 200ms ease-in-out
}
h2 {
    border: .3vh solid black;
    font-size: 14pt;
    background-color: white;
    border-radius: 50px;
    bottom: 0;
    padding: 1.5vh;
    margin: 1vh;
    margin-bottom: 1.5vh;
    transition: 200ms ease-in-out;
}
.featured-title {
    margin-top: 1vh;
    margin-left: 1.5vw;
    margin-bottom: 0px;
    color: white;
    display: fixed;
    cursor: default;
    background-color: rgb(71, 105, 194);
}
.featured {
    position: absolute;
    display: flex;
    flex-direction: row;
    max-width: none;
    /* background-color: rgb(140, 200, 255); */
    overflow: auto;
}
.main {
    margin: 0%;
}
.search-title {
    margin: 2vh;
    margin-left: 2.5vh;
    margin-top: 1.75vh;
    font-size: 5vh;
    color: white;
    cursor: default;
    transition: 300ms ease-in-out;
}
.search-text {
    font-size: 16pt;
    margin: 5vw;
    color: white;
    margin-left: 1.5vw;
    margin-top: 4vh;
}
.search {
    display: flex;
    position: fixed;
    top: 0;
    padding-top: 1vh;
    width: 100vw;
    background-color: rgb(71, 105, 194);
    z-index: 1;
}
.searchbar {
    margin: 2vh;
    border: 1px solid black;
    border-radius: 40px;
    height: 5vh;
    margin-right: 2.5vh;
    transition: 300ms;
}
input {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
