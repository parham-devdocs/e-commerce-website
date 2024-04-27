<template>
    <div class="container">
<div class="Logo_btns">
<div class="signUp_signIn_btns">
    <button>mdi-folder-multiple-image</button>
    <button @click="go_to_signUp">sign up</button>
    <button @click="go_to_signIn">sign in</button>
</div>
<div class="logo-container">
<img src="../assets/vue.svg" alt="">
</div>
</div>
<div class="navigationBar">
    <div class="navIcons">
       <a href="/">Home </a>
       <a href="#">Testimonial</a>
       <a href="#">Products</a>
       <a href="#">About Us</a>
       <a href="#">Contributions</a>

    </div>
</div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router=useRouter()
const route=useRoute
   function go_to_signIn() {
    router.push('/signin')
    
   }
   function go_to_signUp() {
    router.push('/signup')
   }
</script>

<style scoped>
.Logo_btns{
    width: 98vw;
    height: 70px;
    background-color: rgb(237, 209, 209);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    

}
button{
    background-color: rgb(237, 209, 209);
    border-radius: 10px;
    border: 1px solid white;
    width: 75px;
    height: 30px;
    color: white;
}

button:hover{
    background-color: white;
    color: rgb(237, 209, 209);
    
}
.signUp_signIn_btns{
    width: 165px;
    display: flex;
    justify-content: space-between;
    
}
.navIcons a{
    text-decoration: none;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    height: 100%;
}
.navIcons{
    max-width: 800px;
    display: flex;
    justify-content: space-evenly;
    margin-left: auto;
    height: 100%;
    align-items: center;
    
}
.navigationBar{
    width: 100vw;
    height: 50px;
    background-color: rgb(59, 57, 57);
   
    
    
}
.navIcons a:hover{
animation-name: changeColor;
animation-duration: 0.5s;
animation-timing-function: ease-in;
animation-fill-mode: forwards;

}

@keyframes  changeColor {
    from{background-color: rgb(59, 57, 57);  color: white;}
    to{background-color: white; color: rgb(59, 57, 57);}
}
.container{
    margin-bottom: 100px;
}

















</style>