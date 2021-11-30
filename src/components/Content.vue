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
            <button :style="returnButtonStyle" 
            class="back" 
            @click="$parent.toggleContentView()"
            >
                <b>Return to Feed</b>
            </button>
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
            returnButtonStyle: 'padding: 1.5vh; font-size: 12pt; bottom: 2vh;',
            lastScrollPos: 0,
        }
    },
    created() {
        document.addEventListener("scroll", (this.scroll));
    },
    destroyed() {
        document.removeEventListener("scroll", (this.scroll));
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
    methods: {
        scroll() {
            if ((this.lastScrollPos < window.scrollY) && window.scrollY > 100) {
                this.returnButtonStyle = 'height: 0vh; bottom: 0vh;';
                setTimeout(() => this.returnButtonStyle += 'opacity: 0;', 10);
            } else {
                this.returnButtonStyle = 'padding: 1.5vh; font-size: 12pt; bottom: 2vh;';
            }
            console.log(window.scrollY)
            
            this.lastScrollPos = window.scrollY;
            
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
    font-family: Georgia, 'Times New Roman', Times, serif;
    position: fixed;
    margin-top: auto;
    min-width: 92.5vw;
    transition: 200ms ease-in-out;
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
html,
body {
  position: fixed;
  overflow: hidden;
}
</style>