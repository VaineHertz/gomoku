import React from 'react';
import logo from './logo.svg';
import ART1 from './ART/1.jpg';
import ART2 from './ART/2.jpg';
import './App.css';
import './style.css';
import { FiPhoneCall } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import './fonts/GreatVibes-Regular.ttf';

function App() {
  return (
    <div className="App">
        <link rel="stylesheet" type="text/css" href="style.css" />
      <head>
		    <title>
		    	TONY PADILLA
	    	</title>
	    </head>
	    <body>
          <div className="info">
            <br/>
            <a href="https://www.instagram.com/tonypadilla.us/" target='_blank'><FiInstagram style={{ color: 'black'}} /></a>     <a href="mailto:me@tonypadilla.us"><FiMail style={{color:'black'}} /></a>   <a href="tel:2092759460"><FiPhoneCall style={{color:'black'}} /> <span style={{fontSize: '20px', verticalAlign: '10px', color: 'black'}}>(209) 275-9460</span></a>
          </div>
          <br />
          <div className="myName">Tony Padilla</div>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="modal.js"></script>
	  </body>
  </div>
  );
}

export default App;
