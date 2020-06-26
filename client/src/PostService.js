import axios from 'axios';
const url = 'http://localhost:5000/api/posts/a'

class PostService{

//getPosts
static getPosts() {  
    alert("go on serivce")
    return new Promise ((resolve,reject) => {
        axios.get(url).then((res) => {
            console.log(res);
            const data = res.data;
            resolve(
                data.map(post => ({
                    ...post,
                    createdAt: new Date(post.createdAt)
                }))
            );
        })
        .catch((err)=> {
            reject(err);
        })
        
    });
}


static insertPost(text){
        return axios.post(url, {text})
    }

    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }

}
export default PostService;
