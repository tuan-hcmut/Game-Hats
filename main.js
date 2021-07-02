const words = new URLSearchParams(window.location.search);
function cleanAndCap (str){
    if(!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
  }
// put name inf into formLevel.html
let value = cleanAndCap(words.get('username'));

if (value === null){
    value = '...';
    const check = document.getElementById('putInf').innerHTML =  `<h1>Hello "${value}". Please choose the level game. </h1>`;
}else{
const check = document.getElementById('putInf').innerHTML =  `<h1>Hello "${value}". Welcome to FindHat Game. Please choose the level game. </h1>`;
}
function send(){
  alert('Mode nay random holes nên thắng thua hên xui nha :)')
}




