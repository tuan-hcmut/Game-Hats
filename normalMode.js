document.onkeydown = checkKey;
var gameEnd = false;
var gameEnd1 = false;
const randomCharacter = document.querySelector('img');
while(true){
	const randomCha = Math.floor(Math.random() * 5);
	if(randomCha === 1){
	randomCharacter.src = "pack/rpg-pack/chars/gabe/gabe-idle-run.png";
    break;
	}
	if(randomCha === 2){
	randomCharacter.src = "pack/rpg-pack/chars/hat-guy/hat-guy.png";
    break;
	}
	if(randomCha === 3){
	randomCharacter.src = "pack/rpg-pack/chars/mani/mani-idle-run.png";
	break;
	}	
	if(randomCha === 4){
	randomCharacter.src = "pack/rpg-pack/chars/sensei/sensei.png";
	break;
	}		
};
let x1 = -1; let x2 = -1; let y1 = -1; let y2 = -1; /// save the location of hats 
const numOfHat = 2;
const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: ${numOfHat}</h2>`;

let checkLost = 0; 
class Field {
	constructor (level){
		this._level = level;
	}
	
	get level(){
		return this._level;
	}
	
	set level(newLevel){
		this._level = newLevel;
	}
    
	static generateField(width, height){
    // make backgound by matrix with n*m element 
    let tempField = new Array(width);
    for (let i = 0; i < width; i++) {
		tempField[i] = new Array(height);
    }

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
		  const count = Math.floor(Math.random()*5)
			  if(count ===0 || count === 4){
				tempField[i][j] = 0;
			  }else if(count === 1 || count === 3 || count ===2){
				tempField[i][j] = 1;
			  }
      }
    }
 // create random holes

    tempField[0][1] = 0;tempField[0][2] = 0;tempField[1][2] = 0;tempField[2][2] = 0;tempField[2][3] = 0;tempField[3][3] = 0;tempField[4][3] = 0;tempField[4][4] = 0;   tempField[4][5] = 0;tempField[4][6] = 0;   
    tempField[3][6] = 0;tempField[3][7] = 0;   tempField[3][8] = 0;   tempField[2][8] = 0;   tempField[2][9] = 0;tempField[2][10] = 0;tempField[3][10] = 0;tempField[4][10] = 0;tempField[4][11] = 0;tempField[4][12] = 0;tempField[3][12] = 0;tempField[3][13] = 0;tempField[2][13] = 0;tempField[1][13] = 0;tempField[1][14] = 0;tempField[1][15] = 0;tempField[2][15] = 0;tempField[2][16] = 0;tempField[3][16] = 0;tempField[4][16] = 0;tempField[5][16] = 0;tempField[5][15] = 0;tempField[5][14] = 0;tempField[6][14] = 0;tempField[7][14] = 0;tempField[8][14] = 0;tempField[8][15] = 0;tempField[8][16] = 0;
    tempField[8][17] = 0;tempField[9][17] = 0;tempField[10][17] = 0;tempField[10][16] = 0;tempField[11][16] = 0;tempField[11][15] = 0;tempField[11][14] = 0;tempField[12][14] = 0;tempField[12][13] = 0;tempField[12][12] = 0;tempField[13][12] = 0;tempField[13][11] = 0;tempField[13][10] = 0;tempField[13][9] = 0;tempField[12][9] = 0;tempField[12][8] = 0;tempField[12][7] = 0;
    tempField[11][7] = 0;tempField[11][6] = 0;tempField[10][6] = 0;tempField[10][5] = 0;tempField[10][4] = 0;tempField[11][4] = 0;tempField[11][3] = 0;tempField[12][3] = 0;tempField[13][3] = 0;tempField[14][3] = 0;tempField[14][4] = 0;tempField[15][4] = 0;tempField[15][5] = 0;tempField[16][5] = 0;tempField[17][5] = 0;tempField[17][6] = 0;tempField[18][6] = 0;tempField[19][6] = 0;tempField[19][5] = 0;tempField[20][5] = 0;tempField[21][5] = 0;tempField[21][6] = 0;
    tempField[22][6] = 0;tempField[22][7] = 0;tempField[22][8] = 0;tempField[21][8] = 0;tempField[20][8] = 0;tempField[20][9] = 0;tempField[19][9] = 0;tempField[19][10] = 0;
    tempField[19][11] = 0;tempField[18][11] = 0;tempField[18][12] = 0;tempField[18][13] = 0;tempField[19][13] = 0;tempField[19][14] = 0;tempField[20][14] = 0;
    tempField[20][15] = 0;tempField[20][16] = 0;tempField[21][16] = 0;tempField[21][17] = 0;tempField[21][18] = 0;tempField[22][18] = 0;tempField[22][19] = 0;
    tempField[22][20] = 0;tempField[22][21] = 0;tempField[21][21] = 0;tempField[20][21] = 0;tempField[20][22] = 0;tempField[19][22] = 0;tempField[19][23] = 0;tempField[19][24] = 0;
    tempField[18][24] = 0;tempField[18][25] = 0;tempField[18][26] = 0;tempField[19][26] = 0;tempField[20][26] = 0;tempField[20][25] = 0;tempField[21][25] = 0;tempField[10][18] = 0;
    tempField[10][19] = 0;tempField[9][19] = 0;tempField[9][20] = 0;tempField[9][21] = 0;tempField[8][21] = 0;tempField[8][22] = 0;tempField[8][23] = 0;tempField[9][23] = 0;
    tempField[10][23] = 0;tempField[9][24] = 0;tempField[9][25] = 0;tempField[8][25] = 0;tempField[8][26] = 0;tempField[8][27] = 0;tempField[7][27] = 0;tempField[6][27] = 0;
    tempField[6][26] = 0;tempField[5][26] = 0;tempField[4][26] = 0;tempField[4][27] = 0;tempField[3][27] = 0;tempField[3][28] = 0;tempField[3][29] = 0;tempField[7][28] = 0;
    tempField[7][29] = 0;tempField[7][30] = 0;tempField[8][30] = 0;tempField[9][30] = 0;tempField[9][31] = 0;tempField[10][31] = 0;tempField[10][32] = 0;tempField[11][32] = 0;
    tempField[11][33] = 0;tempField[11][34] = 0;tempField[11][35] = 0;tempField[12][35] = 0;tempField[12][36] = 0;tempField[13][36] = 0;tempField[13][37] = 0;
    tempField[14][37] = 0;tempField[14][38] = 0;tempField[15][38] = 0;tempField[16][38] = 0;tempField[16][39] = 0;tempField[16][40] = 0;tempField[17][40] = 0;tempField[17][41] = 0;
    tempField[18][41] = 0;tempField[19][41] = 0;tempField[19][40] = 0;tempField[19][39] = 0;tempField[19][38] = 0;tempField[20][38] = 0;tempField[20][37] = 0;
    tempField[21][37] = 0;tempField[21][36] = 0;tempField[21][35] = 0;tempField[21][34] = 0;tempField[20][34] = 0;tempField[20][33] = 0;tempField[20][32] = 0;
    tempField[19][32] = 0;tempField[19][31] = 0;tempField[19][30] = 0;tempField[18][42] = 0;tempField[18][43] = 0;tempField[18][44] = 0;tempField[17][44] = 0;
    tempField[17][45] = 0;tempField[17][46] = 0;tempField[16][46] = 0;tempField[15][46] = 0;tempField[15][47] = 0;tempField[14][47] = 0;tempField[14][48] = 0;tempField[12][48] = 0;
    tempField[13][48] = 0;tempField[12][49] = 0; tempField[11][49] = 0; tempField[10][49] = 0; tempField[10][50] = 0; tempField[10][51] = 0; tempField[9][51] = 0;tempField[8][51] = 0;tempField[8][50] = 0;tempField[8][49] = 0;tempField[7][49] = 0;tempField[6][49] = 0;tempField[6][48] = 0;tempField[5][48] = 0;tempField[5][47] = 0;tempField[4][47] = 0;tempField[4][46] = 0;tempField[4][45] = 0;

		return(tempField);
	}
	//Print Field method creates full HTML string to add via innerHTML. 
	//Operation is expensive, so must be done in one go.
	printField(){
		let i = 0;
		let j = 0;
		let tempString = "";
		let tempString2 = "";
		let tempString3 = "";
		let sprite = "";
		for (i=0; i < this._level.length; i++){
			tempString2 = "";
			for (j=0; j < this._level[0].length; j++){
				//Create the html string and positions each sprite
				if (this._level[i][j] === 0){
					sprite = "pack/rpg-pack/props n decorations/generic-rpg-barrel01.png";
					//console.log("location " + i + ", " + j + " is a barrel.");
				}
				else if(this._level[i][j] === 1){
					sprite = "pack/rpg-pack/props n decorations/hole.png";
					//console.log("Not a barrel");
				}
				else if(this._level[i][j] === 2){
					sprite = "pack/rpg-pack/props n decorations/generic-rpg-fence10.png";
				}
				tempString = "<img id='x" + i + "y" + j + "' class='BGTile' style='top:" + ((24 * i)+5) + "px; left:" + ((24 * j)+5) + "px' src='" + sprite + "'>"
				//console.log(tempString);
				tempString2 += tempString;
			}
			//console.log(tempString2);
			tempString3 += tempString2;
		}	
		//console.log("Big string is " + tempString3);
		document.getElementById('gamearea').innerHTML += tempString3;
	}
}


let playerx = 0;
let playery = 0;








//Stop arrow keys moving the screen around
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

//Check win condition
function checkWin() {
	//console.log("Position x is " + playerx + " and position y is " + playery);
	if (playery === x1 && playerx === y1) {  
		const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 1</h2>`;
		gameEnd = true;
	}
	if (playery === x2 && playerx === y2) {   
		const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 1</h2>`;
		gameEnd1 = true;
	  }
    if (gameEnd === true && gameEnd1 === true) {
		const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 0</h2>`;

		console.log("win");
		document.getElementById("winMessage").style.display=("inline");
	}

}

