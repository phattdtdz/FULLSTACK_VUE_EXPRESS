import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(IconsPlugin)
<template>
  <div class="container">

    <div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h3>Insert</h3>
    </div>
    <div class="form" style="display: grid;">
        <label for ="name"> Name</label>
        <input type="text" />
        <label for ="num"> Phone Number</label>
        <input type="text"/>
        <input type="submit" value="submit"/>
    </div>
  </div>
</div>


    <h1>My Board</h1>
    <div>
      <input type="text" v-model="name" />
    
    <button type="submit" value="submit" v-on:click="insertpost"> Insert now</button>
      <button id= "insert" type="submit" value="submit"> Insert</button>
    </div>
    <hr/>
    <p class="error" v-if="error">{{error}}</p>
    <div >
      <div class="post card"
        v-for="(post, index) in post"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:click="delpost(post._id)">

   <input type="checkbox" id="myCheck" onclick="myFunction()">
<label id="text" for="myCheck">{{post.name}}</label> 
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

      
  myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.textDecoration = "line-through"
    } else {
      text.style.textDecoration = "none"
    }
  },
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


body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #d1d3d1;
  color: white;
}

.modal-body {padding: 2px 16px;}




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
.card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    width: 200px;
    height: 20px;
    margin: 12px;
    transition: .15s all ease-in-out;
  }
.card:hover {
   transform: scale(1.2);
}



</style>
