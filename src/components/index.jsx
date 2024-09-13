import React, { Fragment } from 'react';
import Typewriter from 'typewriter-effect';
import logo from '../assets/logo.png';

const Home = () => {
    return (
        <Fragment>
            <div className="container px-5 py-24 mx-auto">
                
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 md:grid-rows-2 lg:grid-rows-1">
                    <div className="place-self-center lg:col-span-5 lg:flex">
                        <figure>
                            <img src={logo} className="h-full object-cover"/>
                        </figure>
                    </div>
                    <div className="lg:mt-0 lg:col-span-7 lg:flex lg:col-start-8 place-self-center">
                        <div>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.changeDelay(30).typeString('<span class="text-xl text-justify">Hello there,</span>')
                                        .pauseFor(1000)
                                        .changeDelay(30)
                                        .typeString("<br><span class='text-4xl text-justify'>I'm Mc Drach Cyrus Conde</span>")
                                        .pauseFor(1000)
                                        .changeDelay(30)
                                        .typeString("<br><span class='text-lg text-justify'>an aspiring full-stack web developer and software engineer.</span>")
                                        .start();
                                    }}
                            />
                           
                            
                        </div>
                    </div>
                </div>
           
       
            </div>
            
            </Fragment>
        
    );
}

export default Home;
