import * as React from 'react';

import './style.css'


const Information = () => {

  return(
    <div className="infoContainer">
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
  )
}

export default Information;