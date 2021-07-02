document.onkeydown = checkKey;
var gameEnd = false;
var gameEnd1 = false;
var gameEnd2 = false;
let checkLost = 0;
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
let x1 = -1; let x2 = -1; let y1 = -1; let y2 = -1; let x3 = -1; let y3 = -1;

const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 3</h2>`;

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
		  }else if(count === 1 || count === 3 || count === 2){
				tempField[i][j] = 1;
			  }
      }
    }



    tempField[0][1] = 0;tempField[1][1] = 0;tempField[2][1] = 0;tempField[2][2] = 0;tempField[3][2] = 0;tempField[4][2] = 0;tempField[4][1] = 0;tempField[5][1] = 0;tempField[0][2] = 0;tempField[0][3] = 0;tempField[0][4] = 0;tempField[1][4] = 0;tempField[1][5] = 0;tempField[1][6] = 0;tempField[2][6] = 0;tempField[3][6] = 0;tempField[3][5] = 0;tempField[4][5] = 0;tempField[5][5] = 0;tempField[5][6] = 0;tempField[6][6] = 0;tempField[7][6] = 0;tempField[7][5] = 0;tempField[7][4] = 0;tempField[8][3] = 0;tempField[9][3] = 0;tempField[9][2] = 0;tempField[10][2] = 0;tempField[11][2] = 0;tempField[12][2] = 0;tempField[12][3] = 0;tempField[12][4] = 0;tempField[12][5] = 0;tempField[13][4] = 0;tempField[14][4] = 0;tempField[15][4] = 0;
    tempField[14][3] = 0;tempField[14][2] = 0;tempField[15][2] = 0;tempField[16][2] = 0;tempField[16][1] = 0;tempField[17][1] = 0;tempField[18][1] = 0;tempField[18][2] = 0;tempField[19][2] = 0;tempField[19][3] = 0;tempField[19][4] = 0;tempField[20][4] = 0;tempField[20][5] = 0;tempField[20][6] = 0;tempField[19][6] = 0;tempField[19][7] = 0;tempField[19][8] = 0;tempField[19][9] = 0;tempField[20][9] = 0;tempField[20][10] = 0;tempField[20][11] = 0;tempField[21][11] = 0;tempField[21][12] = 0;tempField[21][13] = 0;tempField[20][13] = 0;tempField[20][14] = 0;tempField[20][15] = 0;tempField[19][15] = 0;tempField[18][15] = 0;tempField[20][13] = 0;tempField[18][16] = 0;tempField[18][17] = 0;tempField[17][17] = 0;tempField[16][17] = 0;tempField[15][17] = 0;tempField[17][18] = 0;tempField[17][19] = 0;tempField[17][20] = 0;tempField[18][20] = 0;tempField[18][21] = 0;
    tempField[14][5] = 0;tempField[14][6] = 0;tempField[14][7] = 0;tempField[13][7] = 0;tempField[13][8] = 0;tempField[13][9] = 0;tempField[12][9] = 0;tempField[11][9] = 0;tempField[11][10] = 0;tempField[11][11] = 0;tempField[10][11] = 0;tempField[9][11] = 0;tempField[9][12] = 0;tempField[9][13] = 0;tempField[10][13] = 0;tempField[10][14] = 0;tempField[10][15] = 0;tempField[10][16] = 0;tempField[11][16] = 0;tempField[12][16] = 0;tempField[13][18] = 0;tempField[14][18] = 0;tempField[14][15] = 0;tempField[13][15] = 0;tempField[12][17] = 0;
    tempField[12][18] = 0;tempField[12][19] = 0;tempField[12][20] = 0;tempField[11][20] = 0;tempField[11][21] = 0;tempField[11][22] = 0;tempField[10][22] = 0;tempField[9][22] = 0;tempField[9][21] = 0;tempField[8][21] = 0;tempField[7][21] = 0;tempField[7][22] = 0;tempField[7][23] = 0;tempField[6][23] = 0;tempField[5][23] = 0;tempField[5][24] = 0;tempField[5][25] = 0;tempField[4][25] = 0;tempField[4][26] = 0;tempField[4][27] = 0;tempField[3][27] = 0;tempField[3][28] = 0;tempField[3][29] = 0;tempField[2][29] = 0;tempField[2][30] = 0;tempField[2][31] = 0;tempField[2][32] = 0;tempField[3][32] = 0;tempField[4][32] = 0;tempField[4][33] = 0;tempField[4][34] = 0;tempField[5][34] = 0;tempField[6][34] = 0;tempField[6][35] = 0;tempField[6][36] = 0;tempField[7][36] = 0;tempField[8][36] = 0;tempField[8][35] = 0;tempField[8][34] = 0;tempField[8][33] = 0;tempField[9][32] = 0;tempField[10][32] = 0;tempField[11][32] = 0;tempField[11][31] = 0;tempField[11][30] = 0;tempField[12][30] = 0;tempField[13][30] = 0;tempField[13][29] = 0;tempField[14][29] = 0;tempField[15][29] = 0;tempField[15][28] = 0;tempField[15][27] = 0;tempField[14][27] = 0;tempField[14][26] = 0;tempField[14][25] = 0;tempField[15][25] = 0;tempField[15][24] = 0;tempField[15][23] = 0;tempField[16][23] = 0;tempField[17][23] = 0;tempField[17][24] = 0;tempField[18][24] = 0;tempField[18][23] = 0;
    tempField[19][22] = 0;tempField[20][22] = 0;tempField[21][22] = 0;tempField[21][23] = 0;tempField[21][24] = 0;tempField[21][25] = 0;tempField[20][25] = 0;tempField[20][26] = 0;tempField[20][27] = 0;tempField[19][27] = 0;tempField[19][28] = 0;tempField[19][29] = 0;tempField[18][29] = 0;tempField[18][30] = 0;tempField[18][31] = 0;tempField[17][31] = 0;tempField[17][32] = 0;tempField[17][33] = 0;tempField[16][33] = 0;tempField[16][34] = 0;tempField[16][35] = 0;tempField[16][36] = 0;tempField[15][36] = 0;tempField[14][36] = 0;tempField[14][37] = 0;tempField[14][38] = 0;tempField[15][38] = 0;tempField[15][39] = 0;tempField[15][40] = 0;tempField[16][40] = 0;tempField[17][40] = 0;tempField[17][41] = 0;tempField[17][42] = 0;tempField[16][42] = 0;tempField[16][43] = 0;tempField[16][44] = 0;tempField[15][44] = 0;tempField[14][44] = 0;tempField[14][43] = 0;tempField[13][43] = 0;tempField[12][43] = 0;tempField[12][42] = 0;tempField[12][41] = 0;tempField[11][41] = 0;tempField[10][41] = 0;tempField[10][42] = 0;tempField[9][42] = 0;tempField[8][42] = 0;tempField[8][43] = 0;tempField[8][41] = 0;tempField[8][40] = 0;tempField[8][39] = 0;tempField[9][39] = 0;tempField[9][38] = 0;tempField[9][37] = 0;tempField[8][44] = 0;tempField[7][44] = 0;tempField[6][44] = 0;tempField[6][43] = 0;tempField[6][42] = 0;tempField[5][42] = 0;tempField[5][41] = 0;tempField[5][40] = 0;tempField[5][39] = 0;tempField[6][39] = 0;tempField[6][38] = 0;tempField[6][37] = 0;
    tempField[14][17] = 0;tempField[15][16] = 0;tempField[12][15] = 0;
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
 
        if(playery === x1 && playerx === y1 && gameEnd1 === false && gameEnd2 === false){
        gameEnd = true;
        const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 2</h2>`;
        }else if(playery === x2 && playerx === y2 && gameEnd === false && gameEnd2 === false){
        gameEnd1 = true;
        const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 2</h2>`;
        }else if(playery === x3 && playerx === y3 && gameEnd1 === false && gameEnd === false){
        gameEnd2 = true;
        const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 2</h2>`;
        }else if(playery === x1 && playerx === y1 && (gameEnd1 === false || gameEnd2 === false)){
        gameEnd = true;
        const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 1</h2>`;     
        }else if(playery === x2 && playerx === y2 && (gameEnd === false || gameEnd2 === false)){
        gameEnd1 = true;
        const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 1</h2>`;
        }else if(playery === x3 && playerx === y3 && (gameEnd1 === false || gameEnd === false)){
        gameEnd2 = true;
        const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 1</h2>`;
        }else if((playery === x1 && playerx === y1) && gameEnd1 === true && gameEnd2 === true){
        gameEnd = true;
		const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 0</h2>`;
        console.log("win");
		document.getElementById("winMessage").style.display=("inline");
    }else if((playery === x2 && playerx === y2) && gameEnd === true && gameEnd2 === true){
        gameEnd1 = true;
        const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 0</h2>`;
        console.log("win");
        document.getElementById("winMessage").style.display=("inline");
	}else if((playery === x3 && playerx === y3) && gameEnd1 === true && gameEnd === true){
        gameEnd2 = true;
		const numOfHats = document.getElementById('numHat').innerHTML = `<h2>Hats remaining: 0</h2>`;
        console.log("win");
		document.getElementById("winMessage").style.display=("inline");    
    }
}
}
//Check if you fell down a hole
function checkLoss() {
	if(myField.level[playery][playerx] === 1){
		document.getElementById("loseMessage").style.display=("inline");
		console.log("lose");
        checkLost = 1;
	}
}

	const myField = new Field(Field.generateField(23,57));
let playGame = function(){
	//const myField = new Field(Field.generateField(32,16));
    myField.level[7][3] = 2;
    x1 = 7; y1 = 3;
	myField.level[18][22] = 2;
    x2 = 18; y2 = 22;
	myField.level[8][32] = 2;
    x3 = 8; y3 = 32;
	myField.printField();
}

//Keys to move the player
function checkKey(e) {
    if(playerx === 22 && playery === 18){
        myField.level[playery][playerx+1] = 1;
        let sprite = "pack/rpg-pack/props n decorations/hole.png";
        let tempString = "<img id='x" + playery + "y" + playerx + "' class='BGTile' style='top:" + ((24 * playery)+5) + "px; left:" + ((24 * playerx)+5) + "px' src='" + sprite + "'>"
        document.getElementById('gamearea').innerHTML += tempString;
       
    }
    e = e || window.event;
    if( gameEnd !== true || gameEnd2 !== true || gameEnd1 !== true){
   while(true){
       let randomHoleX = Math.floor(Math.random()*22);
       let randomHoleY = Math.floor(Math.random()*56);
       if(myField.level[randomHoleX][randomHoleY] === 0){
          myField.level[randomHoleX][randomHoleY] = 1;
          let sprite = "pack/rpg-pack/props n decorations/hole.png";
          let tempString = "<img id='x" + randomHoleX + "y" + randomHoleY + "' class='BGTile' style='top:" + ((24 * randomHoleX)+5) + "px; left:" + ((24 * randomHoleY)+5) + "px' src='" + sprite + "'>"
          document.getElementById('gamearea').innerHTML += tempString;
          break;
       }
   }
}

    if (e.keyCode === 38 || e.keyCode === 87) {
	if (playery>0 && (!gameEnd || !gameEnd2 || !gameEnd1) && checkLost !== 1){
	    	playery--;
		//Move player 24px (player dimension) in the desired direction
        myField.level[playery +1][playerx] = 1;
        let sprite = "pack/rpg-pack/props n decorations/hole.png";
        let tempString = "<img id='x" + playery + "y" + playerx + "' class='BGTile' style='top:" + ((24 * playery)+5) + "px; left:" + ((24 * playerx)+5) + "px' src='" + sprite + "'>"
        document.getElementById('gamearea').innerHTML += tempString;
  
        document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		
        checkWin();
		checkLoss();
	}
    }
    else if (e.keyCode == 40 || e.keyCode === 83) {
        if (playery<22 && (!gameEnd || !gameEnd2 || !gameEnd1) && checkLost !== 1){
        	playery++;
            myField.level[playery -1][playerx] = 1;
            let sprite = "pack/rpg-pack/props n decorations/hole.png";
            let tempString = "<img id='x" + playery + "y" + playerx + "' class='BGTile' style='top:" + ((24 * playery)+5) + "px; left:" + ((24 * playerx)+5) + "px' src='" + sprite + "'>"
            document.getElementById('gamearea').innerHTML += tempString;
      
		document.getElementById("playerChar").style.top=((24 * playery) + 'px');
		checkWin();
		checkLoss();
        }
    }
    else if (e.keyCode == 37 || e.keyCode === 65) {
//Moving left
	if (playerx>0 && (!gameEnd || !gameEnd2 || !gameEnd1) && checkLost !== 1){
	    	playerx--;
            myField.level[playery][playerx +1] = 1;
            let sprite = "pack/rpg-pack/props n decorations/hole.png";
            let tempString = "<img id='x" + playery + "y" + playerx + "' class='BGTile' style='top:" + ((24 * playery)+5) + "px; left:" + ((24 * playerx)+5) + "px' src='" + sprite + "'>"
            document.getElementById('gamearea').innerHTML += tempString;
           
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
		checkWin();
		checkLoss();
	}
    }
    else if (e.keyCode == 39 || e.keyCode === 68) {
//Moving right
	if (playerx<56 && (!gameEnd || !gameEnd2 || !gameEnd1) && checkLost !== 1){
	    	playerx++;
		document.getElementById("playerChar").style.left=((24 * playerx) + 'px');
        myField.level[playery][playerx -1] = 1;
        let sprite = "pack/rpg-pack/props n decorations/hole.png";
        let tempString = "<img id='x" + playery + "y" + playerx + "' class='BGTile' style='top:" + ((24 * playery)+5) + "px; left:" + ((24 * playerx)+5) + "px' src='" + sprite + "'>"
        document.getElementById('gamearea').innerHTML += tempString;
        document.getElementById("playerChar").style.left=((24 * playerx) + 'px');

        checkWin();
		checkLoss();
	}
    }

}
