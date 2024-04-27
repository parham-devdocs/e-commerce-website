<script setup>
import Carousel from "../components/Carousel.vue";
</script>

<template>
    <main class="container">
        <div class="background_image">
            
        </div>
        <div class="about_company">
<h1>About our company</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nulla, ipsum impedit nobis, iste excepturi ratione nisi modi fugit molestiae vitae. Perferendis quisquam magnam quod autem qui, iste dolores dolorum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A inventore labore voluptas sint id dolores ipsa tempore delectus amet veniam fugiat nesciunt, veritatis laudantium accusamus suscipit perspiciatis quae quod molestias?</p>
        </div>
        <Carousel></Carousel>
    </main>
</template>

<style scoped>
.container{
   display: flex;
   flex-direction: column;
   align-items: center;
}
.background_image{
    
    background-image: url('https://images-eu.nivea.com/-/media/nivea/general/products/products/niv_19606_nivea_hammock_mery_shin_claire_pos.jpg?rx=0&ry=0&rw=8256&rh=3225&mw=2000&hash=4270CA17F4C697814125C9C23A65DD77');
 background-attachment: fixed;
 background-repeat: no-repeat;
 height: 600px;
 width: 100%;
 background-position: center;
    margin-bottom: 100px;
    
}
.about_company{
    width: 800px;
    text-align: center;
    margin-bottom: 100px;
}
.about_company p{
    line-height: 30px;
    margin-top: 20px;
    
}
</style>
