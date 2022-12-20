import * as React from 'react';

import { useInView } from 'react-intersection-observer';

import './style.css'


const Information = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })
  const getInfoAnimation = (direction) => {
    let infoAnimation = ""
    console.log(inView);
    if(inView) {
      infoAnimation =  {
        position: 'relative',
        opacity: '100%',
        animation: `slideIn${direction} ease 1s`,
      }
    } else {
      infoAnimation = {}
    }
    return infoAnimation;
  }
  return(
    <div className="infoContainer" id="#contact" ref={ref}>
      <div className="infoOpacity" style={getInfoAnimation("Right")}>
        <div className="infoSubContainer">
          <div>
            <h1 className="infoHeaderText">
              Hours &#38; Location
            </h1>
          </div>
          <div>
            <h2>Hours</h2>
            <p>Monday - Sunday</p>
            <p>4:00 AM - 2:00 PM</p>
          </div>
          <div>
            <h2>Address</h2>
            <p>
              2567 Gessner RD STE A <br></br>
              Houston, TX, 77080
            </p>
          </div>
        </div>
      </div>
     <div className="infoOpacity" style={getInfoAnimation("Left")}>
        <div className="infoSubContainer">
          <div>
            <h1 className="infoHeaderText">Contact</h1>
          </div>
          <div>
            <h2>Phone</h2>
            <p>(713) 460-9459</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>admin@donutworld.net</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information;