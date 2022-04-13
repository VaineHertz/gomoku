function emptyBoard(){

    /* 15x15 grid in memory */
    let grid = [];
    for (let i = 0; i < 15; i++){
        grid.push([])
        for (let j = 0; j < 15; j++){
        grid[i].push(`   `)
        }
    }

    /* stores clicks and whether they are valid piece placements
    and also tracks whos turn it is */
    return {pieces: {
        black: [],
        white: [],
        turn: 'black'
    },
    grid}
    
};

export {emptyBoard};