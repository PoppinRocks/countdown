const endDate = "18 May 2023 12:00 AM";

document.getElementById('endDate').innerText = endDate;
const inputs = document.querySelectorAll('input');

// const clock = ()=> {
//   callback function new
// }

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    // console.log(end +" "+ now);
    const diff = (end - now) / 1000;

    if(diff < 0) return;
    // console.log(diff);
    // convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convert into hours
    inputs[1].value = Math.floor((diff / 3600) % 24);
    // convert into min
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convert into sec
    inputs[3].value = Math.floor(diff) % 60;
}

// initail call
clock();

setInterval(
    () =>{
        clock()
    },
    1000
)

/*
* 1 day = 24 hr
* 1 hr = 60 min
* 60 min = 3600 sec
*/ 