<template>
  <div class="container">
    <h1>Lastest Post</h1>
    <div>
      <input type="text" v-model="name" />
      <button type="submit" value="submit" v-on:click="insertpost">Submit</button>
    </div>
    <hr />
    <p class="error" v-if="error">{{error}}</p>
    <div class="posts-container">
      <div
        class="post"
        v-for="(post, index) in post"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:click="delpost(post._id)"
      >
        {{`${post.createdAt.getDate()}/${post.createdAt.getMonth()} `}}
        <p class="text">{{post.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  name: "PostComponent",
  data() {
    return {
      name,
      post: [],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.post = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async insertpost() {
      await PostService.insertPost(this.name);
      this.post = await PostService.getPosts();
    },
    async delpost(id) {
      await PostService.deletePost(id);
      this.post = await PostService.getPosts();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only --> 
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
