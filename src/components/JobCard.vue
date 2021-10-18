<template>
    <div class="job-card" >
        <img :src="getImgUrl" alt="company-logo" class="company-logo" :title="job.company">
        <div class="job-details">
            <router-link class="title" to="#">{{job.title}}</router-link>
            <div class="company">{{job.company}}</div>
            <div class="location">{{job.location}}</div>
            <button @click="toggleDetailedView" class="apply">Apply Now</button>
        </div>
    </div>
    <JobDetailedView v-if="detailedView" :job="job"/>
</template>

<script>
import JobDetailedView from './JobDetailedView.vue'
    export default{
        name:"JobCard",
        components: {JobDetailedView},
        props:["job"],
        data: function() {
            return {
                detailedView:false
            }
        },
        computed:{
            getImgUrl:function(){
                return require("../assets/" + this.job.company.toLowerCase().replace(' ','-') + ".jpg")
            }
        },
        methods:{
            toggleDetailedView:function(event){
                this.detailedView = !this.detailedView
                event.target.parentNode.parentNode.scrollIntoView()
            }
        }
    }
</script>

<style scoped>

.job-card{
    background-color:#fff;
    width:80%;
    margin:auto;
    display: flex;
    margin-bottom:10px;
    margin-top:10px;
    color:black;
    border-radius: 2%;
}

.company-logo{
    width:102px;
    height:102px;
}

.job-details{
    margin-left:10px;
    display:flex;
    flex-direction:column;
}

.title{
    font-weight:bold;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    color: darkblue;
    padding-bottom:5px;
    font-size: 25px;
}

.job-card:hover .title{
    text-decoration:underline;
}

.job-card:hover{
    cursor:pointer;
}

.company{
    color:gray;
}

.location{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,  ;
    color: gray;
}

.description{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,  ;
    color: gray;
}

.apply{
    width:100px;
}

</style>