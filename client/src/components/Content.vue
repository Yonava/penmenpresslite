<template>
  <div class="content">
    <div>
      <!-- utility panel -->
      <div class="utility-parent">
        <img 
          class="utility-icon" 
          src="../assets/share.svg" 
          alt="share" 
        />
        <img
          @click="resizeFont()"
          class="utility-icon"
          src="../assets/font.svg"
          alt="fontSize"
          :style="buttonColoration"
        />
        <input
          id="font-size"
          :style="expandFontSlider"
          type="range"
          min="6"
          max="30"
          v-model="resizeInput"
        />
        <p 
          :style="fontLabel"
          class="font-label" 
        >{{ resizeInput }}</p>
      </div>

      <!-- article data -->
      <div>
        <p class="cat">
          {{ article.category.substring(1) }}
        </p>
        <h1 class="headline">
          {{ article.title.substring(1) }}
        </h1>
        <p class="author-credit">
          {{ authorDisplay }}
        </p>
        <p class="author-credit">
          {{ article.date }}
        </p>
        <img 
          :src="article.image" 
          :alt="article.imageCaption" 
        />
        <center>
          <p class="caption">
            {{ article.imageCaption }}
          </p>
        </center>
        <pre 
          :style="articleSize"
          class="article" 
        >
          {{ article.content.substring(1) }}</pre>
      </div>
      <div style="margin: 8px;">
        <h2 style="margin-top: 0px; margin-bottom: 8px;">
          About The Author{{ authors.length > 1 ? "s" : "" }}
        </h2>
        <div 
          v-for="author in authors"
          :key="author.id"
          style="display: flex; flex-direction: row; padding: 10px; border: 1px solid black; border-radius: 10px; margin-bottom: 10px;"
        >
          <img 
            v-if="author.photo"
            :src="author.photo" 
            :alt="author.firstName" 
            class="author-photo"
          />
          <div style="margin-left: 10px">
            <p 
              v-if="author.title"
              style="margin: 0px"
            >
              {{ author.title }}
            </p>
            <h3 style="margin: 0px">
              {{ author.firstName }} {{ author.middleName }} {{ author.lastName }}
            </h3>
            <p 
              v-if="author.bio"
              style="margin: 0px"
            >
              {{ author.bio }}
            </p>
            <p 
              v-if="author.joinDay && author.joinMonth && author.joinYear" 
              style="margin-bottom: 0px; font-size: 9pt;"
            >
              <i>
                {{ author.firstName }} {{ author.lastName }} has been with the press since {{ author.joinDay }}/{{ author.joinMonth }}/{{ author.joinYear }}
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- return button -->
    <button 
      @click="updateScore()"
      :style="returnButtonStyle" 
      class="back" 
    >
      <b>
        Return to Feed
      </b>
    </button>

    <br /><br /><br />

    <p style="font-size: 4pt">
      ----> Trending Score: {{ article.score }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["article", "articles"],
  data: () => {
    return {
      articleSize: "font-size: 12pt;",
      resizeInput: "12",
      returnButtonStyle: "padding: 1.5vh; font-size: 12pt; bottom: 2vh;",
      takeScrollFeedback: true,
      yDifferential: 0,
      lastPos: 0,
      expandFontSlider: "width: 0vw; opacity: 0; display: none",
      sliderExpanded: false,
      fontLabel: "opacity: 0;",
      buttonColoration: "background-color: white;",
      fontSliderCooldown: false,
      timeSpent: 0,
      pageSnapshots: [],

      authors: []
    };
  },
  created() {
    document.addEventListener("scroll", this.scroll);
    this.timeKeeper = setInterval(() => {
      this.timeSpent++;
      this.pageSnapshots.push(window.scrollY);
    }, 1000);
  },
  destroyed() {
    document.removeEventListener("scroll", this.scroll);
    clearInterval(this.timeKeeper);
  },
  async mounted() {
    if (localStorage.articleSize) {
      this.articleSize = localStorage.articleSize;
      this.resizeInput = localStorage.resizeInput;
    }

    let authorList = [];
    await axios.get(`/api/articleAuthor/${this.article.id}`)
      .then((res) => {
        // array of author ids
        authorList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });

    authorList.forEach(async (authorId) => {
      await axios.get(`/api/authors/${authorId}`)
        .then((res) => {
          this.authors.push(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    // window.navigator.vibrate([200, 100, 200]);  works on some andriod devices
  },
  watch: {
    resizeInput() {
      this.articleSize = `font-size: ${this.resizeInput}pt;`;
      localStorage.articleSize = this.articleSize;
      localStorage.resizeInput = this.resizeInput;
    },
  },
  computed: {
    authorDisplay() {
      let authorDisplay = "";
      this.authors.forEach((author) => {
        if (author?.title) {
          authorDisplay += author.title + " ";
        }
        authorDisplay += author.firstName + " ";
        if (author?.middleName) {
          authorDisplay += author.middleName[0] + ". ";
        }
        authorDisplay += author.lastName + ", ";
      });
      return authorDisplay.substring(0, authorDisplay.length - 2);
    }
  },
  methods: {
    scroll() {
      if (this.yDifferential > 10 && window.scrollY > 100) {
        this.returnButtonStyle = "height: 0vh; bottom: 0vh;";
        setTimeout(() => (this.returnButtonStyle += "opacity: 0;"), 5);
        this.animationCooldown = true;
      } else if (this.yDifferential < -20) {
        // sensitivity control
        this.returnButtonStyle =
          "padding: 1.5vh; font-size: 12pt; bottom: 2vh;";
        this.animationCooldown = true;
      }
      if (this.takeScrollFeedback) {
        this.yDifferential = window.scrollY - this.lastPos;
        this.lastPos = window.scrollY;
        this.takeScrollFeedback = false;
        setTimeout(() => (this.takeScrollFeedback = true), 50);
      }
    },
    resizeFont() {
      let delay = 400;
      let fontLabelTrasitDur = 200; // offsets fontLabel transition
      if (!this.fontSliderCooldown) {
        const resolvePromise = new Promise((resolve) =>
          setTimeout(resolve, delay * 2)
        );
        this.fontSliderCooldown = true;
        if (this.sliderExpanded) {
          this.fontLabel = "opacity: 0;";
          this.buttonColoration = "background-color: white;";
        } else this.buttonColoration = "background-color: rgb(255, 200, 200);";

        if (this.sliderExpanded) {
          setTimeout(
            () => (this.expandFontSlider = "width: 2vw;"),
            fontLabelTrasitDur
          );
          setTimeout(
            () => (this.expandFontSlider += "opacity: 0;"),
            delay + fontLabelTrasitDur
          );
        } else {
          this.expandFontSlider = "width: 2vw; opacity: 1;";
          setTimeout(() => (this.expandFontSlider += "width: 72.5vw;"), delay);
        }
        resolvePromise.then(() => {
          if (!this.sliderExpanded) this.fontLabel = "opacity: 1;";
          else this.expandFontSlider = "display: none;";
          this.sliderExpanded = !this.sliderExpanded;
          this.fontSliderCooldown = false;
        });
      }
    },
    scoreAlgo() {
      let score = 0;
      const minStayLength = 5;

      if (this.timeSpent >= minStayLength) {
        const pageLength = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
        const readThruMultiplier = Math.max(...this.pageSnapshots) / pageLength;
        score = this.timeSpent * readThruMultiplier;
      }
      return Math.round(score);
    },
    updateScore() {
      this.$parent.toggleContentView();
    },
  },
};
</script>

<style scoped>
/* TOP BUTTONS / UTILITY BUTTONS */
.font-label {
  transition: 200ms ease-in-out;
  font-size: 16pt;
  margin: 0px;
  margin-bottom: 0.35vh;
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
  font-family: Georgia, "Times New Roman", Times, serif;
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
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black; /* for some versions of ios */
}
.headline {
  font-size: 20pt;
  margin: 15px;
  margin-left: 0px;
  line-height: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.article {
  font-family: "Times New Roman", Times, serif;
  max-width: 100%;
  white-space: pre-wrap;
  padding: 2%;
}

.author-photo {
  max-width: 100px; 
  border-radius: 10px; 
}

/* PARENT STYLING */
.content {
  padding: 1.5vw;
}
</style>