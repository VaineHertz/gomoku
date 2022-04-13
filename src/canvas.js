import React, {useRef, useEffect} from 'react';
import {emptyBoard} from './board.js';

function resetBoard(){
  const board = emptyBoard();
  for (let i = 0; i < 15; i++){
    board.grid.push([])
    for (let j = 0; j < 15; j++){
    board.grid[i].push(`   `)
    }
  }
  board.pieces.white.push([0,0,true]);
  board.pieces.black.push([0,0,true])
  console.log(board)
  return board;
}

//initialize a 15x15 board
let board = resetBoard();

function offerDraw(){
  if (window.confirm("Accept draw?")){
    console.log("Resetting");
    board = resetBoard();
    console.log(board)
  }
}

const Canvas = props => {
  
    const canvasRef = useRef(null)
  
    const getClickPos = (canvas, event) => {
      if (board.pieces.turn == 'black')
        board.pieces.black.push([event.offsetX, event.offsetY, false]);
      else if (board.pieces.turn == 'white')
        board.pieces.white.push([event.offsetX, event.offsetY, false]);
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
  
    function drawPiece(context, color, x, y){
      context.beginPath();
      context.arc(x, y, 10, 0, 2 * Math.PI, false);
      context.fillStyle = color;
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = color == 'white' ? 'black' : 'white';
      context.stroke();
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
            for (let i in board.pieces.white){
              let clickX = board.pieces.white[i][0];
              let clickY = board.pieces.white[i][1];
              if (clickX > x - 16 && clickX < x + 16 &&
              clickY > y - 16 && clickY < y + 16 &&
              board.grid[Math.round(x / 32 - 1)][Math.round(y / 32 - 1)] != "BLK"){
                drawPiece(context, 'white', x, y)
                board.grid[Math.round(x / 32 - 1)][Math.round(y / 32 - 1)] = "WHT";
                board.pieces.white[i][2] = true;
              }
            }
  
            /* draw black pieces */
            for (let i in board.pieces.black){
              let clickX = board.pieces.black[i][0];
              let clickY = board.pieces.black[i][1];
              if (clickX > x - 16 && clickX < x + 16
                && clickY > y - 16 && clickY < y + 16 &&
                board.grid[Math.round(x / 32 - 1)][Math.round(y / 32 - 1)] != "WHT"){
                  drawPiece(context, 'black', x, y)
                board.grid[Math.round(x / 32 - 1)][Math.round(y / 32 - 1)] = "BLK";
                board.pieces.black[i][2] = true;
              }
            }
          }
        }
  
        /* print grid array to console */
        let gridString = "";
        for (let y = 0; y < 15; y++){
          gridString += "\n"
          for (let x = 0; x < 15; x++){
            gridString += `${x + 1},${y + 1}[${board.grid[x][y]}]`
          }
        }
        console.log(gridString)
  
        /* check to see if 5 in a row has been achieved */
        for (let x = 0; x < 11; x++){
          for (let y = 0; y < 15; y++){
            if (board.grid[x][y] == 'BLK' || board.grid[x][y] == 'WHT'){
              /* check for a horizontal 5 */
              if(board.grid[x][y] == board.grid[x + 1][y] &&
                board.grid[x][y] == board.grid[x + 2][y] &&
                board.grid[x][y] == board.grid[x + 3][y] &&
                board.grid[x][y] == board.grid[x + 4][y]){
                  console.log("WINNERWINNERWINNERWINNERWINNER")
              }
            }
          }
        }
  
        /* check to see if a player has finished turn by 
        placing a true piece */
        console.log('black '+board.pieces.black[board.pieces.black.length - 1][2])
        console.log('white '+board.pieces.white[board.pieces.white.length - 1][2])
        if (board.pieces.black[board.pieces.black.length - 1][2] &&
          board.pieces.white[board.pieces.white.length - 1][2]){
          if (board.pieces.turn == 'black'){
              board.pieces.turn = 'white'
              document.getElementById('whosturn').innerText = "It is white's turn";
          }
          else if (board.pieces.turn == 'white'){
              board.pieces.turn = 'black'
              document.getElementById('whosturn').innerText = "It is black's turn";  
          }
          console.log(`${board.pieces.turn}'s turn`)
        }
      })
      /* draw comes here */
      draw(context)
    }, [draw])
    
    return <canvas ref={canvasRef} {...props}/>
}

export {Canvas, board, offerDraw};