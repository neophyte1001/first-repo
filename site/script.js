 

//Accessing the elements 
const secHand = document.querySelector('.seconds');
const minHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function setDate(){
    const now = new Date(); //Creating the object of Date.
    const sec = now.getSeconds(); //Getting seconds using date obj.
    const secDegree = ( (sec / 60) * 360 ) + 90; //Rotates 1deg each minute.
    // console.log(secDegree);
    secHand.style.transform = `rotate(${secDegree}deg)`;    
    console.log(sec);

    const min = now.getMinutes();
    console.log(min);
    const minDegree = ( (min / 60) * 360 ) + 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour= now.getHours();
    console.log(hour);
    const hourDegree = ( ( (hour) / 12) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
   
}
setInterval(setDate,1000);
