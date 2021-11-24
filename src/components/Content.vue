<template>
    <div class="content">
        <p class="category">{{ article.category }}</p>
        <h1>{{ article.title }}</h1>
        <b><p>{{article.author }}</p></b>
        <br />
        <img :src="require(`../assets/pictures/${article.image}.jpg`)" :alt="article.imageCaption">
        <p class="article">{{ article.content }}</p>
        <br />
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
img {
    margin-bottom: 15px;
}
.back {
    background-color: white;
    border: 2px black solid;
    padding: 10px;
    font-size: 20pt;
    font-family: Georgia, 'Times New Roman', Times, serif;
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