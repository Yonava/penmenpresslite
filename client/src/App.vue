<template>
  <div>

    <!-- home feed -->
    <div v-if="!contentView && page === 'home'">
      <Feed :articles="articles" />
    </div>

    <!-- content view / reader view -->
    <div v-else-if="contentView">
      <Content :article="selectedArticle" :articles="articles" />
    </div>

    <!-- discover menu -->
    <div v-else-if="page === 'discover'">
      <Discover :articles="articles" />
    </div>

    <!-- bookmarked / read later menu -->
    <div v-else-if="page === 'bookmarked'">
      <Bookmarked :articles="articles" />
    </div>

    <!-- trending menu -->
    <div v-else-if="page === 'trending'">
      <Trending :articles="articles" />
    </div>

    <!-- navigation panel -->
    <footer v-if="!contentView" class="bottom">
      <div class="bottom-container">
        <div
          @click="navigate('home')"
          :style="page === 'home' ? 'filter: invert(0%)' : 'filter: invert(60%)'"
          class="nav-container"
        >
          <img class="icon" src="./assets/feedicon.svg" alt="home" />
        </div>
        <div
          @click="navigate('discover')"
          :style="page === 'discover' ? 'filter: invert(0%)' : 'filter: invert(60%)'"
          class="nav-container"
        >
          <img class="icon" src="./assets/discovericon.svg" alt="discovery" />
        </div>
        <div
          @click="navigate('trending')"
          :style="page === 'trending' ? 'filter: invert(0%)' : 'filter: invert(60%)'"
          class="nav-container"
        >
          <img class="icon" src="./assets/trendingicon.svg" alt="trending" />
        </div>
        <div
          @click="navigate('bookmarked')"
          :style="page === 'bookmarked' ? 'filter: invert(0%)' : 'filter: invert(60%)'"
          class="nav-container"
        >
          <img
            v-if="page != 'bookmarked'"
            class="icon"
            src="./assets/savedicon.svg"
            alt="saved"
          />
          <img
            class="icon"
            :style="styleSelected"
            src="./assets/savedicon-filled.svg"
            alt="saved-selected"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import ArticleObj from "./classes/Articles.js";
import Content from "./components/Content.vue";
import Discover from "./components/Discover.vue";
import Bookmarked from "./components/Bookmarked.vue";
import Feed from "./components/Feed.vue";
import Trending from "./components/Trending.vue";

import axios from "axios";

