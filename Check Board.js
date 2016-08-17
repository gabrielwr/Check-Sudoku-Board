//TESTS

var validPuzzle =   [[ 8,9,5,7,4,2,1,3,6 ],
                    [ 2,7,1,9,6,3,4,8,5 ],
                    [ 4,6,3,5,8,1,7,9,2 ],
                    [ 9,3,4,6,1,7,2,5,8 ],
                    [ 5,1,7,2,3,8,9,6,4 ],
                    [ 6,8,2,4,5,9,3,7,1 ],
                    [ 1,5,9,8,7,4,6,2,3 ],
                    [ 7,4,6,3,2,5,8,1,9 ],
                    [ 3,2,8,1,9,6,5,4,7 ]];

var invalidPuzzle = [[ 8,4,5,7,4,4,1,3,6 ],
	                 [ 2,7,3,9,6,3,4,8,5 ],
	                 [ 4,6,3,5,8,1,7,9,2 ],
	                 [ 9,3,4,6,1,7,2,5,4 ],
	                 [ 5,1,7,2,3,8,9,6,4 ],
	                 [ 6,6,2,4,5,9,3,7,1 ],
	                 [ 4,5,9,8,9,4,6,2,3 ],
	                 [ 7,4,6,3,2,1,8,1,9 ],
	                 [ 3,2,4,1,9,6,5,4,7 ]];


/////////////////////////////
/// 	PROGRAM 		/////
/////////////////////////////

function getRow (board, n) {
	return board[n-1];
}
	
function getCol(board, n) {
	var returnArr = [];
	for(var i = 0; i < 9; i++) {
		returnArr.push(board[i][n-1]);
	}
	return returnArr;
}

function getMiniGrid(board, x, y) {
	var grid = [];
	for(var i = x; i < x + 3; i++) {
		var row = [];
		for(var j = y; j < y + 3; j++) {
			row.push(board[i][j]);
		}
		grid.push(row);
	}
	return grid;
}

function getAllGrids(board) {
	var gridsArr = [];
	for(var x = 0; x < 9; x += 3) {
		for(var y = 0; y < 9; y += 3 ) {
			gridsArr.push(getMiniGrid(board, x, y));
		}
	}
	return gridsArr;
}

function flattenGrid(grid) {
	var flattenedGrid = [];
	for(var i = 0; i < 3; i++) {
		for(var j = 0; j < 3; j++) {
			flattenedGrid.push(grid[i][j]);
		}
	}
	return checkNumbers(flattenedGrid);
}

function checkNumbers(arr) {
	for(var i = 1; i <= 9; i++) {
		if(arr.indexOf(i) === -1) {
			return false;
		}
	} 
	return true;
}

function checkRowsAndCols (board) {
	var testArr = [];
	for(var i = 1; i <= 9; i++) {
		testArr.push(getRow(board, i));
		testArr.push(getCol(board, i));
	}
	//if testArr does not pass check numbers, the board will be false
	for(var j = 0; j < testArr.length; j++) {
		if(!checkNumbers(testArr[j])) {
			return false;
		}
	}
	return true;
}

function checkGrids (board) {
	// check to see if each grid only contains numbers 1-9 //
	var gridsToCheck = getAllGrids(board);
	for(var k = 0; k < gridsToCheck.length; k++) {
		if(!flattenGrid(gridsToCheck[k])) {
			return false;
		}
	}
	return true;
}

function checkBoard(board) {
	if (checkRowsAndCols(board) && checkGrids(board)) {
		return true;
	}
	return false;
}
    
console.log(checkBoard(validPuzzle)); //--> true
console.log(checkBoard(invalidPuzzle)); //--> false

