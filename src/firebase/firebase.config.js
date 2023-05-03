// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxL08OZszqQDKEWoLCvMpTV96t0GM70uE",
  authDomain: "a-ten-4cd26.firebaseapp.com",
  projectId: "a-ten-4cd26",
  storageBucket: "a-ten-4cd26.appspot.com",
  messagingSenderId: "527722773236",
  appId: "1:527722773236:web:fe409276b1d4a9c5b37ca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const firebaseConfig = {

//   apiKey:"AIzaSyAvauR-4Vh4YTElUg1IjY1oN170kckz9aQ",
  
//   authDomain: "the-news-dragon.firebaseapp.com",
  
//   projectId: "the-news-dragon",
  
//   storageBucket: "the-news-dragon.appspot.com",
  
//   messagingSenderId: "357597429349",
  
//   appId: "1:357597429349: web:71a78403e279e8d8c4508c"
//   };



// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export default app;