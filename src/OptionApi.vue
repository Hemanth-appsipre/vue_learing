<script>
export default{
    data(){
        return{
            firstname:"sai",
            lastname:"Hemanth",
            count:0
        }
    },
    computed:{
        fullname(){
            return this.firstname + ' ' + this.lastname
        }
    },
    methods: {
        increase(){
            this.count++
        }
    },
    watch:{
        count(newvalue, oldvalue){
            console.log(oldvalue,newvalue)
        }
    },
    mounted(){
        console.log("component Loaded")  
    }
}
</script>
<template>
    <h1>Option Api</h1>
    <div>
        <h1>{{ fullname }}</h1>
        <h2>{{ count }}</h2>
        <button @click="increase">
            Increase
        </button>
    </div>
</template>