import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useSpring, animated } from 'react-spring';
import logo from '../assets/logo.png';
function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState(null);
    const springProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 500 },
        delay: timeLeft === 0 ? 500 : 0,
      });
    useEffect(() => {
      const newYear = new Date('2023-01-01T00:00:00').getTime();
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = newYear - now;
  
        if (distance < 0) {
          setTimeLeft(0);
          clearInterval(interval);
        } else {
          setTimeLeft(distance);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="bg-gray-200 h-screen w-screen flex items-center justify-center">
        <div className="container mx-auto h-full flex items-center justify-center">
        {timeLeft <= 0 ? (
            
            <div className="w-3/4 md:w-1/3 rounded-lg shadow-lg bg-white p-8 md:p-12 lg:p-16 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Happy New Year!</h1>
                <img src={logo} alt="New Year" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover mb-4" />
                <blockquote className="text-gray-700 font-serif italic text-center mb-4">
                "The new year stands before us, like a chapter in a book, waiting to be written. We can help write that story by setting goals."
                </blockquote>
                <p className="text-gray-700 text-center">
                - Melody Beattie
                </p>
            </div>
            
            
        ) : (
            <div className="w-3/4 md:w-1/3 rounded-lg shadow-lg bg-white p-8 md:p-12 lg:p-16 flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4 text-center">NEW YEAR COUNTDOWN</h1>
                <span className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {Math.floor(timeLeft / (1000 * 60 * 60 * 24))}d{' '}
                    {Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h{' '}
                    {Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))}m{' '}
                    {Math.floor((timeLeft % (1000 * 60)) / 1000)}s
                </span>
            </div>
            
        )}
        </div>
    </div>
    
  );
}

export default CountdownTimer;
