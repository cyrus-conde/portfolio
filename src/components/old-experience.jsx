import React, {Fragment} from 'react';
import ReactDOM from 'react-dom/client';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap, FaStar} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';

const Experience = () => {
    return (
      <Fragment>
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">
                Education & Work Experience
                </h1>
                
            </div>
            <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="January 2022 - July 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdWork/>}
              >
                <h3 className="vertical-timeline-element-title">Local Government Unit of Nabunturan</h3>
                <h4 className="vertical-timeline-element-subtitle">Nabunturan, Davao de Oro</h4>
                <p>
                  Website Manager
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2019 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaGraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">Mindanao State University - Iligan Institute Technology</h3>
                <h4 className="vertical-timeline-element-subtitle">Iligan City, Lanao del Norte</h4>
                <p>
                  Bachelor of Science in Information Technology
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                date="2017 - 2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaGraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">Nabunturan National Comprehensive High School - Senior High School</h3>
                <h4 className="vertical-timeline-element-subtitle">Nabunturan, Davao de Oro</h4>
                <p>
                  TVL - ICT - Computer Programming
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                date="2013 - 2017"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaGraduationCap />}
              >
                <h3 className="vertical-timeline-element-title">Nabunturan National Comprehensive High School</h3>
                <h4 className="vertical-timeline-element-subtitle">Nabunturan, Davao de Oro</h4>
                <p>
                  Special Program in the Arts - Multimedia Arts
                </p>
              </VerticalTimelineElement>
              
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FaStar />}
              />
            </VerticalTimeline>
          </div>
          
        
      </Fragment>
    );
}

export default Experience;

