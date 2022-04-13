import React, {useRef, useEffect} from 'react';
import $ from 'jquery';
import './App.css';
import './style.css';
/* import { FiPhoneCall } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi'; */
import './fonts/GreatVibes-Regular.ttf';

/* stores clicks and whether they are valid piece placements
and also tracks whos turn it is */
const pieces = {
  black: [],
  white: [],
  turn: 'black'
};

/* 15x15 grid in memory */
const grid = [];
for (let i = 0; i < 15; i++){
  grid.push([])
  for (let j = 0; j < 15; j++){
    grid[i].push(`   `)
  }
}

function clearSelection(){
  if (window.getSelection)
    window.getSelection().removeAllRanges();
  else if (document.selection)
    document.selection.empty();
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
    /* padding */
    const p = ctx.canvas.height / 80;
    /* set grid to 97% of canvas */
    const cW = ctx.canvas.width * 0.97;
    const cH = ctx.canvas.height * 0.97;
    
    /* draw a 15x15 grid*/
    for (let i = 0; i <= 480; i += 32){
      /* horizontal lines */
      ctx.moveTo(0.5 + i + p, p);
      ctx.lineTo(0.5 + i + p, cH + p)
    }
    for (let i = 0; i <= 480; i += 32) {
      /* vertical lines */
      ctx.moveTo(p, 0.5 + i + p);
      ctx.lineTo(cW + p, 0.5 + i + p);
    }
    /* use black lines for the grid */
    ctx.strokeStyle = "black";
    ctx.stroke()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.addEventListener('mousedown', (e) => {

      getClickPos(canvas, e)

      /* iterate through every tile */
      for (let x = 23; x < 480; x += 32){
        for (let y = 23; y < 480; y += 32){

          /* draw white pieces */
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

          /* draw black pieces */
          for (let i in pieces.black){
            let clickX = pieces.black[i][0];
            let clickY = pieces.black[i][1];
            if (clickX > x - 16 && clickX < x + 16
              && clickY > y - 16 && clickY < y + 16){
              context.fillStyle = 'black';
              context.fillRect(x - 8, y - 8, 15, 15);
              grid[Math.round(x / 32 - 1)][Math.round(y / 32 - 1)] = "BLK";
              pieces.black[i][2] = true;
            }
          }
        }
      }

      /* print grid array to console */
      let gridString = "";
      for (let y = 0; y < 15; y++){
        gridString += "\n"
        for (let x = 0; x < 15; x++){
          gridString += `${x + 1},${y + 1}[${grid[x][y]}]`
        }
      }
      console.log(gridString)

      /* check to see if 5 in a row has been achieved */
      for (let x = 0; x < 11; x++){
        for (let y = 0; y < 15; y++){
          if (grid[x][y] == 'BLK' || grid[x][y] == 'WHT'){
            /* check for a horizontal 5 */
            if(grid[x][y] == grid[x + 1][y] && grid[x][y] == grid[x + 2][y]
              && grid[x][y] == grid[x + 3][y] && grid[x][y] == grid[x + 4][y])
              {console.log("WINNERWINNERWINNERWINNERWINNER")
            }
          }
        }
      }

      /* check to see if a player has finished turn by 
      placing a true piece */
      if (pieces.turn == 'black' 
        && pieces.black[pieces.black.length - 1][2] == true){
          pieces.turn = 'white'
          document.getElementById('whosturn').innerHTML = "It is white's turn";
      }
      else if (pieces.turn == 'white'
            && pieces.white[pieces.white.length - 1][2] == true){
          pieces.turn = 'black'
          document.getElementById('whosturn').innerHTML = "It is black's turn";  
      }

      console.log(`${pieces.turn}'s turn`)
    })
    /* draw comes here */
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
          <div id="whosturn">It is black's turn</div>

          {/* */}
          <script src="modal.js"></script>
	  </body>
  </div>
  );
}

export default App;
