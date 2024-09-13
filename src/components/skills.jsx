import React from 'react';
import ReactDOM from 'react-dom/client';
import reactjs from '../assets/skills/reactjs.svg';
import html5 from '../assets/skills/html5.svg';
import css3 from '../assets/skills/css3.svg';
import tailwind from '../assets/skills/tailwind.svg';
import javascript from '../assets/skills/javascript.svg';
import ionic from '../assets/skills/ionic.svg';
import php from '../assets/skills/php.svg';
import laravel from '../assets/skills/laravel.svg';
import csharp from '../assets/skills/csharp.svg';
import mysql from '../assets/skills/mysql.svg';
import postgres from '../assets/skills/postgres.svg';
import sqlite from '../assets/skills/sqlite.svg';


import git from '../assets/skills/git.svg';
import github from '../assets/skills/github.svg';
import wordpress from '../assets/skills/wp.svg';

const Skills = () => {
    return (
        
        <div className="grid grid-cols-2 gap-4 max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-auto animate-pulse-once">
            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={html5} alt="HTML5"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">HTML5</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={css3} alt="CSS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">CSS3</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={tailwind} alt="Tailwind"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Tailwind</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={javascript} alt="JavaScript"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">JavaScript</div>
                </div>
            </div>


            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={reactjs} alt="React JS"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">React JS</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={ionic} alt="Ionic"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Ionic</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={php} alt="PHP"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">PHP</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={laravel} alt="Laravel"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Laravel</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={csharp} alt="C#.net"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">C#.net</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={mysql} alt="MySQL"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">MySQL</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={postgres} alt="PostgreSQL"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">PostgreSQL</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={sqlite} alt="SQLite"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">SQLite</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={git} alt="Git"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Git</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={github} alt="Github"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Github</div>
                </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full px-5 pt-2 filter invert" src={wordpress} alt="Wordpress"/>
                <div className="py-4 flex justify-center">
                    <div className="font-bold text-xl mb-2">Wordpress</div>
                </div>
            </div>


        </div>
        
        
    );
}

export default Skills;
