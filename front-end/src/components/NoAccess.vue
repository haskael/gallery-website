<template>
    <div class='no-access'>
        <h2>Sorry, you do not have any right to access this content!</h2>
        <p>To get access, please click the button to log in or sign up.</p>
        <button v-on:click='toLogIn'>Click Me</button>
    </div>
</template>

<script>
export default {
    name: 'NoAccess',
    methods: {
        toLogIn: function() {
            this.$router.push({ path: '/user/logIn' })
        }
    } 
} 
</script>