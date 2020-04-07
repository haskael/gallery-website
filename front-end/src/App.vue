<template>
  <div id="app">
    <div id="nav">
      <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to="/" class="nav-txt">Explore</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/favourite" class="nav-txt">My Favourite</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/myCollection" class="nav-txt">My Collection</router-link></el-menu-item>
      <el-menu-item index="4"><router-link :to="LogIn ? '/userCenter' : '/user/logIn'" class="nav-txt">User</router-link></el-menu-item>
      </el-menu>
    </div>
    <router-view id='app-view'></router-view>
    <p>Contact Info: redhargen@foxmail.com</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    userid: ''
    }
  },
  computed: {
    LogIn() {
      return this.$store.state.isLogIn
    }
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
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#app-view {
  height: 700px;
  margin-top: 50px;
}

.id {
  position: right;
}

.nav-txt{
  text-decoration: none;
  font-size: 18px;
}

</style>

