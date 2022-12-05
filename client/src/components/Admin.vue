<template>
  <div class="form-container">
    <button 
      @click="$emit('close-admin-panel')" 
      style="position: fixed; top: 0; left: 0"
    >esc</button>
    <h1>
      Admin Panel
    </h1>
    <h2>
      Articles
    </h2>
    <div class="cat-container">
      <h3>
        Add Article:
      </h3>
      <input 
        v-model="newArticle.title" 
        type="text" 
        placeholder="title"
      />
      <input 
        v-model="newArticle.photo" 
        type="text" 
        placeholder="image"
      />
      <input 
        v-model="newArticle.category" 
        type="text" 
        placeholder="category"
      />
      <textarea 
        v-model="newArticle.content"
        placeholder="content"
      ></textarea>
      <div style="margin: 10px">
        Link to a Released Issue:
        <select v-model="newArticle.issueId">
          <option 
            v-for="issue in issues" 
            :value="issue.id"
            :key="issue.id"
          >
            {{ issue.releaseMonth }}/{{ issue.releaseDay }}/{{ issue.releaseYear }}
          </option>
        </select>
      </div>
      <input 
        v-model="newArticle.releaseDay"
        type="number"
        placeholder="release day"
      >
      <input 
        v-model="newArticle.releaseMonth"
        type="number"
        placeholder="release month"
      >
      <input 
        v-model="newArticle.releaseYear"
        type="number"
        placeholder="release year"
      >
      <button @click="addArticle">add</button>        
      <h3>
        Delete Article:
      </h3>
      <div>
        <div 
          v-for="article in articles"
          :key="article.id"
        >
          <span>{{ article.title }}</span>
          <button 
            @click="deleteArticle(article.id)"
            style="margin-left: 10px"
          >x</button>
        </div>
      </div>
      <h3>
        Edit Article:
      </h3>
      <div>
        <div 
          v-for="article in articles"
          :key="article.id"
        >
          <span>{{ article.title }}</span>
          <button 
            @click="editArticle(article)"
            style="margin-left: 10px"
          >edit</button>
        </div>
      </div>
      <div v-if="Object.keys(selectedArticle).length">
        <h3>
          Editing: {{ selectedArticle.title }}
        </h3>
        <span>
          Add Authors:
          <button @click="addAuthorToArticle">+</button>
        </span>
        <div 
          v-for="(author, index) in articleAuthors"
          :key="author.id"
        >
          <select v-model="articleAuthors[index]">
            <option 
              v-for="authored in authors"
              :value="authored.id"
              :key="authored.id"
            >
              {{ authored.firstName }} {{ authored.lastName }}
            </option>
          </select>
          <button @click="removeArticleAuthor(index)">x</button>
        </div>
        <input 
          v-model="selectedArticle.title" 
          type="text" 
          placeholder="title"
        />
        <input 
          v-model="selectedArticle.photo" 
          type="text" 
          placeholder="image"
        />
        <input 
          v-model="selectedArticle.category" 
          type="text" 
          placeholder="category"
        />
        <input 
          v-model="selectedArticle.score" 
          type="number"
          placeholder="score"
        />
        <textarea 
          v-model="selectedArticle.content"
          placeholder="content"
        ></textarea>
        <div style="margin: 10px">
          Link to a Released Issue:
          <select v-model="selectedArticle.issueId">
            <option 
              v-for="issue in issues" 
              :value="issue.id"
              :key="issue.id"
            >
              {{ issue.releaseMonth }}/{{ issue.releaseDay }}/{{ issue.releaseYear }}
            </option>
          </select>
        </div>
        <input 
          v-model="selectedArticle.releaseDay"
          type="number"
          placeholder="release day"
        >
        <input 
          v-model="selectedArticle.releaseMonth"
          type="number"
          placeholder="release month"
        >
        <input 
          v-model="selectedArticle.releaseYear"
          type="number"
          placeholder="release year"
        >
        <button @click="saveArticle">save</button>
      </div>
    </div>
    <h2>
      Authors
    </h2>
    <div class="cat-container">
      <h3>
        Add Author:
      </h3>
      <input 
        v-model="newAuthor.firstName" 
        placeholder="first name"
        type="text"
      >
      <input 
        v-model="newAuthor.middleName" 
        placeholder="middle name"
        type="text"
      >
      <input 
        v-model="newAuthor.lastName" 
        placeholder="last name"
        type="text"
      >
      <textarea 
        v-model="newAuthor.bio" 
        placeholder="bio"
      ></textarea>
      <input 
        v-model="newAuthor.photo" 
        placeholder="image url"
        type="text"
      >
      <input 
        v-model="newAuthor.joinDay" 
        placeholder="join day"
        type="number"
      >
      <input 
        v-model="newAuthor.joinMonth" 
        placeholder="join month"
        type="number"
      >
      <input 
        v-model="newAuthor.joinYear" 
        placeholder="join year"
        type="number"
      >
      <button @click="addAuthor">
        add
      </button>
      <h3>
        Delete Author:
      </h3>
      <div>
        <div 
          v-for="author in authors"
          :key="author.id"
        >
          <span>{{ author.firstName }} {{ author.lastName }}</span>
          <button 
            @click="deleteAuthor(author.id)"
            style="margin-left: 10px"
          >x</button>
        </div>
      </div>
      <h3>
        Edit Author:
      </h3>
      <div>
        <div 
          v-for="author in authors"
          :key="author.id"
        >
          <span>{{ author.firstName }} {{ author.lastName }}</span>
          <button 
            @click="editAuthor(author)"
            style="margin-left: 10px"
          >edit</button>
        </div>
        <div v-if="Object.keys(selectedAuthor).length">
          <input 
            v-model="selectedAuthor.firstName" 
            placeholder="first name"
            type="text"
          >
          <input 
            v-model="selectedAuthor.middleName" 
            placeholder="middle name"
            type="text"
          >
          <input 
            v-model="selectedAuthor.lastName" 
            placeholder="last name"
            type="text"
          >
          <textarea 
            v-model="selectedAuthor.bio" 
            placeholder="bio"
          ></textarea>
          <input 
            v-model="selectedAuthor.photo" 
            placeholder="image url"
            type="text"
          >
          <input 
            v-model="selectedAuthor.joinDay" 
            placeholder="join day"
            type="number"
          >
          <input 
            v-model="selectedAuthor.joinMonth" 
            placeholder="join month"
            type="number"
          >
          <input 
            v-model="selectedAuthor.joinYear" 
            placeholder="join year"
            type="number"
          >
          <button @click="saveAuthor">
            save
          </button>
        </div>
      </div>
    </div>
    <h2>
      Issues
    </h2>
    <div class="cat-container">
      <h3>
        Add Issue:
      </h3>
      <input 
        v-model="newIssue.photo" 
        placeholder="photo"
        type="text"
      >
      <input 
        v-model="newIssue.releaseDay" 
        placeholder="release day"
        type="number"
      >
      <input 
        v-model="newIssue.releaseMonth"
        placeholder="release month"
        type="number"
      >
      <input 
        v-model="newIssue.releaseYear" 
        placeholder="release year"
        type="number"
      >
      <button @click="addIssue">
        add
      </button>
      <h3>
        Delete Issue:
      </h3>
      <div>
        <div 
          v-for="issue in issues"
          :key="issue.id"
        >
          <span>{{ issue.releaseMonth }}/{{ issue.releaseDay }}/{{ issue.releaseYear }}</span>
          <button 
            @click="deleteIssue(issue.id)"
            style="margin-left: 10px"
          >x</button>
        </div>
      </div>
      <h3>
        Edit Issue:
      </h3>
      <div>
        <div 
          v-for="issue in issues"
          :key="issue.id"
        >
          <span>{{ issue.releaseMonth }}/{{ issue.releaseDay }}/{{ issue.releaseYear }}</span>
          <button 
            @click="editIssue(issue)"
            style="margin-left: 10px"
          >edit</button>
        </div>
        <div v-if="Object.keys(selectedIssue).length">
          <input 
            v-model="selectedIssue.photo" 
            placeholder="photo"
            type="text"
          >
          <input 
            v-model="selectedIssue.releaseDay" 
            placeholder="release day"
            type="number"
          >
          <input 
            v-model="selectedIssue.releaseMonth"
            placeholder="release month"
            type="number"
          >
          <input 
            v-model="selectedIssue.releaseYear" 
            placeholder="release year"
            type="number"
          >
          <button @click="saveIssue">save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return{
      // AUTHORS
      newAuthor: {
        firstName: '',
        middleName: '',
        lastName: '',
        bio: '',
        photo: '',
        joinDay: '',
        joinMonth: '',
        joinYear: '',
        title: ''
      },
      authors: [],
      selectedAuthor: {},

      // ISSUES
      newIssue: {
        photo: '',
        releaseDay: '',
        releaseMonth: '',
        releaseYear: ''
      },
      issues: [],
      selectedIssue: {},

      // ARTICLES
      newArticle: {
        title: '',
        content: '',
        category: '',
        photo: '',
        score: 0,
        issueId: 0,
        releaseDay: '',
        releaseMonth: '',
        releaseYear: '',
      },
      articles: [],
      selectedArticle: {},
      
      // ARTICLE AUTHOR
      articleAuthors: [],
    }
  },
  mounted() {
    axios.get('/api/articles')
      .then((response) => {
        this.articles = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('/api/issues')
      .then((response) => {
        this.issues = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get('/api/authors')
      .then((response) => {
        this.authors = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    addAuthor() {
      this.newAuthor.joinDay = parseInt(this.newAuthor.joinDay);
      this.newAuthor.joinMonth = parseInt(this.newAuthor.joinMonth);
      this.newAuthor.joinYear = parseInt(this.newAuthor.joinYear);
      axios.post('/api/authors', this.newAuthor)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteAuthor(authorId) {
      axios.delete(`/api/authors/${authorId}`)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editAuthor(author) {
      this.selectedAuthor = author;
    },
    saveAuthor() {
      axios.put(`/api/authors/${this.selectedAuthor.id}`, this.selectedAuthor)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addIssue() {
      axios.post('/api/issues', this.newIssue)
        .then(() => {
          location.reload()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteIssue(issueId) {
      axios.delete(`/api/issues/${issueId}`)
        .then(() => {
          location.reload()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editIssue(issue) {
      this.selectedIssue = issue;
    },
    saveIssue() {
      axios.put(`/api/issues/${this.selectedIssue.id}`, this.selectedIssue)
        .then(() => {
          location.reload()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addArticle() {
      this.newArticle.releaseDay = parseInt(this.newArticle.releaseDay);
      this.newArticle.releaseMonth = parseInt(this.newArticle.releaseMonth);
      this.newArticle.releaseYear = parseInt(this.newArticle.releaseYear);
      axios.post('/api/articles', this.newArticle)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteArticle(articleId) {
      axios.delete(`/api/articles/${articleId}`)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editArticle(article) {
      this.selectedArticle = article;
    },
    async saveArticle() {
      await axios.delete(`/api/articleAuthor/${this.selectedArticle.id}`)
        .catch((error) => {
          return console.log(error);
        });
      this.articleAuthors.forEach(async (articleAuthor) => {
        await axios.post(`/api/articleAuthor/${this.selectedArticle.id}/${articleAuthor}`)
          .catch((error) => {
            console.log(error);
          });
      });
      axios.put(`/api/articles/${this.selectedArticle.id}`, this.selectedArticle)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addAuthorToArticle() {
      this.articleAuthors.push(0);
    },
    removeArticleAuthor(index) {
      this.articleAuthors.splice(index, 1);
    },
  },
  watch: {
    selectedArticle() {
      axios.get(`/api/articleAuthor/${this.selectedArticle.id}`)
        .then((response) => {
          this.articleAuthors = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin: 15px;
    margin-bottom: 200px;
    position: relative;
  }
  .cat-container {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 80%;
  }
  input {
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 7px;
    margin-top: 7px;
    padding: 5px;
  }
</style>