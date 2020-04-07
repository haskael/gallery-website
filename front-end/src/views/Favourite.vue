<template>
    <div class='favourite'>
    <div v-if="isLogIn">
		<el-row>
		<el-col :span="6" v-for="item in cInfo" :key="item.collectionName">
			<img src="../assets/logo.png" @click="seeMore(item)">
			<div style="padding: 14px;">
			<span>Name: {{item.collectionName}}</span>
			<p>Description: {{item.description}}</p>
			</div>
		</el-col>
	</el-row>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Favourite',
  data() {
    return {
      cInfo: [],
      userid: this.$store.state.userid
    }
  },
  computed: {
		isLogIn() {
			return this.$store.state.isLogIn
    }
  },
  methods: {
    getLikes() {
      if (this.isLogIn==true) {
        console.log(this.userid);
        var id = this.userid;
        this.axios.post("http://localhost:7001/api/collections/getLikes", {userid: id} )
          .then(response => {
            this.cInfo = response.data;
          })
      }
    },
		seeMore(item) {
            this.$router.push({ path: `/collection/${item.collectionName}` });
        }
  },
  created() {
    this.getLikes();
  }
}
</script>