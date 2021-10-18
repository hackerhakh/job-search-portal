import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAuiPts99DLtWlSSYSMSN3F7SK8GHAVc60",
    authDomain: "job-portal-892fa.firebaseapp.com",
    projectId: "job-portal-892fa",
    storageBucket: "job-portal-892fa.appspot.com",
    messagingSenderId: "811292092331",
    appId: "1:811292092331:web:fbe274fa5a1d3224b254ee",
    measurementId: "G-S1BEYYPB4Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  export default firebaseApp.firestore();