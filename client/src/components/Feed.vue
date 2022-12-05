<template>
  <div>
    <!-- main feed banner -->
    <header class="feed-header">
      <h1
        style="margin-left: 3%; opacity: 1; margin-top: 0vh; margin-bottom: 0px"
      >
        NEWS FEED
      </h1>
    </header>

    <img
      @click="top()"
      :style="topStyle"
      class="top-button"
      src="../assets/top-button.svg"
      alt="scroll-up"
    />

    <!-- article display -->
    <div
      style="margin-top: 2vh"
      class="parent"
      v-for="article in articles"
      :key="article.id"
    >
      <div class="box-1" @click="$parent.articleRequested(article)">
        <img class="photo" :src="article.image" :alt="article.imageCaption" />
        <div class="box-2">
          <p class="author">
            {{ article.date }} - {{ article.author.substring(1) }}
          </p>
          <p class="cat">{{ article.category.substring(1) }}</p>
          <h2 class="title">{{ article.title.substring(1) }}</h2>
        </div>
        <div class="box-3">
          <img
            v-if="article.saved"
            @click="$parent.bookmark(article, false)"
            class="book"
            src="../assets/remove-bookmark.svg"
            alt="unsave"
          />
          <img
            v-else-if="!articles.saved"
            @click="$parent.bookmark(article, true)"
            class="book"
            src="../assets/add-bookmark.svg"
            alt="save"
          />
        </div>
      </div>
    </div>

    <!-- disclaimers -->
    <center style="font-size: 8pt">
      <p style="margin-bottom: 0vh">
        visit
        <a href="https://penmenpress.com/">https://penmenpress.com/</a> for more
        snhu reporting
      </p>
      <p style="margin-bottom: 14vh; margin-top: 0.5vh">
        © penmenpress 2021, all rights reserved
      </p>
    </center>
  </div>
</template>

<script>
export default {
  props: ["articles"],
  data: () => {
    return {
      topStyle: "display: none;",
    };
  },
  mounted() {
    // set page position
    window.scrollTo(0, localStorage.pagePosFeed);
  },
  created() {
    addEventListener("scroll", this.captureY);
  },
  destroyed() {
    removeEventListener("scroll", this.captureY);
  },
  methods: {
    captureY() {
      localStorage.pagePosFeed = window.scrollY;
      window.scrollY > 500
        ? (this.topStyle = "")
        : (this.topStyle = "display: none;");
    },
    top() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.top-button {
  position: fixed;
  top: 85vh;
  left: 47%;
  background-color: black;
  border-radius: 50%;
  width: 25px;
}
.refresh-icon {
  height: 5%;
  width: 5%;
  border: 1px solid black;
  padding: 2%;
  border-radius: 10px;
}
</style>