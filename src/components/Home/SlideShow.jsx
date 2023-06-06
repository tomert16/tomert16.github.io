import React, { useState, useEffect } from 'react'
import coding from '../../images/coding.png';
import soccer from '../../images/soccer.png';
import surf2 from '../../images/surf2.png';
import learn from '../../images/learn.png';

export const SlideShow = () => {
    
    const images = [coding, soccer, surf2]
    const [index, setIndex] = useState(0);
    const delay = 8000;
    
    const next = () => {
        if (index === images.length - 1) {
            setIndex(0);
        }else {
            setIndex(index + 1);
        }
    }
  useEffect(() => {
        setTimeout(
          () =>
            setIndex(next),
          delay
        );
    
        return () => {};
      }, [index]);

  return (
    <div class="wrapper">
        <div class="container">
            <div class="image-cube">
                <div class="front">
                    <img class='imgs' src={coding} />
                </div>
                <div class="right">
                    <img class='imgs' src={soccer} />
                </div>
                <div class="back">
                    <img class='imgs' src={learn} />
                </div>
                <div class="left">
                    <img class='imgs' src={surf2} />
                </div>
            </div>
        </div>
    </div>
  )
}
