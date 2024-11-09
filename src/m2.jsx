import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';

const Car = ({ onLoad }) => {
  const car = useRef();

  function handleLoad(spline) {
    const obj = spline.findObjectByName('car');
    car.current = obj;

    if (onLoad) {
      onLoad();
    }
  }

  return (
    <Spline
      scene="https://prod.spline.design/Sn-5lUE8m9FYo0ve/scene.splinecode"
      onLoad={handleLoad}
    />
  );
}

export default Car;
