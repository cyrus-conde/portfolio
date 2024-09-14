import React, { Fragment,useState } from 'react';
import ReactDOM from 'react-dom/client';
import me from '../assets/me.jpg';
import Skills from './skills';


const About = () => {
    const [about,setAbout] = useState("knowmemore");
    return (
        <Fragment>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">
                    ABOUT
                    </h1>
                    
                </div>
                
                <span className="inline-flex justify-center text-center w-full mb-12 ">

                    
                        <button onClick={()=>setAbout("knowmemore")} className={(about == "knowmemore") ? "bg-blue-700 text-white font-bold py-2 px-4" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}>Know me More</button>
                        <button onClick={()=>setAbout("skills")} className={(about == "skills") ? "bg-blue-700 text-white font-bold py-2 px-4" : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"}>Technical Skills</button>
                </span>
            
                {(about == "knowmemore" ? 
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:grid-rows-1 animate-pulse-once">
                    <div className="place-self-center lg:col-span-5 lg:flex">
                        <figure>
                            <img src={me} className="h-full object-cover rounded-2xl drop-shadow-5xl shadow-black hover:hue-rotate-15"/>
                        </figure>
                    </div>
                    <div className="lg:mt-0 lg:col-span-7 lg:flex lg:col-start-8 place-self-center">
                        <div>
                            <p className="text-5xl font-sans font-black tracking-wider text-center underline decoration-pink-500">WHO AM I</p>
                            
                            <p className="text-justify my-5">
                            I am Mc Drach Cyrus Conde, 23 years old, a graduate from Mindanao State University - Iligan Institute Technology with a Bachelor's degree in Information Technology, specializing in Database Systems.

                            </p>
                            <p className='text-justify my-5'>
                            
                                I started my journey in Information Communication Technology when I was 8 years old. At young age, I learnt how to fix computers from my uncles. I also practice my typing skills and joined competitions, and of course I won. I took Media Arts as my specialization when I was in Junior High School then proceed to ICT in Senior High School. I won several awards with my specializations such as Media Arts of the year for two consecutive years, and master coder of the year when I graduated Senior High School.
                            </p>
                            <p className='text-justify my-5'>
                            
                                In college, I took Bachelor of Science in Information Technology major in Database Systems. I studied and worked hard to gain such skill in computer programming. During my college life, I work as a freelance web developer and a computer programming mentor. During my 3rd year in college, I work as a website manager in Local Government Unit of Nabunturan.
                            </p>
                            <p className='text-justify'>
                            
                                I am very thankful for the knowledge I've got from my education, with my knowledge, I am here now, a full-stack web developer and an aspiring software engineer.
                            </p>
                        </div>
                    </div>
                </div>
            :
            <Skills/>
            )}
        </div>
            
        </Fragment>
        
    );
}

export default About;