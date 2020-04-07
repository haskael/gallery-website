<template>
    <div class="user-center">
        <div>
            <h1>Hello, {{ userid }}.</h1>
            <h2>You can change your profile freely</h2>
            <el-input v-model="newpwd" placeholder="New Password" show-password class="input"></el-input>
            <el-input v-model="confirmedpwd" placeholder="Confirm Password" class="input"></el-input>
            <el-input v-model="email" placeholder="New E-mail" class="input"></el-input>
            <el-button v-on:click="change" id="button">Change My Profile</el-button>
        </div>
    </div>
</template>

<script>

export default {
    name: "UserCenter",
    data() {
        return {
            userid: this.$store.state.userid,
            newpwd: '',
            confirmpwd: '',
            email: '',
        }
    },
    methods: {
        change() {
            if( (this.newpwd=='') && (this.confirmpwd=='') && (this.email=='')) {
                alert("At least type something.")
            }
            else if(this.newpwd!=this.confirmpwd){
                alert("New Password and confirmed password are different.")
            }
            else{
                var changePwd = false;
                var changeE = false;
                if( (this.newpwd!='') && (this.confirmpwd!='') ){
                    changePwd = true;
                }
                if( this.email!='') {
                    changeE = true;
                }
                var data = {
                    userid: this.userid,
                    newpwd: this.newpwd,
                    confirmedpwd: this.confirmpwd,
                    email: this.email,
                    changePwd,
                    changeE,
                };
                console.log(data);
                this.axios.post("http://localhost:7001/api/user/changeInfo", data)
                    .then(response=>{
                        if(response.data.code==1)
                        alert("Success!")
                        else alert("Fail!")
                    })
                    .catch(error => {console.log(error);});
            }
        }
    }
}
</script>

<style scoped>

.user-center{
    width: 300px;
    margin: 0 auto;
}

.input{
    margin-top: 10px;
    width: 200px;
}

#button{
    margin-top:10px;
}
</style>