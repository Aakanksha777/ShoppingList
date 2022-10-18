var words = "The healer and The killer." 
var counter =  0
var delInterval;

var text = document.getElementById("text2");

var stepInterval = setInterval(() => step(), 500); // to add single character inside id=text2 html element 

function step(){
    if(counter >= words.length) {
        clearInterval(stepInterval);
        delInterval = setInterval(() => del() , 500) // to delete single character inside id=text2 html element 
    }
    else{
        text.textContent += words[counter];
        counter++;
    }
}

function del(){
    if(counter == 0){
        clearInterval(delInterval);
        stepInterval = setInterval(() => step() , 500);
    }
    else{
        text.textContent = text.textContent.slice(0, -1)
        counter--;
    }
}



// clock
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();


// setTimeout :
// takes 2 arguments.
// first argument = callback function , 2nd argument = time in ms.
// after which callback is executed.

//  ek function ke andar dusra function ka argument pass krte HTMLDetailsElement. 

