<template>
  <div class="home-pages">
    <button @click="goTest">开始</button>
    <!-- <button>
      <router-link to="./test">开始</router-link>
    </button> -->
  </div>
</template>
<script>
  import Vue from 'vue'

  export default{
    name:'home',
    data(){
      return {
        name:'home'
      }
    },
    methods:{
      goTest(){
        this.$router.push(`test`)
        //this.$router.push({path:'test',params:{id:123}})
      }
    }
  }
</script>
<style lang="less" scoped>
  .home-pages{
    height:100%;
    width:100%;
    background:olivedrab;
    background-size:cover;
    display:flex;
    align-items: center;
    justify-content: center;
    button{
      height:200px;
      width: 200px;
      border-radius: 50%;
      background:#fff;
      color:red;
      font-size:30px;
    }
  }
</style>
