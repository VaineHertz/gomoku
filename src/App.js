import React, {useRef, useEffect} from 'react';
import $ from 'jquery';
import './App.css';
import './style.css';
import { FiPhoneCall } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import './fonts/GreatVibes-Regular.ttf';


const Canvas = props => {
  
  const canvasRef = useRef(null)


  const draw = ctx => {
    const p = ctx.canvas.height / 80;
    const cW = ctx.canvas.width * 0.97;
    const cH = ctx.canvas.height * 0.97;

    for (let i = 0; i <= cW; i += cW / 15){
      ctx.moveTo(0.5 + i + p, p);
      ctx.lineTo(0.5 + i + p, cH + p)
    }
    for (let i = 0; i <= cH; i += cH / 15) {
      ctx.moveTo(p, 0.5 + i + p);
      ctx.lineTo(cW + p, 0.5 + i + p);
    }
    ctx.strokeStyle = "black";
    ctx.stroke()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    //Our draw come here
    draw(context)
  }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}

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

          <Canvas width="300" height="300"></Canvas>

          {/* */}
          <script src="modal.js"></script>
	  </body>
  </div>
  );
}

console.clear();

console.log($(document).height());

export default App;
