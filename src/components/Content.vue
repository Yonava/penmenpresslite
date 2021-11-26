<template>
<div class="content">
    <div>
        <input type="range" min="6" max="30" v-model="resizeInput" />
        <p>{{ resizeInput }}pt Font</p>
        <br>
        <p class="category">{{ article.category }}</p>
        <h1>{{ article.title }}</h1>
        <b><p>{{article.author }}</p></b>
        <br />
        <img :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">
        <center>
        <p class="caption">{{ article.imageCaption }}</p>
        </center>
        <p :style="articleSize" class="article">{{ article.content }}</p>
        <br />
    </div>

    <br>
    <br>
    <button class="back" @click="$parent.toggleContentView()"><b>Return to Feed</b></button>
    
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
    watch: {
        resizeInput() {
            this.articleSize = `font-size: ${this.resizeInput}pt;`
        }
    }
    
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
</style>