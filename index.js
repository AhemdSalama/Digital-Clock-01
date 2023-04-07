// first adding the link of JS to the html code at the end of the body section
/*
 * first we need to get the (hour - minutes - seconds - AM ) elements
 */
// Create the variables that hold the elements
const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const ampmEl = document.getElementById("ampm");

// Create the function that update the time
function updateClock() {
    // get the current time
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let ms = new Date().getMilliseconds();
    let ampm = "AM";

    //set the AM according to hours
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    // adding second 0 digit in the single numbers (conditional statement)
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    // ms = ms < 10 ? "0" + ms : ms;

    //update the clock
    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    // millisecondsEl.innerText = ms;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();
