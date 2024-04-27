<template>
  <div class="parent">
    <div class="carousel" :style="{userSelect:userSelect, scrollBehavior: scrollBehavior}" @mousedown="down"  @mouseup="up" @mousemove="move" ref="carousel">
     <div class="cards" >
      
<Card class="card" v-for="(card, index) in products" :key="index" :src="card.src" :brand="card.brand" :price="card.price" :title="card.title"></Card>

    </div>
    
    <button @click="scrollLeft" @mousemove="up" class="prev_btn">&lt;</button>
    <button @click="scrollRight" @mousemove="up"  class="next_btn">&gt;</button>
    </div>
    </div>
</template>

<script setup>
  import Card from './productCard.vue'
  import { onMounted ,ref } from "vue";
  import axios from 'axios'

  const dragStart=ref(false)
  const carousel=ref(null)
const products=ref(null)
const userSelect=ref('auto')
const scrollBehavior=ref('auto')
function down() {
  dragStart.value=true
  
}
function up() {
  dragStart.value=false
}
function move(event) {
if (dragStart.value) {
  event.movementX> 0 ? carousel.value.scrollLeft-=10 : carousel.value.scrollLeft+=10}
  userSelect.value='none'
}

  onMounted(async()=>{

  const res=await  axios.get('http://localhost:3000/products')
products.value=res.data

  })
  function scrollLeft() {
    carousel.value.scrollLeft-=200
    scrollBehavior.value='smooth'
  }
  function scrollRight() {
    carousel.value.scrollLeft+=200
    scrollBehavior.value='smooth'

  }
</script>

<style scoped>
.cards{
  width: 5000px;

display: flex;
   justify-content: space-evenly;
   align-items: center;
   
}
.card{
  margin-left: 30px;
}

.parent{
  position: relative;
}
.carousel{
   width:90vw;
   background-color: rgb(244, 136, 136);
   height: 430px;
 overflow-x: scroll;
padding-top: 1rem;
   border-radius: 10px;
  
  
}
.carousel::-webkit-scrollbar {
    display: none;
}
.next_btn{
  position: absolute;
  top: 50%;
  right: 20px;

}
.prev_btn{
  position: absolute;
  top: 50%;
  left: 20px;
}
button{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  color: rgb(59, 57, 57);
  background-color: white;
  font-size: 20px;
}
button:hover{
animation-name: changeColor;
animation-duration: 0.5s;
animation-timing-function: ease-in;
animation-fill-mode: forwards;

}

@keyframes  changeColor {
    from{background-color: white;  color: rgb(59, 57, 57);}
    to{background-color: rgb(59, 57, 57); color:white;}
}
</style>