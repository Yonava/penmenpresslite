<template>

    <div class="content">
        <div>
            <input type="range" min="6" max="30" v-model="resizeInput" />
            <p>{{ resizeInput }}pt Font</p>
            <br />
            <p class="category">{{ article.category.substring(1) }}</p>
            <h1>{{ article.title }}</h1>
            <b><p>{{article.author }}</p></b>
            <br />
            <img :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">
            <center>
                <p class="caption">{{ article.imageCaption }}</p>
            </center>
            <p :style="articleSize" class="article">{{ article.content }}</p>
            <br />
            <button class="back" @click="$parent.toggleContentView()"><b>Return to Feed</b></button>
        </div>
        <br /><br />
    </div>

</template>

<script>

export default {
    props: [
        'article',
    ],
    data: () => {
        return {
            articleSize: 'font-size: 12pt;',
            resizeInput: '12',
        }
    },
    mounted() {
        if (localStorage.articleSize) {
            this.articleSize = localStorage.articleSize;
            this.resizeInput = localStorage.resizeInput;
        }
        window.navigator.vibrate([200, 100, 200]);
    },
    watch: {
        resizeInput() {
            this.articleSize = `font-size: ${this.resizeInput}pt;`;
            localStorage.articleSize = this.articleSize;
            localStorage.resizeInput = this.resizeInput;
        }
    },
}
</script>

<style scoped>
.caption {
    margin-bottom: 20px;
}
img {
    height: auto;
    max-width: 100%;
    object-fit: cover;
}
.back {
    background-color: white;
    border: 2px black solid;
    padding: 10px;
    font-size: 12pt;
    font-family: Georgia, 'Times New Roman', Times, serif;
    position: fixed;
    bottom: 2vh;
    margin-top: auto;
    min-width: 92.5vw;
}
.content {
    display: flex;
    flex-direction: column;
    border: 2px black solid;    
    padding: 10px;
    background-color: white;
}
h1 {
    font-size: 20pt;
    margin: 15px;
    margin-left: 0px;
    line-height: 30px;
}
.article {
    font-family: 'Times New Roman', Times, serif;
}
html {
    height: 100%;
    width: 100%;
    overflow: auto;
}
</style>