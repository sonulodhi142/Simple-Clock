let h0 = document.querySelector("#hour");
let h1 = document.querySelector("#minute");
let h2 = document.querySelector("#second");

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    h0.style.transform = `rotate(${hrotation}deg)`;
    h1.style.transform = `rotate(${mrotation}deg)`;
    h2.style.transform = `rotate(${srotation}deg)`;
   // hour.style.transform = `rotate(${hrotation}deg)`;
    //minute.style.transform = `rotate(${mrotation}deg)`;
    //second.style.transform = `rotate(${srotation}deg)`;

}, 1000);

let h = document.querySelector("#Hour");
let m = document.querySelector("#Minute");
let s = document.querySelector("#Second");

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    h.innerText = htime + " :";
    m.innerText = mtime + " :";
    s.innerText = stime;
},1000)



    