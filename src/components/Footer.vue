<template>
    <div class="container">
<div class="columns_links">
    <div>
    <ul v-for="(item, index) in col_1" :key="index">
<a href="#"><li>{{ item }}</li></a>
    </ul>
    </div>
    <div>
        <ul v-for="(item, index) in col_2" :key="index">
<a href="#"><li>{{ item }}</li></a>
    </ul>
    </div>
    <div>
        <ul v-for="(item, index) in col_1" :key="index">
<a href="#"><li>{{ item }}</li></a>
    </ul>
    </div>
</div>
<hr >
<div class="footer_text">
<h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam non exercitationem dolorem! Optio aperiam labore nesciunt nulla, repudiandae debitis vero dolore nobis illo molestiae, excepturi quaerat porro unde sit ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolor minima voluptate enim amet quam a, officia vitae repellat molestiae dolorum cupiditate odit quod distinctio numquam illum ut rerum necessitatibus.</h2>
</div>





    </div>
</template>

<script setup>
   import { ref } from 'vue'
   const col_1=ref(['About us' ,'Leadership', ' News' , 'Careers','Blog' , 'Contact us'])
   const col_2=ref(['Imprint', 'Terms and conditions','Privacy policy','Use of cookies','Environmental policy','Information security policy','Quality policy','SMS policy'])
   const col_3=ref(['Imprint', 'Terms and conditions','Privacy policy','Use of cookies','Environmental policy','Information security policy','Quality policy','SMS policy'])

</script>
<style scoped>

.container{
min-height: 430px;
margin: 0%;
background-color: gray;
margin-top: 50px;
}
.columns_links{
    display: grid;
    grid-template-columns: repeat(3 ,1fr);
    margin-bottom: 10px;

}
ul{
    margin-top: 10px;
}
li{
    list-style-type: none;
font-size: 20px;

}
a{
    text-decoration: none;
    color: white;
    cursor: pointer;
}
.footer_text{
    font-size: 10px;
    color: white;
    width: 800px;
   margin: 20px auto;
   text-align: center;
   line-height: 23px;
}
@media only screen and (max-width: 600px) {
  .columns_links {
    grid-template-columns: auto;
    row-gap: 20px;
    text-align: center;
  }
  .footer_text{
    display: none;
  }
}
</style>