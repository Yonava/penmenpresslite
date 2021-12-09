import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
    // Get Post
    static retrieve = (async () => {
        const res = await axios.get(url);
        const data = res.data;
            return data.map(post => ({
                    ...post
                    }));
            
    })
    // Create Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default PostService;