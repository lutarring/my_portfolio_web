import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const App = () => {
  
const firebaseConfig = {
  apiKey: "AIzaSyClzUAdiEkAYGqLf8yyq4t8Wq1CIi1IOVQ",
  authDomain: "react-portfolio-b55f5.firebaseapp.com",
  projectId: "react-portfolio-b55f5",
  storageBucket: "react-portfolio-b55f5.appspot.com",
  messagingSenderId: "630712427374",
  appId: "1:630712427374:web:184115ef755d126911177f",
  measurementId: "G-4GWK86W3EV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Services />
     <Contact />
     <Footer />
    </>
  )
}

export default App
