import { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/nav-menu';
import Home from './components/index';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';

import Contact from './components/contact';
import Footer from './components/footer';
import CountdownTimer from './components/newyear-countdown';
import Nav from './components/nav-menu';
const App = () => {
    
    return (
        <Fragment>
            <header id="nav" className="fixed w-screen z-50">
                <Navbar/>
            </header>
            <main className="container-fluid">
                
                <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-black text-white">
                    <Home/>
                </section>

                <section id="about" className="min-h-screen flex py-10 md:flex-row flex-col bg-white text-black">
                    <About/>    
                </section>

                <section id="experience" className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-black text-white">
                    <Experience/>
                </section>
                <section id="projects" className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-white text-black">
                    <Projects/>
                </section>
            
                <section id="contact" className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-black text-white body-font relative">
                    <Contact/>
                </section>
                
            

            </main>

            <footer id="footer" className="bg-gray-200 text-center lg:text-left">
                <Footer/>
            </footer>
        </Fragment>
      );
      
    /*return (
        <Fragment>
            <Navbar/>
            <Home/>
            <About/>
            <Experience/>
            <Projects/>
            
            <Contact/>
            
            <Footer/>
            <CountdownTimer/>
        </Fragment>
        

    )*/
}

export default App;