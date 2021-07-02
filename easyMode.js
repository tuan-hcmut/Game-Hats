document.onkeydown = checkKey;
var gameEnd = false;
const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 1</h2>`;
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
			  }else if(count === 1 || count === 3){
				tempField[i][j] = 1;
			  }
      }
    }
	tempField[1][0] = 0;tempField[2][0] = 0;tempField[3][0] = 0;tempField[4][0] = 0;tempField[4][1] = 0;tempField[4][2] = 0;tempField[5][2] = 0;tempField[6][2] = 0;tempField[6][3] = 0;tempField[6][4] = 0;tempField[6][5] = 0;tempField[7][5] = 0;tempField[8][5] = 0;tempField[8][4] = 0;tempField[8][3] = 0;tempField[9][4] = 0;tempField[10][4] = 0;tempField[11][4] = 0;tempField[12][4] = 0;tempField[10][3] = 0;tempField[10][2] = 0;tempField[11][2] = 0;tempField[12][2] = 0;tempField[13][2] = 0;tempField[14][2] = 0;tempField[14][3] = 0;tempField[14][4] = 0;tempField[14][5] = 0;tempField[15][5] = 0;tempField[16][5] = 0;tempField[17][5] = 0;tempField[18][5] = 0;tempField[18][6] = 0;tempField[18][7] = 0;tempField[18][8] = 0;
	tempField[18][9] = 0;tempField[18][10] = 0;tempField[17][10] = 0;tempField[17][11] = 0;tempField[17][12] = 0;tempField[17][13] = 0;tempField[17][14] = 0;tempField[16][14] = 0;tempField[15][14] = 0;tempField[14][14] = 0;tempField[14][15] = 0;tempField[14][16] = 0;tempField[14][17] = 0;tempField[13][17] = 0;tempField[12][17] = 0;tempField[11][17] = 0;tempField[11][18] = 0;tempField[11][19] = 0;tempField[11][20] = 0;tempField[11][21] = 0;tempField[12][21] = 0;tempField[13][21] = 0;tempField[13][22] = 0;tempField[13][23] = 0;tempField[13][24] = 0;tempField[13][25] = 0;tempField[13][26] = 0;tempField[13][27] = 0;tempField[12][27] = 0;tempField[12][28] = 0;tempField[11][28] = 0;tempField[11][29] = 0;tempField[11][30] = 0;tempField[11][31] = 0;tempField[10][31] = 0;tempField[10][32] = 0;tempField[10][33] = 0;tempField[10][34] = 0;tempField[9][34] = 0;tempField[9][35] = 0;tempField[9][36] = 0;tempField[8][36] = 0;tempField[7][36] = 0;tempField[6][36] = 0;tempField[6][35] = 0;tempField[6][34] = 0;tempField[6][33] = 0;tempField[7][33] = 0;tempField[8][33] = 0;
  // create random holes
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
	if (myField.level[playery][playerx] === 2) {
		const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 0</h2>`;

		console.log("win");
		document.getElementById("winMessage").style.display=("inline");
		gameEnd = true;
	}
}

//Check if you fell down a hole
function checkLoss() {
	if(myField.level[playery][playerx] === 1){
		document.getElementById("loseMessage").style.display=("inline");
		console.log("lose");
		gameEnd = true;
	}
}

	const myField = new Field(Field.generateField(26,63));
let playGame = function(){
	//const myField = new Field(Field.generateField(32,16));
	let hatx = Math.floor(62*Math.random());
	let haty = Math.floor(26*Math.random());
	myField.level[8][32] = 2;
	myField.printField();
}

//Keys to move the player
function checkKey(e) {
    
    e = e || window.event;

    if (e.keyCode === 38 || e.keyCode === 87) {
	if (playery>0 && !gameEnd){
	    	playery--;
		//Move player 24px (player dimension) in the desired direction
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
		checkLoss();
	}
    }
    else if (e.keyCode == 40 || e.keyCode === 83) {
        if (playery<25 && !gameEnd){
        	playery++;
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
		checkLoss();
        }
    }
    else if (e.keyCode == 37 || e.keyCode === 65) {
//Moving left
	if (playerx>0 && !gameEnd){
	    	playerx--;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
		checkLoss();
	}
    }
    else if (e.keyCode == 39 || e.keyCode === 68) {
//Moving right
	if (playerx<62 && !gameEnd){
	    	playerx++;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
		checkLoss();
	}
    }

}
