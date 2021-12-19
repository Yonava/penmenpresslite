<template>

    <div class="content">
        <div>

            <!-- utility panel -->
            <div class="utility-parent">
                <img class="utility-icon" src="../assets/share.svg" alt="share">
                <img @click="resizeFont()" 
                class="utility-icon" 
                src="../assets/font.svg" 
                alt="fontSize"
                :style="buttonColoration">
                <input id="font-size" :style="expandFontSlider" type="range" min="6" max="30" v-model="resizeInput" />
                <p class="font-label" :style="fontLabel">{{ resizeInput }}</p>
            </div>

            <!-- article data -->
            <div>
                <p class="cat">{{ article.category.substring(1) }}</p>
                <h1 class="headline">{{ article.title.substring(1) }}</h1>
                <p class="author-credit">{{ article.author.substring(1) }} - {{ article.date }} 
                    - Score: {{ article.score }}</p>
                <img :src="article.image" :alt="article.imageCaption">
                <center>
                    <p class="caption">{{ article.imageCaption }}</p>
                </center>
                <pre class="article" :style="articleSize">{{ article.content.substring(1) }}</pre>
            </div>
            
        </div>

        <!-- return button -->
        <button :style="returnButtonStyle" 
        class="back" 
        @click="$parent.toggleContentView()">
            <b>Return to Feed</b>
        </button>


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
        window.navigator.vibrate([200, 100, 200]); // works on andriod devices
        // add view count put request here
        // start article background timer
    },
    watch: {
        resizeInput() {
            this.articleSize = `font-size: ${this.resizeInput}pt;`;
            localStorage.articleSize = this.articleSize;
            localStorage.resizeInput = this.resizeInput;
        },
    },
    methods: {
        scroll() { 
            if ((this.yDifferential > 10) && window.scrollY > 100) {
                this.returnButtonStyle = 'height: 0vh; bottom: 0vh;';
                    setTimeout(() => this.returnButtonStyle += 'opacity: 0;', 5);
                this.animationCooldown = true;
            } else if (this.yDifferential < -20) { // sensitivity control
                this.returnButtonStyle = 'padding: 1.5vh; font-size: 12pt; bottom: 2vh;';
                this.animationCooldown = true;
            }   
            if (this.takeScrollFeedback) {
                this.yDifferential = window.scrollY - this.lastPos;
                this.lastPos = window.scrollY; // window.scrollY is a value gained from eventListener
                this.takeScrollFeedback = false;
                setTimeout(() => this.takeScrollFeedback = true, 50);
            }
        },
        resizeFont() {
            let delay = 400;
            let fontLabelTrasitDur = 200; // offsets fontLabel transition
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
                    else this.expandFontSlider = 'display: none;';
                    this.sliderExpanded = !this.sliderExpanded;
                    this.fontSliderCooldown = false;
                });
            }
            

        }
    }
}
    

</script>

<style scoped>

/* TOP BUTTONS / UTILITY BUTTONS */
.font-label {
    transition: 200ms ease-in-out;
    font-size: 16pt;
    margin: 0px;
    margin-bottom: .35vh;
    margin-left: 1vw;
}
.utility-parent {
    display: flex;
    align-items: center;
}
.utility-icon {
    margin-bottom: 1vh;
    margin-right: 2vh;
    width: 5vh;
    transition: 200ms ease-in-out;
    border-radius: 10%;
}
#font-size {
    transition: 300ms ease-in-out;
}

/* ARTICLE CONTENT DISPLAYS */
.author-credit {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 10pt;
}
.caption {
    margin: 0px;
    font-size: 6pt;
}
img {
    width: 100%;
    object-fit: cover;
}
.back {
    background-color: white;
    border: 2px black solid;
    position: fixed;
    width: 90%;
    margin-left: 3%;
    transition: 200ms ease-in-out;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.headline {
    font-size: 20pt;
    margin: 15px;
    margin-left: 0px;
    line-height: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
.article {
    font-family: 'Times New Roman', Times, serif;
    max-width: 100%;
    white-space: pre-wrap;
    padding: 2%;
}

/* PARENT STYLING */
.content {
    padding: 1.5vw; 
}
</style>