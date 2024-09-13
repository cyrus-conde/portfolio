import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import { result } from 'lodash';

const Contact = () => {
  

  const [to_name,setTo_Name] = useState("");
  const [reply_to,setReply_to] = useState("");
  const [message,setMessage] = useState("");
  const [response,setResponse] = useState("");
  const [showMessage,setShowMessage] = useState(false);
  
  
  const captchaRef = useRef(null);

  const handleResponse = (result) => setResponse(result);
  const handleShowMessage = () => setShowMessage(!showMessage);


  const submitInfo = (e) =>{
    e.preventDefault();
    {/*const token = captchaRef.current.getValue();
    this.props.onSubmit(token);
  captchaRef.current.reset();*/}
    
    
    const content = {
      to_name: "Cyrus",
      from_name: to_name,
      reply_to: reply_to,
      message: message,
    }
    
    emailjs.send('service_karvu3n', 'template_mto7otp', content, 'Ja_5LVKAC9l7sstXX')
      .then((result) => { 
         
         handleResponse(result);
         setTo_Name('');
         setReply_to('');
         setMessage('');
         if(!showMessage){
          handleShowMessage();
         }
         
      }, (error) => {
          
         handleResponse(error);
         setTo_Name('');
         setReply_to('');
         setMessage('');
         if(!showMessage){
          handleShowMessage();
         }
         
      });
      
    }
  
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white-900">
          Contact Me
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        If you require any further information or you think that I am qualified for your project, feel free to contact me.
        </p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form onSubmit={submitInfo} className="flex flex-wrap -m-2">
          {/*message error or success*/}
          {showMessage ?
          <div className="p-2 w-full">
            <div className="relative">
              <div className={(response.status == 200) ? "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" : "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"} role="alert">
                <strong className="font-bold">{(response.status == 200) ? "Success!" : "Error"}</strong>
                <span className="block sm:inline">{(response.status == 200) ? "Email Sent" : response.text}</span>
                <span onClick={handleShowMessage} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg className={(response.status == 200) ? "fill-current h-6 w-6 text-green-500" : "fill-current h-6 w-6 text-red-500"} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
              </div>
              </div>
            </div> : ''
            }
          
          {/*end message*/}

          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-white-600">
                Name
              </label>
              <input
                required
                onChange={(event)=>{setTo_Name(event.target.value)}}
                onFocus={showMessage ? handleShowMessage : undefined}
                value={to_name}
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-white-600"
              >
                Email
              </label>
              <input
                required
                onChange={(event)=>{setReply_to(event.target.value)}}
                value={reply_to}
                onFocus={showMessage ? handleShowMessage : undefined}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-white-600"
              >
                Message
              </label>
              <textarea
                required
                onChange={(event)=>{setMessage(event.target.value)}}
                value={message}
                onFocus={showMessage ? handleShowMessage : undefined}
                id="message"
                name="message"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          {/*<ReCAPTCHA
          sitekey="6LccjEcjAAAAAIlUCa_HAe0exE6uXzPo0rgTGT7Q"
          ref={captchaRef}
          />*/}
          <div className="p-2 w-full">
            <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
          </div>
        </form>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-500">condecyrus25@gmail.com</a>
          <p className="leading-normal my-5">
            Iligan City, Lanao del Norte
          </p>
          <span className="inline-flex gap-2">
            <a href="https://www.facebook.com/cndcyrs" target="_blank"><FaFacebook/></a>
            <a href="https://instagram.com/cndcyrs" target="_blank"><FaInstagram/></a>
            <a href="https://github.com/cyrus-conde" target="_blank"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/mc-drach-cyrus-conde/" target="_blank"><FaLinkedin/></a>
          </span>
        </div>
        
      </div>
    </div>
    
      
  );
    
  
}

export default Contact;