//Check if you fell down a hole
function checkLoss() {

	if(myField.level[playery][playerx] === 1){
		document.getElementById("loseMessage").style.display=("inline");
		console.log("lose");
		checkLost = 1;
		gameEnd = true;
	}
}

	const myField = new Field(Field.generateField(23,57));
let playGame = function(){
	//const myField = new Field(Field.generateField(32,16));
	let hats = Math.floor(Math.random()*3);
    if(hats === 0){
	myField.level[21][24] = 2;
    myField.level[4][29] = 2;
	x1 = 21; x2 = 4; y1 = 24; y2 = 29;
    }else if(hats === 1){
    myField.level[5][45] = 2;
    myField.level[21][24] = 2;
	x1 = 5; x2 = 21; y1 = 45; y2 = 24;

    }else if(hats === 2){
    myField.level[4][29] = 2;
    myField.level[5][45] = 2;
	x1 = 4; x2 = 5; y1 = 29; y2 = 45;

    }

	myField.printField();
}

//Keys to move the player
function checkKey(e) {
    
    e = e || window.event;

    if (e.keyCode === 38 || e.keyCode === 87) {
	if (playery>0 && (!gameEnd || !gameEnd1) && checkLost !== 1){
	    	playery--;
		//Move player 24px (player dimension) in the desired direction
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
		checkLoss();
	}
    }
    else if (e.keyCode == 40 || e.keyCode === 83) {
        if (playery<22 && (!gameEnd || !gameEnd1) && checkLost !== 1){
        	playery++;
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
		checkLoss();
        }
    }
    else if (e.keyCode == 37 || e.keyCode === 65) {
//Moving left
	if (playerx>0 && (!gameEnd || !gameEnd1) && checkLost !== 1){
	    	playerx--;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
		checkLoss();
	}
    }
    else if (e.keyCode == 39 || e.keyCode === 68) {
//Moving right
	if (playerx<56 && (!gameEnd || !gameEnd1) && checkLost !== 1){
	    	playerx++;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
		checkLoss();
	}
    }

}

