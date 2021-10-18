<template>
  <div class="home">
    <JobCard  :job="job" v-for="(job,index) in jobs"  :key="index"  />
  </div>
</template>

<script>
// @ is an alias to /src
import JobCard from '@/components/JobCard.vue'

export default {
  name: 'Home',
  components: {
    JobCard
  },
  data(){
    return{
      jobs: [ 
        {
          title:"SDE I", 
          location:"India", 
          company:"amazon", 
          url: "https://www.amazon.jobs/en/jobs/1776855/software-development-engineer-i",
          description:`DESCRIPTION
              Want to be part of a dynamic start-up environment within Amazon and build India’s no 1 e-commerce payment gateway platform and thus create history?

              India External Payment Services team at Amazon India Development Center, Bangalore is looking for a Developer to design and build the next generation Payment Aggregator & 3rd Party Merchant Integration Platform. This role will would help third party merchants outside Amazon in India, to enable customers to pay with "Amazon Pay Balance" on their website or stores. You will responsible for building a best in class and friction-less payments solution and merchant experience which will help us exponentially scale while retaining our customers/merchants trust.

              We are looking for passionate, software developers for delivering high quality platform solutions that support variety of customer use cases and are extensible to handle amazon scale. Developers in the team need a strong understanding of Computer fundamentals and practical experience in building large scale distributed systems. Experience with web-based applications and/or web services-based applications, especially at massive scale, is also helpful.


              Basic Qualifications
              Programming experience with at least one modern language such as Java, C++, or C# including object-oriented design
              A solid grounding in Computer Science fundamentals (based on a BS or MS in CS or related field)
              The ability to take convert raw requirements into good design while exploring technical feasibility tradeoffs
              Good understanding of at least some of the modern programming languages (Java, C/C++ ) and open-source technologies (Linux, oracle ).
              Excellence in technical communication.
              Has experience in mentoring other software developers
              Preferred Qualifications
              Experience with large scale distributed systems
              Demonstrated ability to think strategically while remaining hands-on.
              Prior experience with agile methodologies and a fast-paced environment.
              Knowledge of React Native a plus
              You are comfortable creating and driving a product roadmap.`
        },
        {title:"Back End Developer",
         location:"India(Remote)", 
         company:"rethink ux",
         url:"#",
         description:`Responsibilities

          Participate in requirements analysis
          Collaborate with internal teams to produce software design and architecture
          Write clean, scalable code
          Test and deploy applications and systems
          Revise, update, refactor and debug code
          Improve existing software
          Knowledge of source control tool. e.g. GIT , VSS, SVN or TFS etc.
          Responsible to develop scalable and high-performance components.
          Should take ownership of the technical aspects of a product vertical.
          Should drive code reviews and develop processes for coding practices.

          Requirements

          Nodejs, REST API/micro-Services, nestjs, Express Framework, JSON, graphql, SOAP
          ReactJS/Angular hands on would be added advantage
          MySQL, MongoDB and SQL Server 2010 – fundamental database concepts, designing & programming skills
          Ability to gather business requirements from clients and extensible and reusable solutions.
          Understanding of Agile methodologies
          Strength in designing truly scalable applications.
          Aware & practiced secure application / API programming practices
          Strong application design skills – high level and low-level design

          EDUCATIONAL QUALIFICATION

          B.E. (IT)/ B. Tech/ M. Tech / BCA/ MCA/ M.Sc. (IT)`
          } ]
    }
  }
}
</script>

