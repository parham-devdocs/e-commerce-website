<template>
    
<main class="container">
    <div class="sign_in">
        <form @submit.prevent>
            <div class="inputs_btn">
<input type="text" placeholder="enter your email" v-model="userInformation.email" >
<input type="text" placeholder="enter your password" v-model="userInformation.password">
<button @click="signIn">sign in</button>

            </div>
            <h2 class="successfull_login"  v-if="loggedIn">welcom {{ username }}</h2>
<h2 class="unsuccessfull_login" v-if="notLoggedIn">sorry , but you are not logged in</h2>
        </form>
    </div>
</main>
</template>

<script setup>
    import { ref } from "vue";
    import {user} from '../stores/UserInfo.js'
    import axios from "axios";
    const username=ref('')
    const loggedIn=ref(false)
    const notLoggedIn=ref(false)
    const userInfo=user()
    console.log(userInfo.user);
    const userInformation=ref({email:'' , password:''})
   async function signIn() {
    try {
        
    } catch (error) {
        
    } const res=   await (await axios.get(`http://localhost:3000/users/?email=${userInformation.value.email}`)).data[0]
     
     if ( res &&res.password == userInformation.value.password) {

userInfo.user.username=res.username
userInfo.user.email=res.email
loggedIn.value=true
username.value=userInfo.user.username

     }
       else{
        
        userInformation.value.email=''
        userInformation.value.password=''
notLoggedIn.value=true
       }

        }
</script>

<style scoped>

.sign_in{
 width: 450px;
 height: 500px;
 background-color: rgb(237, 209, 209);
 border-radius: 10px;
border: 2px solid rgb(244, 136, 136);
display: flex;
justify-content:center;
align-items: center;

}
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
   

}
form{
    width: 400px;
}
.inputs_btn{
    height: 300px;

    display: flex;
   flex-direction: column;
   justify-content: space-evenly;
}
input{
    height: 30px;
    border-radius: 10px;
    background-color: rgb(44, 43, 43);
    color: white;
    border: none;
    outline: none;
    padding: 0 10px
}
button{
    background-color: rgb(244, 136, 136);
    height: 30px;
    outline: none;
    border: none;
    border-radius: 10px;
}
button:hover{
background-color: white;
color: rgb(244, 136, 136);
border: 2px solid rgb(244, 136, 136);
}
.successfull_login{
    color: rgb(244, 136, 136);
    animation-name: login;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.unsuccessfull_login{
    color: rgb(44, 43, 43);
    animation-name: notLogin;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
@keyframes login {
from{ color: rgba(244, 136, 136, 0);font-size: 12px;}
to{color: rgb(244, 136, 136) ; font-size: 30px}

}
@keyframes notLogin {
from{ color: rgba(44,43,43,0.2);font-size: 8px;}
to{color: rgb(44,43,43) ; font-size: 22px}

}
</style>