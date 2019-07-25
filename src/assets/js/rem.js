export default function(){
let screenWidth = parseInt(document.body.clientWidth);
if(screenWidth >= 700)
screenWidth = 700
let fontSize = parseInt(screenWidth/1080*100);
document.documentElement.style.fontSize = fontSize + 'px';
}