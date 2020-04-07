<template>
    <div class="signUp">
        <h1>账号注册</h1>
        <p>Only support English characters. Name&lt;12, Pwd and Email&lt;20. </p>
        <el-input v-model="userid" placeholder="User Name"></el-input>
        <el-input v-model="pwd" placeholder="Password" show-password></el-input>
        <el-input v-model="email" placeholder="E-mail"></el-input>
        <br>
        <el-button v-on:click="signUp">Sign Up</el-button>
    </div>
</template>

<script>
export default {
    name: 'SignUp',
    data() {
        return {
            userid: '',
            pwd: '',
            email: ''
        }
    },
    
    methods: {
        signUp() {
            var url = 'http://localhost:7001/api/user/signUp';
            var data = {
                userid: this.userid,
                pwd: this.pwd,
                email: this.email
            };
            if ( (data.userid == '') || (data.pwd == '') || (data.email == '') ) {
                alert("You have not complete your info.");
            }
            else if ( (data.userid.length > 12) || (data.pwd.length > 20) || (data.email.length > 20) ) {
                alert("You have information exceeds maximum length.");
            }
            else {
                this.axios.post(url, data)
                    .then(response => {
                        console.log(response)
                        if (response.data.code == 1) {
                            this.$store.commit("logInStatusChange",true);
                            this.$store.commit("setId",data.userid);
                            console.log("Success!");
                            alert("Signing Up Success!")
                            this.$router.push("/");
                        } 
                        else if (response.data.code == -1) {
                            alert("Your name has already exists. Please choose another one!");
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
.signUp{
    width: 600px;
    height: 500px;
}
h1{
    font-family: "Hiragino Sans GB";
}
p{
    font-family: "Hiragino Sans GB";
}
</style>