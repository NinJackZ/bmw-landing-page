import React, { useRef, useEffect } from 'react';
import Car from './m2.jsx';
import  gsap from 'gsap';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {

  const h1 = useRef();

  useGSAP(() => {
    gsap.to('#h1', {x: 250, repeat: -1, yoyo: true, rotation:360, duration: 2, ease: 'elastic'})
  }, []);

  return (
    <>
      <div className='content'>
        <h1>Sheer Driving Pleasure.</h1>
        <div className="m2-container">
          <Car />
        </div>
      </div>
    </>
  );
}

export default App;
