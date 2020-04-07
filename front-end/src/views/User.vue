<template>
    <div class='user'>
        <div id='not-log-in'>
            <br>
            <div id="tabs">
            <router-link to='/user/logIn' class="nav-tabs">Log In</router-link> /
            <router-link to='/user/signUp' class="nav-tabs">Sign Up</router-link>
            </div>
            <router-view id="view"></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: "User"
}
</script>

<style scoped>

.class{
    margin-top: 200px;
}

#view{
    margin: 30px auto;
    width: 200px;
    height: 400px;
}

.not-log-in{
    margin-top: 0px;
}

.tabs{
    margin-top: 0px;
}

#nav-tabs{
    font-family: "Hiragino Sans GB";
    text-decoration: none;
}
</style>
