<template>
    <div class="content">
        <p class="category">{{ article.category }}</p>
        <h1>{{ article.title }}</h1>
        <b><p>Author: {{article.author }}</p></b>
        <br />
        <img :src="require(`../assets/pictures/${article.image}.jpg`)" :alt="article.imageCaption">
        <p>{{ article.content }}</p>
        <br />
        <button class="back" @click="$parent.toggleContentView()">Back to News Feed</button>
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

.back {
    background-color: white;
    border: 2px black solid;
    padding: 10px;
    font-size: 20pt;
}
.content {
    display: flex;
    flex-direction: column;
    border: 2px black solid;    
    padding: 10px;
    background-color: white;
    
}

</style>