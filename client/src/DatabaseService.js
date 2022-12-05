import axios from 'axios';

const url = 'api/articles/';

class ArticleService {

  // Get Articles from Database
  static async retrieve() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  // Get Singe Article from Database
  static async retrieveOne(id) {
    try {
      const res = await axios.get(`${url}${id}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  // Upload Article to Database
  static insertArticle(article) {
    return axios.post(url, { article });
  }

  // Update Article Trending Score
  static updateScore(id, score) {
    return axios.put(`${url}${id}`, { score: score })
  }

  // Delete Article from Database
  static deleteArticle(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default ArticleService;