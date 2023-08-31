const hourEl = document.getElementById("hour") 
const minutesEl = document.getElementById("minutes") 
const secondsEl = document.getElementById("seconds") 
const AmPmEl = document.getElementById("AmPm") 

function uppdateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let AmPm = "AM"

    if(h > 12)
    {
        h = h-12;
        AmPm ="PM"
    }

    h = h < 10 ? "0" + h : h; 
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    AmPmEl.innerText = AmPm;
    setTimeout(()=>{
      uppdateclock()
    }, 1000)
}

uppdateclock()