<template>
    <div class="login">
        <h1>登陆图库</h1>
        <el-input v-model="userid" placeholder="User Name"></el-input>
        <el-input v-model="pwd" placeholder="Password" show-password></el-input>
        <br>
        <el-button v-on:click="logIn">Log In</el-button>
    </div>
</template>

<script>
export default {
    name: 'LogIn',
    data() {
        return {
        userid: '',
        pwd: '',
        }
    },

    methods: {
        logIn() {
            var url = 'http://localhost:7001/api/user/logIn';
            var data = {
                userid: this.userid,
                pwd: this.pwd
            };
            if ( (data.userid == '') || (data.pwd == '') ) {
                alert("You have not complete your info.");
            }
            else if ( (data.userid.length > 12) || (data.pwd.length > 20) ) {
                alert("Illegal input length.");
            }
            else {
                console.log(data);
                this.axios.post(url, data)
                    .then(response => {
                        console.log(response)
                        if (response.data.code == 1) {
                            this.$store.commit("logInStatusChange",true);
                            console.log(this.$store.state.isLogIn);
                            this.$store.commit("setId",data.userid);
                            console.log("Success!");
                            alert("Loging In Success!")
                            this.$router.push("/");
                        } 
                        else if (response.data.code == -2) {
                            alert("Id or Pwd is not correct.");
                        }
                        else {
                            alert("Unknown failure. Please contact me: redhargen@foxmail.com");
                        }   
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }
        }
            
    }

}
</script>

<style scoped>
button{
    margin: 20px;
}
.login{
    margin: 0;
    padding: 0;
    width: 300px;
    height: 500px;
}
h1{
    font-family: "Hiragino Sans GB";
}
</style>

