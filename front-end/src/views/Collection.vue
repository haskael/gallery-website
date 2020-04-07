<template>
    <div class="Collection">
        <el-button plain @click="back" id="back">Back to my page</el-button>
        <h1>Now you will see {{collectionName}}</h1>
        <el-button round @click="ilike" >like</el-button>
        <el-button round @click="setPrivate">Lock</el-button>
        <el-button round @click="changeInfo">Change</el-button>
        <el-button round @click="deleteCollections">Delete</el-button>
    </div>
</template>

<script>
export default {
    name: "Collection",
    data() {
        return {
            userid: this.$store.state.userid,
            owner: '',
            collectionName: this.$route.params.collectionName
        }
    },
    methods: {
        back() {
            this.$router.go(-1);
        },
        ilike() {
            var data = {
                userid: this.userid,
                collectionName: this.collectionName,
            };
            this.axios.post("http://localhost:7001/api/user/likeCollections",data)
                .then(response =>
                    {
                        console.log(response);
                        if(response.data.code == 1) {
                            alert("Success!");
                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                });
        },
        setPrivate() {
            console.log("setPrivate");
            if(this.userid != this.owner){
                alert("Sorry! You don't have right to set this collection private!"); 
            }
            else {
                var data = {
                    userid: this.userid,
                    collectionName: this.collectionName
                };
                this.axios.post("http://localhost:7001/api/collections/setPrivate",data)
                    .then(response =>
                        {
                            console.log(response);
                            if(response.data.code == 1) {
                                alert("Success!");
                            }
                        }
                    )
                    .catch(error => {
                        console.log(error)
                    });
            }
        },
        changeInfo() {
            if(this.userid != this.owner){
                alert("Sorry! You don't have right to change this collection!"); 
            }
            else {
                var data = {
                    userid: this.userid,
                    collectionName: this.collectionName,
                    newName: '',
                    description: ''
                };
                this.axios.post("http://localhost:7001/api/collections/changeInfo",data)
                .then(response =>
                    {
                        console.log(response);
                        if(response.data.code == 1) {
                            alert("Success!");
                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                });
            }
        },
        deleteCollections() { 
            if(this.userid != this.owner){
                alert("Sorry! You don't have right to delete this collection!"); 
            }
            else {
                var r = confirm("This action cannot be undone. Sure you wanna do this?");
                if (r==true) {
                    var data = {
                        userid: this.userid,
                        collectionName: this.collectionName,
                    };
                    this.axios.post("http://localhost:7001/api/collections/delete",data)
                    .then(response =>
                        {
                            console.log(response);
                            if(response.data.code == 1) {
                                alert("Success!");
                                this.$router.push("/myCollection");
                            }
                        }
                    )
                    .catch(error => {
                        console.log(error)
                    });
                }
            }
        },
        getInfo() {
            var data = {
                    userid: this.userid,
                    collectionName: this.collectionName,
                };
                this.axios.post("http://localhost:7001/api/collections/getInfo",data)
                .then(response =>
                    {
                        console.log(response);
                        if(response.data.code == 1) {
                            console.log("get info Success!");
                        }
                        this.owner = response.data[0].userid;
                        this.description = response.data[0].description;
                    }
                )
                .catch(error => {
                    console.log(error)
                });
        }
    },
    created() {
        this.getInfo();
        console.log(this.owner);
    }
}
</script>

<style scoped>
#back{
    position: absolute;
    bottom: 83%;
    right: 89%
}
</style>