export default {
  name: "App",
  components: {
    Content,
    Discover,
    Bookmarked,
    Feed,
    Trending
  },
  data () {
    return {
      bookmarked: [],
      articleData: [],
      styleSelected: "display: none",
      contentView: false,
      selectedArticle: {},
      page: "home",
      requestHandler: true,
      articles: []
    };
  },
  mounted() {
    this.loadAssets();
  },
  methods: {
    bookmark(article, saveState) {
      this.confirmRequest(false);
      article.saved = saveState;
      this.bookmarked = [];
      for (let i = 0; i < this.articles.length; i++) {
        if (this.articles[i].saved)
          this.bookmarked.push(this.articles[i].title);
      }
      localStorage.bookmarked = this.bookmarked;
    },
    articleRequested(selectedArticle) {
      this.selectedArticle = selectedArticle;
      setTimeout(this.confirmRequest(true), 3);
    },
    confirmRequest(request) {
      if (!request) this.requestHandler = false;
      if (this.requestHandler) this.toggleContentView();
      request ? (this.requestHandler = true) : (this.requestHandler = false);
    },
    toggleContentView() {
      window.scrollTo(0, 0);
      this.contentView = !this.contentView;
    },
    navigate(page) {
      if (page != "trending") {
        this.articles.sort((a, b) => b.dateScore - a.dateScore);
        window.scrollTo(0, 0);
      }

      if (page === "bookmarked") this.styleSelected = "";
      else this.styleSelected = "display: none";

      this.page = page;
    },
    pressFormatDate(day, month, year) {
      const MONTHS_LONG = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
      return `${MONTHS_LONG[month - 1]} ${day}, ${year}`
    },
    async loadAssets() {

      // fetching articles from database
      await axios.get('/api/articles')
        .then(response => {
          this.articleData = response.data;
        })
        .catch(err => console.log(err))


      this.articles = [];

      // init article objects
      for (let i = 0; i < this.articleData.length; i++) {
        let authorIds;
        let author;
        await axios.get(`/api/articleAuthor/${this.articleData[i].id}`)
          .then(response => {
            authorIds = response.data;
          })
          .catch(err => console.log(err));
        await axios.get(`/api/authors/${authorIds[0]}`)
          .then(response => {
            author = `${response.data.firstName} ${response.data.lastName}`;
          })
          .catch(err => console.log(err));

        let loadArticles = new ArticleObj(
          this.articleData[i].title,
          this.articleData[i].photo,
          this.articleData[i].category,
          author,
          this.pressFormatDate(this.articleData[i].releaseDay, this.articleData[i].releaseMonth, this.articleData[i].releaseYear),
          this.articleData[i].content,
          this.articleData[i].score,
          this.articleData[i].id
        );
        this.articles.push(loadArticles);
      }

      // sort by article date
      this.articles.sort((a, b) => b.dateScore - a.dateScore);

      // fetch bookmarked articles from storage
      if (localStorage.bookmarked) {
        let parseStorage = localStorage.bookmarked.split(",");
        this.bookmarked = ["Saved Articles Detected"];
        for (let i = 0; i < parseStorage.length; i++) {
          for (let j = 0; j < this.articles.length; j++) {
            if (this.articles[j].title === parseStorage[i])
              this.articles[j].saved = true;
          }
        }
      }
    },
  }
};
</script>

<style>
/* ARTICLE DISPLAY */
.box-1 {
  display: flex;
  flex-direction: row;
  flex: 4;
}
.box-2 {
  flex-direction: column;
  margin: 2vw;
  margin-top: 0px;
  flex: 10;
}
.box-3 {
  display: absolute;
  flex-direction: row;
  flex: 1;
}
.parent {
  width: 94%;
  margin: auto;
  padding: 1vw;
  margin-bottom: 3vh;
}
.photo {
  padding: 2px;
  height: 13vh;
  width: 13vh;
  min-width: 13vh;
  border: 1px black solid;
  object-fit: cover;
  border-radius: 5%;
  margin: 0px;
}
.title {
  font-size: 12pt;
  margin: 0px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.book {
  width: 4vh;
  margin: 0px;
}
.cat {
  margin-top: 0.5vh;
  margin-bottom: 0.5vh;
  background-color: rgb(46, 185, 185);
  color: white;
  font-size: 8pt;
  padding: 0.75vw;
  padding-left: 1vw;
  border-radius: 5px;
}
.author {
  margin: 0px;
  font-size: 6.5pt;
}

/* HEADER DISPLAY */
.feed-header {
  top: 0;
  position: sticky;
  background: linear-gradient(#ffffff, #fffffff5);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-bottom: 0.2vh solid black;
  display: relative;
}

/* NAVIGATION DISPLAY */
.top {
  z-index: 2;
  position: fixed;
}
.icon {
  height: 5vh;
  width: 5.3vh;
  margin-bottom: 0px;
}
.nav-container {
  height: 5vh;
  width: 5vh;
  margin-top: 0.5vh;
  margin-right: 7.5vw;
  margin-left: 7.5vw;
  margin-bottom: 0px;
}
.bottom-container {
  margin-top: 0.5vh;
  width: 90vw;
  justify-content: center;
  display: flex;
  background-color: white;
}
.bottom {
  height: 7.75vh;
  background-color: white;
  position: fixed;
  bottom: 0;
  min-width: 100vw;
  border-top: 1px black solid;
  display: flex;
  justify-content: center;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* GLOBAL DISPLAY */
body {
  -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
  user-select: none; /* disabled ability to highlight text & iconography */
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0px;
}
</style>