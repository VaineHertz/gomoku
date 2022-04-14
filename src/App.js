import React from 'react';
import $ from 'jquery';
import './App.css';
import './style.css';
import {Canvas, offerDraw} from './canvas.js';
/* import { FiPhoneCall } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi'; */
import './fonts/GreatVibes-Regular.ttf';

function App() {
  return (
    <div className="App">
        <link rel="stylesheet" type="text/css" href="style.css" />
      <head>
		    <title>
		    	Gomoku
	    	</title>
	    </head>
	    <body>
          {/* */}

          <div id="score">P1 (black) 0 - 0 (white) P2</div>
          <Canvas width="495" height="495"></Canvas>
          <div id="whosturn">Black's turn to start</div>
          <div><button id='newGame'>NEW GAME</button></div>
          <button id="draw">OFFER DRAW</button>
          <button id="resign">RESIGN</button>


          {/* */}
          <script src="modal.js"></script>
	  </body>
  </div>
  );
}

export default App;
