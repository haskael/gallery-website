<template>
    <div class="alert">
        <transition name="fade">
            <div v-if="modelFlag==1" class="alert-box">
                <h4>Hello! {{modelTitle}}</h4>
                <button class="yes-button" @click="yes">Yes</button>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modelFlag: 0,
            modelTitle: 'User'
        }
    },
    methods: {
        yes() {
            this.modelFlag = 0
        },
        show(options) {
            this.modelTitle = options.modelTitle || this.modelTitle;
            this.modelFlag = 1;
        }
    }
}
</script>

<style scoped>
#alert{
    width: 100px;
    height: 100px;
}
</style>