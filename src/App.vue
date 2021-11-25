<template>
    <div>
    
        <!-- penmen press banner -->
        <header>
            <center>
                <h1>THE PENMEN PRESS</h1>
            </center>
        </header>

        <!-- main news feed / home -->
        <div v-if="!contentView && page === 'home'">
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
            <br />
            <center>
                <p>visit <a href="https://penmenpress.com/">https://penmenpress.com/</a> for more snhu reporting</p>
                <p>© penmenpress 2021 all rights reserved</p>
            </center>
        </div>

        <!-- content view / reader view -->
        <div v-if="contentView">
            <Content :article="selectedArticle" />
        </div>

        <!-- search menu -->
        <div v-if="page === 'search'">
            <Search />
        </div>

        <!-- favorites / read later menu -->
        <div v-else-if="page === 'favorites'">
            <Favorites />
        </div>

        <!-- navigation panel -->
        <div v-if="!contentView" class="bottom">
            <div :style="navBlip" class="selected-nav"></div> 
            <div @click="navigate(-115, 'red', 'search')" class="nav-container">
                <img class="icon" src="./assets/search.png" alt="search">
            </div>
            <div @click="navigate(0, 'purple', 'home')" class="nav-container">
                <img class="icon" src="./assets/homebutton.png" alt="home">
            </div>
            <div @click="navigate(115, 'blue', 'favorites')" class="nav-container">
                <img class="icon" src="./assets/star.png" alt="favorites">
            </div>
        </div> 

    </div>
</template>

<script>

import articles from './assets/articles'
import Content from './components/Content.vue'
import Search from './components/Search.vue'
import Favorites from './components/Favorites.vue'

export default {
    name: 'App',
    components: {
        Content,
        Search,
        Favorites
    },
    data: () => {
        return {
            articles: articles,
            contentView: false,
            selectedArticle: {},
            navBlip: 'transform: translateX(0px); background-color: purple;',
            page: 'home',
        }
    },
    methods: {
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
    }

}
</script>

<style>
.icon {
    height: 20px;
    width: 20px;
    padding: 7.5px;  
}
.selected-nav {
    border-radius: 25%;
    width: 30px; 
    height: 30px;
    opacity: 0.5;
    position: absolute;
    transition: 200ms ease-in-out;
}
.nav-container {
    height: 35px;
    width: 35px;
    margin-left: 40px;
    margin-right: 40px;   
}
.bottom {
    background-color: white;
    position: sticky;
    bottom: 0;
    height: 35px;
    border-top: 1px black solid;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    margin: 5px;
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
    color: white;
    background-color: rgb(71, 105, 194);
    z-index: 1;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
body {
    background-color: rgb(71, 105, 194);
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin: 0px;
}
p {
    margin: 0px;
    font-size: 10pt
}
</style>