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
        <select v-model="newArticle.issue">
          <option 
            v-for="issue in issues" 
            :value="issue"
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
          <select v-model="selectedArticle.issue">
            <option 
              v-for="issue in issues" 
              :value="issue"
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
        <div v-if="selectedAuthor.firstName">
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
        <div v-if="selectedIssue.photo">
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
        title: '',
        id: '1'
      },
      authors: [{
        firstName: 'ricm',
        middleName: 'Yona',
        lastName: 'os',
        bio: 'hi',
        photo: 'foimvfinp',
        joinDay: '4',
        joinMonth: '34',
        joinYear: '242',
        title: '0',
        id: '2'
      },
      {
        firstName: 'A',
        middleName: 'ko',
        lastName: 'pi',
        bio: 'mk;k',
        photo: 'kml;l',
        joinDay: '1',
        joinMonth: '4',
        joinYear: '5',
        title: '2',
      }],
      selectedAuthor: {},

      // ISSUES
      newIssue: {
        photo: '',
        releaseDay: '',
        releaseMonth: '',
        releaseYear: ''
      },
      issues: [
        {
          photo: 'foimvfinp',
          releaseDay: '4',
          releaseMonth: '34',
          releaseYear: '242',
          id: '1'
        },
        {
          photo: 'kml;l',
          releaseDay: '1',
          releaseMonth: '4',
          releaseYear: '5',
          id: '2'
        }
      ],
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
      articles: [
        {
          title: 'foimvfinp',
          content: '4',
          category: '34',
          photo: '242',
          score: '1',
          issueId: '1',
          releaseDay: '4',
          releaseMonth: '34',
          releaseYear: '242',
          id: '1'
        },
        {
          title: 'kml;l',
          content: '1',
          category: '4',
          photo: '5',
          score: '2',
          issueId: '2',
          releaseDay: '1',
          releaseMonth: '4',
          releaseYear: '5',
          id: '2'
        }
      ],
      selectedArticle: {},
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
  },
  methods: {
    addAuthor() {
      this.authors.push(this.newAuthor);
      this.newAuthor = {
        firstName: '',
        middleName: '',
        lastName: '',
        score: 0,
        bio: '',
        photo: '',
        joinDay: '',
        joinMonth: '',
        joinYear: '',
        title: '',
      }
    },
    deleteAuthor(authorId) {
      this.authors = this.authors.filter(author => author.id !== authorId);
    },
    editAuthor(author) {
      this.selectedAuthor = author;
    },
    saveAuthor() {
      
    },
    addIssue() {
      this.issues.push(this.newIssue);
      this.newIssue = {
        photo: '',
        releaseDay: '',
        releaseMonth: '',
        releaseYear: ''
      }
    },
    deleteIssue(issueId) {
      this.issues = this.issues.filter(issue => issue.id !== issueId);
    },
    editIssue(issue) {
      this.selectedIssue = issue;
    },
    saveIssue() {
      console.log('save issue');
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
      this.articles = this.articles.filter(article => article.id !== articleId);
    },
    editArticle(article) {
      this.selectedArticle = article;
    },
    saveArticle() {
      axios.put(`/api/articles/${this.selectedArticle.id}`, this.selectedArticle)
        .then(() => {
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
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