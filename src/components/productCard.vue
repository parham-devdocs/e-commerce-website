<template>
   <div class="container">
    <a href="#">
<div class="card">
<div class="img"><img draggable="false" :src="props.src" alt=""></div>
<div class="productDetail" draggable="false">
<h2 class="cardTitle">{{ props.title }}</h2>
<h2 class="Brand">{{ props.brand }}</h2>
<h2 class="Price">{{ props.price }} $</h2>
</div>
<button @click="addToBaskek(props)" class="btnAdd">ADD</button>
</div>
    </a>
   </div>
</template>

<script setup>
   const props=defineProps(['src','title','brand','price'])
   import { basket } from '../stores/UserInfo';
   const  userBasket=basket()
   function addToBaskek(productdetail) {
userBasket.products.push(productdetail)
userBasket.aggregate()
   }
</script>

<style scoped>

.container{
    width: 250px;
    height: 400px;
    background-color: rgb(255, 237, 237);
    border-radius: 10px;
}
.img{
    display: flex;
    justify-content: center;
   padding-top: 20px;
}
img{
    border-radius: 5px;
}
.productDetail{
    
    height: 100px;
    margin-top: 20px;
    line-height: 35px;
    padding-left: 10px;
}
.btnAdd{
    width: 70px;
    height: 30px;
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 10px;
}
.cardTitle{
    font-size: 22px;
    font-weight: 700;
}
.Brand{
    font-size: 18px;
    font-weight: 400;
}
.Price{
    font-size: 15px ;
    font-weight: 400;
}
.btnAdd:hover{
animation-name: changeColor;
animation-duration: 0.5s;
animation-timing-function: ease-in;
animation-fill-mode: forwards;

}

@keyframes  changeColor {
    from{background-color: white;  color: rgb(59, 57, 57);}
    to{background-color: rgb(59, 57, 57); color:white;}
}
a{
    text-decoration: none;
    color: black;
}
</style>