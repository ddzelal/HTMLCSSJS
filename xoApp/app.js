const board = document.getElementById('container')
const boardVals = [[null,null,null],[null,null,null],[null,null,null]]
let player = 1

function createMatrixEls(e){
    for (let i = 0; i < 3; i++) {
        row = document.createElement('div')
        row.classList.add('my_row')
        for (let j = 0; j < 3; j++) {
            cell = document.createElement('div')
            cell['coordinates'] = [i,j]
            cell['innerValue'] = null
            cell.classList.add('my_cell')
            cell.onclick = cellOnClick
            row.appendChild(cell)
        }
        board.appendChild(row)
    }
}

function isWinner(val) {
    let res = ""
    mDiag = []
    sDiag = []
    for (let i = 0; i < boardVals.length; i++) {
        if (boardVals[i].every(el => el === val)) {
            res = val + " is winner row"
        }
        col = []
        
        for (let j = 0; j < boardVals[i].length; j++) {
            col.push(boardVals[j][i])
            mDiag.push(boardVals[i][i])
            sDiag.push(boardVals[i][boardVals[i].length - 1 - j])
        }
        console.log('===========================================');
        console.log('col',col);
        console.log('mDiag',mDiag);
        console.log('sDiag',sDiag);
        // if (col.every(el => el === val)) {
        //     res = val + " is winner col"
        // }
        // if (mDiag.every(el => el === val)) {
        //     res = val + " is winner main diagonal"
        // }
        // if (sDiag.every(el => el === val)) {
        //     res = val + " is winner side diag"
        // }
    }
    return res
}

function cellOnClick(e) {
    if (e.target.innerHTML) {
        return
    }
    const cordI = Number(e.target.coordinates[0])
    const cordJ = Number(e.target.coordinates[1])
    if (player === 1) {
        e.target.innerHTML = 'X'
        e.target.innerValue = 1
        boardVals[cordI][cordJ] = 1
        e.target.style.backgroundColor = 'goldenrod'
        player = 2
    } else {
        e.target.style.backgroundColor = 'yellow'
        boardVals[cordI][cordJ] = 2
        e.target.innerHTML = 'O'
        e.target.innerValue = 2
        player = 1
    } 
    document.getElementById('winner').innerHTML = isWinner(e.target.innerValue)
}

createMatrixEls()






// document.querySelector('.my_cell').addEventListener('click',e => {
//     console.log('Test');
// })

// $(document).ready(function() {
//     createMatrixEls()
// });