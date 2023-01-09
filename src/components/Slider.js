import { useEffect, useState } from 'react';

// // Images
import bg01 from '../assets/images/bg01.jpg';
import bg02 from '../assets/images/bg02.jpg';
import bg03 from '../assets/images/bg03.jpg';
let index = 0;

export default function Slider() {
  let [slide, setSlide] = useState(bg03);
  // let [visibility, setVisibility] = useState('');

  useEffect(() => {
    let delay = 7000;
    // let speed = 1000;
    let slides = [bg01, bg02, bg03];
    const interval = setInterval(() => {
      if (index >= 3) index = 0;
      setSlide(slides[index])
      index += 1
    }, delay);
    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className="simpleslide100">
      <div className="simpleslide100-item bg-img1" style={{ backgroundImage: `url(${slide})`, animation: 'fadeIn 7s infinite' }}></div>
    </div>
  );
}