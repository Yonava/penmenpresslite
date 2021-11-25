<template>
<div class="content">
    <div>
        <p class="category">{{ article.category }}</p>
        <h1>{{ article.title }}</h1>
        <b><p>{{article.author }}</p></b>
        <br />
        <img :src="require(`../assets/pictures/${article.image}.webp`)" :alt="article.imageCaption">
        <center>
        <p class="caption">{{ article.imageCaption }}</p>
        </center>
        <p class="article">{{ article.content }}</p>
        <br />
    </div>
    
    <button class="back" @click="$parent.toggleContentView()">Return to News Feed</button>
    
</div>
</template>

<script>

export default {
    props: [
        'article'
    ]
    
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
    font-size: 10pt;
    font-family: Georgia, 'Times New Roman', Times, serif;
    position: sticky;
    bottom: 1%;
}
.content {
    display: flex;
    flex-direction: column;
    border: 2px black solid;    
    padding: 10px;
    background-color: white;  
    margin: 5px;
}
h1 {
    font-size: 20pt;
    margin: 15px;
    margin-left: 0px;
    line-height: 30px;
}
.article {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
}
</style>