<template>
    <div class="job">
        <div class="title">{{title}}</div>
        <div class="location">{{location}}</div>
        <p class="description">{{description}}</p>
    </div>
</template>

<script>
    export default{
        name:"Job",
        props:{
            title:String,
            location:String,
            description:String
        }
    }
</script>

<style scoped>

.job{
    background-color:#FFF;
    width:80%;
    margin:auto;
}

.title{
    font-size:20px;
    font-weight:bold;
    font-family:'Courier New', Courier, monospace;
}

.location{
    font-size:10px;
    font-weight:100;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.description{
    font-size:8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>