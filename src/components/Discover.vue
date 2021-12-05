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
            placeholder="Articles, Authors, or Categories" 
            v-model="rawQuery"
            @click="engageSearch(rawQuery)" />
               
        </div>
        <br><br><br><br><br><br>
        <!-- display search results -->
        <div v-if="rawQuery.length > 0 && searching">
            <p v-if="displayedArticles.length > 0" class="search-text">Here's What We Found:</p>
            <div v-else>
                <center>
                    <p class="search-text">Bad News!</p>
                    <p class="search-text">We Can't Find What You're Searching For :(</p>
                </center>
            </div>
        
            <div class="parent" v-for="article in displayedArticles" :key="article.id">
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
            <br><br><br>  
        </div>

        <!-- article of the day -->
        <div v-if="!searching">

            <center>
                <h1 class="featured-title">Article of the Day</h1>
            </center>
            
            <div class="parent">
                <div class="box-1" @click="$parent.articleRequested(articles[articleOfTheDay])">  
                    <img class="photo" :src="require(`../assets/pictures/${articles[articleOfTheDay].image}.webp`)" :alt="articles[articleOfTheDay].imageCaption">                
                    <div class="box-2">
                        <p class="author">{{ articles[articleOfTheDay].date }} - {{ articles[articleOfTheDay].author }}</p>
                        <p class="cat">{{ articles[articleOfTheDay].category.substring(1) }}</p>
                        <h2 class="title">{{ articles[articleOfTheDay].title }}</h2>
                    </div>
                    <div class="box-3">
                        <img v-if="articles[articleOfTheDay].saved" @click="$parent.bookmark(articles[articleOfTheDay], false)" class="book" src="../assets/remove-bookmark.svg" alt="unsave">
                        <img v-else @click="$parent.bookmark(articles[articleOfTheDay], true)" class="book" src="../assets/add-bookmark.svg" alt="save">
                    </div>
                </div>
            </div>

        </div>

        <!-- category tags -->
        <center>
            <div v-if="!searching">
                <!-- underscore character ensures strictly category search -->
                <h3 class="cat-title">Categories</h3>
                    <h2 class="quick-search" @click="engageSearch('_News')">News</h2>
                    <h2 class="quick-search" @click="engageSearch('_Arts & Entertainment')">Arts & Entertainment</h2>
                    <h2 class="quick-search" @click="engageSearch('_Lifestyle')">Lifestyle</h2>
                    <h2 class="quick-search" @click="engageSearch('_Opinion')">Opinion</h2>
                    <h2 class="quick-search" @click="engageSearch('_Sports')">Sports</h2>
            </div>
        </center>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            articleOfTheDay: 0,
            maskQuery: false,
            searching: false,         
            displayedArticles: [],
            rawQuery: '',
            searchStyle: 'width: 0vw; opacity: 0;',
            searchTitle: '',
            searchTitleStyle: '',
            searchStyleMain: '',
        }
    },
    props: [
        'articles',
    ],
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

            for (let i = 0; i < this.articles.length; i++) {
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
            this.searchStyle = 'width: 100vw; opacity: 1; padding-left: 4vw; font-size: 2.5vh;';
            this.searchTitle = '<';
            this.searchTitleStyle = "font-family: monospace; font-weight: bold; opacity: 0.5; cursor: pointer; margin-top: 20px";
            this.searching = true;
            this.rawQuery = searchQuery;
            this.searchStyleMain = 'border-bottom: 1px solid black; background: #c9c9c9;';
        },
        disengageSearch() {
            this.searchStyle = 'width: 0vw;';
            setTimeout(() => this.searchStyle += 'opacity: 0;', 100);
            this.searchTitle = '';
            this.searchTitleStyle = '';
            this.searching = false;
            this.rawQuery = '';
            this.searchStyleMain = '';
        }
    },
    mounted() {
        this.articleOfTheDay = Math.floor(Math.random()*this.articles.length);    
    }
}

</script>

<style scoped>
.cat-title {
    font-size: 16pt;
}
.featured-title {
    font-size: 16pt;
}
.icon-display {
    width: 6vh;
    height: 6vh;
    background-color: black;
    padding: 8vh; 
    border-radius: 25%;
}
.search-icon {
    padding-left: 4vh;
    padding-top: 1.5vh;
    max-width: 4vh;
    max-height: 4vh;
    transition: 200ms ease-in-out
}
.quick-search {
    border: 1px solid black;
    font-size: 10pt;
    background-color: white;
    border-radius: 25px;
    bottom: 10;
    padding: 1.5vh;
    width: 50%;
}
.search-title {
    margin: 2vh;
    margin-left: 2.5vh;
    margin-top: 1.75vh;
    font-size: 5vh;
    color: black;
    cursor: default;
    transition: 300ms ease-in-out;
}
.search-text {
    font-size: 16pt;
    margin: 5vw;
    color: black;
    margin-left: 1.5vw;
    margin-top: 4vh;
}
.search {
    display: flex;
    position: fixed;
    top: 0;
    padding-top: 1vh;
    width: 100vw;
    background: linear-gradient(#c9c9c9, #ffffff00)
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
