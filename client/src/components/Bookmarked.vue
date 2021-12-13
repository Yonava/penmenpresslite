<template>
    <div>
        
        <!-- saved articles banner -->
        <header class="feed-header"> 
            <h1 style="margin-left: 3%; opacity: 1; margin-top: 0px; margin-bottom: 0px;">SAVED ARTICLES</h1>
        </header>
        
        <br>

        <!-- if no saved articles -->
        <center v-if="!saved">
            <p class="non-saved">Saved/Bookmarked Articles Show Up Here</p>
            <img class="icon-display" src="../assets/add-bookmark.svg" alt="save">
        </center>

        <!-- article display -->
        <div v-for="article in articles" :key="article.id">
            <div v-if="article.saved">
                <div class="parent">
                    <div class="box-1" @click="$parent.articleRequested(article)">  
                        <img class="photo" :src="article.image" :alt="article.imageCaption">                
                        <div class="box-2">
                            <p class="author">{{ article.date }} - {{ article.author.substring(1) }}</p>
                            <p class="cat">{{ article.category.substring(1) }}</p>
                            <h2 class="title">{{ article.title.substring(1) }}</h2>
                        </div>
                        <div class="box-3">
                            <img @click="$parent.bookmark(article, false); update()" class="book" src="../assets/remove-bookmark.svg" alt="unsave">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br><br><br><br>

    </div>
</template>

<script>

export default {

    data: () => {
        return {
            saved: true,
        }
    },
    props: [
        'articles',
    ],
    methods: {
        update() {
            for (let i = 0; i < this.articles.length; i++) {
                if (this.articles[i].saved) return
            }
            this.saved = false;
        }
    },
    mounted() {
        this.update();
    }
}

</script>

<style scoped>
.non-saved {
    margin: 10vh;
    margin-bottom: 2.5vh;
    font-size: 16pt;
    color: black;
}
.icon-display {
    width: 10vh;
    height: 10vh;
    background-color: white;
    padding: 2vh; 
    border: .3vh black solid; 
    border-radius: 25%;
}

</style>
