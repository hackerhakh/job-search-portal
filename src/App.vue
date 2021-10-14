<template>
<div id="app"></div>
  <div v-for="(job,index) in jobs"  :key="index">
    <Job v-bind:title=job.title v-bind:location=job.location v-bind:description=job.description />
  </div>
</template>

<script>
import Job from './components/Job.vue'
export default {
  name: 'App',
  components: {
    Job
  },
  data(){
    return{
      jobs: [ {title:"Software Engineer", location:"India", description:"Design, develop and debug software applications"},
      {title:"Software Engineer", location:"India", description:"Design, develop and debug software applications"} ]
    }
  }
}
</script>

<style>
#app{
  background-color:whitesmoke;
  margin:0px;
  padding:0px;
}

</style>
