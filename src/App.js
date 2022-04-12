import React, {useRef, useEffect} from 'react';
//import $ from 'jquery';
import './App.css';
import './style.css';
/* import { FiPhoneCall } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi'; */
import './fonts/GreatVibes-Regular.ttf';

const pieces = {
  black: [],
  white: []
};

const Canvas = props => {
  
  const canvasRef = useRef(null)

  const getClickPos = (canvas, event) => {
    pieces.black.push([event.offsetX, event.offsetY, false])
  }
  
  useEffect(() => {
    const draw = ctx => {
      const p = ctx.canvas.height / 80;
      const cW = ctx.canvas.width * 0.97;
      const cH = ctx.canvas.height * 0.97;
      
      //draw grid 15x15
      for (let i = 0; i <= 480; i += 32){
        //console.log(`point X: ${i}`)
        ctx.moveTo(0.5 + i + p, p);
        ctx.lineTo(0.5 + i + p, cH + p)
      }
      for (let i = 0; i <= 480; i += 32) {
       // console.log(`point Y: ${i}`)
        ctx.moveTo(p, 0.5 + i + p);
        ctx.lineTo(cW + p, 0.5 + i + p);
      }
      //use black lines for the grid
      ctx.strokeStyle = "black";
      ctx.stroke()
    }


    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.addEventListener('mousedown', (e) => {

      getClickPos(canvas, e)
  
      //draw black pieces
      for (let x = 23; x < 480; x += 32){
        for (let y = 23; y < 480; y += 32){
          for (let i in pieces.black){
            let clickX = pieces.black[i][0];
            let clickY = pieces.black[i][1];
            context.fillRect(x, y - 16, 1, 16);
            if (clickX > x - 16 && clickX < x + 16
              && clickY > y - 16 && clickY < y + 16){
              context.fillRect(x, y, 15, 15);
              pieces.black[i][2] = true;
            }
          }
        }
      }
      console.log(`black pieces: ${pieces.black}`);
    })
    //Our draw come here
    draw(context)
  })
  
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

          <Canvas width="495" height="495"></Canvas>

          {/* */}
          <script src="modal.js"></script>
	  </body>
  </div>
  );
}

export default App;
