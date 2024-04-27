<template>
    
    <main class="container">
        <div class="sign_up">
            <form @submit.prevent>
                <div class="inputs_btn">
    <input type="text" placeholder="username" v-model="userInformation.username">
    <input type="text" placeholder="enter your email" v-model="userInformation.email" >
    <input type="password" placeholder="enter your password" v-model="userInformation.password">
    

    
    <button @click="signIn">sign in</button>
    
                </div>
                <h2 class="email_error"  v-if="errors.email">this email is taken</h2>
                <h2 class="email_error"  v-if="errors.password">the password must contain at least 8 characters</h2>
                <h2 class="email_error"  v-if="errors.username">the username is needed</h2>
                <h2 class="email_error"  v-if="errors.repeatedpassword">the password does not match</h2>

            </form>
        </div>
    </main>
    </template>
    
    <script setup>
        import { ref ,watch} from "vue";
        import {user} from '../stores/UserInfo.js'
        import axios from "axios";
        const username=ref('')
        const loggedIn=ref(false)
        const notLoggedIn=ref(false)
        const userInfo=user()
        const errors=ref({email:false , username:false , password :false })
        const userInformation=ref({email:'' , password:'',username:'' })
    
        const email_available=ref(false)
       async function signIn() {
        errors.value={email:false , username:false , password : false}
        email_available.value=false
        const res=   await axios.get(`http://localhost:3000/users`)
        res.data.forEach(element => {
            if ( element.email ===userInformation.value.email ) {

email_available.value=true
            }
        });
    if (email_available.value) {
        errors.value.email=true
console.log('email');
    }
    if (userInformation.value.password.length <= 8 ) {
            errors.value.password=true
            console.log('password');
        }
        
       
    if (!userInformation.value.username) {
        console.log('username');
            errors.value.username=true
            
        }
     
    if (!errors.value.email && !errors.value.password && !errors.value.username && userInformation.value.email) {

        await axios.post(`http://localhost:3000/users`,userInformation.value)

    }

    


         
         
            }
    
    </script>
    
    <style scoped>
    
    .sign_up{
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
        height: 430px;
    
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
    h2{

        color: rgb(44, 43, 43);
        font-size: 20px;
        animation-name: alert;
        animation-duration: 1s;
        animation-timing-function: ease-in;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes alert {
    from{ color: rgba(44,43,43,0.2)}
    to{color: rgb(44,43,43) }
    
    }
   

    </style>