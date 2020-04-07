<template>
  <div class="explore">
    <h1>Welcome to aLBUM</h1>
    <h4>Access to miracles and keep your every moment.</h4>
	<el-carousel height="600px">
      <el-carousel-item v-for="item in cInfo" :key="item.collectionName" interval="100">
		<img src="../assets/pic1.jpg" @click="seeMore(item)">
        <h3 class="small" style="padding: 200px;">{{ item.collectionName }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'Explore',
	data() {
		return {
		cInfo: []
		}
	},
	methods: {
		showRandom() {
			this.axios.get("http://localhost:7001/api/collections/showRandom")
				.then(response =>
				{
					this.cInfo = response.data;
				}
			)
		},
		seeMore(item) {
            this.$router.push({ path: `/collection/${item.collectionName}` });
        }
	},
	created() {
		this.showRandom();
	}
}
</script>