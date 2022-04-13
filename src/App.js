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
  white: [],
  turn: 'black'
};

const grid = [];

for (let i = 0; i < 15; i++){
  grid.push([])
  for (let j = 0; j < 15; j++){
    grid[i].push(`-${j + 1}-`)
  }
}

const Canvas = props => {
  
  const canvasRef = useRef(null)

  const getClickPos = (canvas, event) => {
    if (pieces.turn == 'black')
      pieces.black.push([event.offsetX, event.offsetY, false]);
    else if (pieces.turn == 'white')
      pieces.white.push([event.offsetX, event.offsetY, false]);
  }

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

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.addEventListener('mousedown', (e) => {

      getClickPos(canvas, e)

      //draw pieces
      for (let x = 23; x < 480; x += 32){
        for (let y = 23; y < 480; y += 32){
          for (let i in pieces.white){
            let clickX = pieces.white[i][0];
            let clickY = pieces.white[i][1];
            if (clickX > x - 16 && clickX < x + 16
              && clickY > y - 16 && clickY < y + 16){
              context.fillStyle = 'white';
              context.fillRect(x - 8, y - 8, 15, 15);
              grid[Math.round(x / 32 - 1)][Math.round(y / 32 - 1)] = "WHT";
              pieces.white[i][2] = true;
            }
          }
          for (let i in pieces.black){
            let clickX = pieces.black[i][0];
            let clickY = pieces.black[i][1];
            if (clickX > x - 16 && clickX < x + 16
              && clickY > y - 16 && clickY < y + 16){
              context.fillStyle = 'black';
              context.fillRect(x - 8, y - 8, 15, 15);
              grid[Math.round(x / 32 - 1)][Math.round(y / 32 - 1)] = "BLK";
              pieces.black[i][2] = true;
              //prints 2d grid array
              for (let j in grid)
                console.log(`COLUMN: ${Number(j) + 1} ${grid[j]}`);
            }
          }
        }
      }
      console.log(`${pieces.black[pieces.black.length - 1][2]}`)
      if (pieces.turn == 'black' 
        && pieces.black[pieces.black.length - 1][2] == true)
          pieces.turn = 'white'
      else if (pieces.turn == 'white'
            && pieces.white[pieces.white.length - 1][2] == true)
          pieces.turn = 'black'

      console.log(`${pieces.turn}'s turn`)
    })
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

          <Canvas width="495" height="495"></Canvas>

          {/* */}
          <script src="modal.js"></script>
	  </body>
  </div>
  );
}

export default App;
