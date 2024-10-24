const containerE1=document.querySelector(".container")
const carrers=["YouTuber","web developer","freelancer","Instructor"];
let careerIndex=0
let characterIndex=0;
updateText();
function updateText(){
    characterIndex++
    containerE1.innerHTML=`<h1>I am a ${carrers[careerIndex].slice(0,characterIndex)}</h1>
    `;
    
    if(characterIndex == carrers[careerIndex].length){
    careerIndex++
    characterIndex=0
    }
    if(careerIndex==carrers.length){
        careerIndex=0;
    }
setTimeout(updateText,400);

}