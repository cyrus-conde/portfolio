import React from 'react';
import ReactDOM from 'react-dom/client';
import comingsoon from '../assets/comingsoon.png';
import digitalFeedbackForm from '../assets/projects/digitalfeedbackform.png';
import lguNab from '../assets/lgu-nabu.png';
import itd112 from '../assets/itd112.png';
const Projects = () => {
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">
                PROJECTS
                </h1>
                
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">  
                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full" src={digitalFeedbackForm} alt="Coming Soon"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Digital Feedback Form</div>
                    <p className="text-white-700 text-base">
                    It is a mobile application developed with ionic framework. It holds and accepts feedback from clients.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ionic</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#SQLite</span>
                </div>
                </div>

                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <a target="_blank" href="https://nabunturan.gov.ph"><img className="w-full" src={lguNab} alt="LGU Nabunturan"/></a>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">LGU Nabunturan</div>
                    <p className="text-white-700 text-base">
                    The official website of the Municipality of Nabunturan. 
                    </p>
                    <p>Click <a target="_blank" className="text-blue-700" href="https://nabunturan.gov.ph">here</a> to view.</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#wordpress</span>
                </div>
                </div>

                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <a target="_blank" href="https://itd112.mcmactech.me"><img className="w-full" src={itd112} alt="ITD112"/></a>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Data Visualization</div>
                    <p className="text-white-700 text-base">
                    A data visualization final project in our ITD112 subject.
                    </p>
                    <p>Click <a target="_blank" className="text-blue-700" href="https://itd112.mcmactech.me">here</a> to view.</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#django</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bootstrap</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jquery</span>
                </div>
                </div>
                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full" src={comingsoon} alt="Coming Soon"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Coming Soon</div>
                    <p className="text-white-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
                </div>
                </div>

                {/* card */}
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-800 text-white">
                <img className="w-full" src={comingsoon} alt="Coming Soon"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Coming Soon</div>
                    <p className="text-white-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#laravel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#reactJS</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</span>
                </div>
                </div>

                
                
            </div>
        </div>
            
        
    );
}

export default Projects;
