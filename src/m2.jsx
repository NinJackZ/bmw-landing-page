import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

const Car = () => {

    const car = useRef();

    function onLoad(spline) {
        const obj = spline.findObjectByName('car');
        car.current = obj;
    }

    return (
    <div>
      <Spline
        scene="https://prod.spline.design/Sn-5lUE8m9FYo0ve/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
    );
}
 
export default Car;