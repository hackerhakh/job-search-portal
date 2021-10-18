<template>
    <div class="job-detailed-view">
        <h1> {{job.title}} </h1>
        <img :src="getImgUrl" alt="company-logo" class="company-logo" :title="job.company">        
        <h3>{{job.company}} is hiring for {{job.title}} at location {{job.location}}</h3>
        <h1> JOB DESCRIPTION </h1>
        <p class="description">{{job.description}}</p>
        <div>
            <a class="apply" :href="job.url" target="_blank">Apply here</a>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Job",
        props:["job"],
        computed:{
            getImgUrl:function(){
                return require("../assets/" + this.job.company.toLowerCase().replace(' ','-') + ".jpg")
            }
        }
    }
</script>

<style scoped>

.job-detailed-view{
    width: 80%;
    margin:auto;
}

.company-logo{
    width:100%;
    height:500px;
}

.apply{
    border-radius:10px;
    background-color:lightgreen;
    font-weight: bold;
    font-size: 1.5rem;
    margin:auto;
    width:30%;
    padding: 20px;
    border: red 3px solid;
    text-decoration: none;
    display:block;
    text-align: center;
}

.apply:hover{
    background-color: lightskyblue;
}

</style>