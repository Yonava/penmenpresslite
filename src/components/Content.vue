<template>

    <div class="content">
        <div>
            <div class="utility-parent">
                <img class="utility-icon" src="../assets/share.svg" alt="share">
                <img @click="resizeFont()" 
                class="utility-icon" 
                src="../assets/font.svg" 
                alt="fontSize"
                :style="buttonColoration">
                <input id="font-size" :style="expandFontSlider" type="range" min="6" max="30" v-model="resizeInput" />
                <label class="font-label" :style="fontLabel" for="font-size">{{ resizeInput }}</label>
            </div>

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
            @click="$parent.toggleContentView()">
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
            takeScrollFeedback: true,
            yDifferential: 0,
            lastPos: 0,
            expandFontSlider: 'width: 0vw; opacity: 0; display: none',
            sliderExpanded: false,
            fontLabel: 'opacity: 0;',
            buttonColoration: 'background-color: white;',
            fontSliderCooldown: false,
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
        },
        fontSliderCooldown() {
            console.log(this.fontSliderCooldown)
        }
    },
    methods: {
        scroll() { 
            if ((this.yDifferential > 10) && window.scrollY > 100) {
                this.returnButtonStyle = 'height: 0vh; bottom: 0vh;';
                    setTimeout(() => this.returnButtonStyle += 'opacity: 0;', 5);
                this.animationCooldown = true;
            } else if (this.yDifferential < -20){ // sensitivity control
                this.returnButtonStyle = 'padding: 1.5vh; font-size: 12pt; bottom: 2vh;';
                this.animationCooldown = true;
            }   
            if (this.takeScrollFeedback) {
                this.yDifferential = window.scrollY - this.lastPos;
                this.lastPos = window.scrollY
                this.takeScrollFeedback = false;
                setTimeout(() => this.takeScrollFeedback = true, 50);
            }
        },
        resizeFont() {
            let delay = 400;
            let fontLabelTrasitDur = 200  // offsets fontLabel transition
            if (!this.fontSliderCooldown) {
                const resolvePromise = new Promise(resolve => setTimeout(resolve, delay*2));
                this.fontSliderCooldown = true;
                if (this.sliderExpanded) {
                    this.fontLabel = 'opacity: 0;';
                    this.buttonColoration = 'background-color: white;';
                } else this.buttonColoration = 'background-color: rgb(255, 200, 200);';     

                if (this.sliderExpanded) {
                    setTimeout(() => this.expandFontSlider = 'width: 2vw;', fontLabelTrasitDur);
                    setTimeout(() => this.expandFontSlider += 'opacity: 0;', delay + fontLabelTrasitDur);
                } else {
                    this.expandFontSlider = 'width: 2vw; opacity: 1;';
                    setTimeout(() => this.expandFontSlider += 'width: 55vw;', delay);
                }
                resolvePromise.then(() => {
                if (!this.sliderExpanded) this.fontLabel = 'opacity: 1;';
                else this.expandFontSlider = 'display:none;';
                this.sliderExpanded = !this.sliderExpanded;
                this.fontSliderCooldown = false;
                });
            }
            

        }
    }
}
    

</script>

<style scoped>
.font-label {
    transition: 200ms ease-in-out;
    margin-left: 1vh;
    margin-top: .6vh;
    font-size: 16pt;
}
.utility-parent {
    display: flex;
}
.utility-icon {
    margin-right: 15px;
    width: 5vh;
    height: 5vh;
    transition: 200ms ease-in-out;
    border-radius: 20%;
}
#font-size {
    transition: 300ms ease-in-out;
}
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
body {
  position: fixed;
  overflow: hidden;
  background-color: white;
}
</style>