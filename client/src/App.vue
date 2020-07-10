<template>
  <div id="app">
        <PostComponent></PostComponent>
  </div>
</template>
<script>
import PostComponent from './components/PostComponent.vue'
console.log(PostComponent.data)

export default {
  name: 'Apps',
  components: {
    PostComponent
  }
  
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
