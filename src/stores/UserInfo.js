import { defineStore } from "pinia";

export const user=defineStore('userInfo',{
    state:()=>({
        user:{
            email:'',
            username:'',
            

        }
    }),
    
    
})

export const basket=defineStore('basket',{
    state:()=>({
        products:[],
        totalCost:0
    }),
    actions:{
        aggregate(){
            this.totalCost=0
            this.products.forEach(e=>{
                this.totalCost+=e.price
                console.log(this.totalCost);
            })
        }
    }
})