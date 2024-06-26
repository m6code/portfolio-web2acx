import {useState} from 'react'
import './App.css'
import NavBar from "./components/navbar/NavBar.jsx";
import {Intro} from "./components/intro/Intro.jsx";
import Skills from "./components/skills/Skills.jsx";
import Works from "./components/works/Works.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {


    return (
        <>
            <NavBar/>
            <Intro/>
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </>
    )
}

export default App
