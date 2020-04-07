<template>
  <div class="my-collection">
	<el-button v-if="isLogIn" id="create-button" icon="el-icon-plus" @click="tableVis = true">Create</el-button>
	<el-row>
		<el-col :span="6" v-for="item in userCollections" :key="item.collectionName">
			<img src="../assets/logo.png" @click="seeMore(item)">
			<div style="padding: 14px;">
			<span>Name: {{item.collectionName}}</span>
			<p>Description: {{item.description}}</p>
			</div>
		</el-col>
	</el-row>
	<el-dialog title="Create New Collection" :visible.sync="tableVis">
		<el-input v-model="newName" placeholder="Collection Name" class="input"></el-input>
		<el-input v-model="newDescription" placeholder="Collection Description" class="input"></el-input>
		<el-button @click="dialogFormVisible = false">取 消</el-button><el-button type="primary" @click="createCollections">确 定</el-button>
	</el-dialog>
	</div>
</template>

<script>

export default {
	name: "MyCollection",
	data() {
		return {
			toUpload: true,
			newName: '',
			newDescription: '',
			tableVis: false
		}
	},
	computed: {
		isLogIn() {
			return this.$store.state.isLogIn
		},
		userid() {
			return this.$store.state.userid
		},
		userCollections() {
			return this.$store.state.myCollections
		}
	},
	components: {
		
	},
	methods: {
		createCollections() {
			var data = {
				collectionName: this.newName,
				description: this.neDescription,
				userid: this.userid
			}
			this.axios.post("http://localhost:7001/api/collections/createCollections", data)
				.then(
					response => {
						if (response.data.code == 1)
							alert("Success! Your collection is " + this.newName + ".");
						console.log(response.data);
					}
				)
				.catch(error => {
					console.log(error);}
				);
			this.tableVis = false;
			this.getCollections();
		},
		
		show() {
			var file = document.getElementById("upload_file").files[0];
			console.log(file);
		},
		upload_file: function () {
			var file = document.getElementById("upload_file").files[0];
			var formData = new FormData();
			formData.append(file, file.name);
			let config = { headers:{'Content-Type':'multipart/form-data'} };
			this.axios.post("http://localhost:7001/api/collections/createCollections", formData, config)
				.then( response => {
					config.log(response.data);
				})
				.catch(error => {
					console.log(error);}
				);
		},
		
		getCollections: function() {
			this.axios.get("http://localhost:7001/api/user/getCollections", { params: { userid: this.userid } } )
			.then( response => {
				let info;
				console.log(response.data);
				info = response.data;
				this.$store.commit("getMyCollections", info);
			})
			.catch(error => {
					console.log(error)
			});
		},

		seeMore(item) {
            this.$router.push({ path: `/collection/${item.collectionName}` });
        }
			
	},
	mounted() {
		console.log("load:" + this.$store.state.collectionLoad);
		if (!this.$store.state.collectionLoad) {
			this.getCollections();
			this.$store.state.collectionLoad = true;
		}
	}
}
</script>

<style scoped>
.first-title{
  color: black ;
}

#table{
    position: absolute;
    left: 40%;
}

#create-button{
	position: absolute;
	left: 90%;
	bottom: 83%
}
</style>