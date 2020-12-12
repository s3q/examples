let clock = document.querySelector('.clock');

// second :
let second = 86800;

let hor = 0, min = 0, sec = 0;

let step = second;


clock.classList.add('pop');
clock.classList.remove('dang');
clock.classList.add('ndang');

if (second <= 86400) {
    let clockInterval = setInterval(() =>{

        hor = Math.floor((step / 60) / 60); 
        min = Math.floor((step / 60) % 60);
        sec = step % 60;
        
    
        hor <= 9 ? hor = '0' + hor : null;
        min <= 9 ? min = '0' + min : null;
        
        if (sec <= 9 && min == 0 && hor == 0) {
            clock.classList.remove('ndang');
            clock.classList.add('dang');
        }
    
        if (sec <= 9) {
    
            sec = '0' + sec;
        }
    
    
    
        console.log(`${hor} : ${min} : ${sec}`);
        clock.textContent = `${hor}:${min}:${sec}`;
    
        step--;
    
        if (step < 0) {
            clock.classList.remove('pop');
            clearInterval(clockInterval);
        }
    
    }, 1000);    
} else {
    clock.classList.remove('pop');
    clock.textContent = '00:00:00 -- :)';
}
