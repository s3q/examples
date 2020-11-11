


let dropback = document.querySelector('.dropback'),
    dropback_start = document.querySelector('.dropback .start'), 
    dropback_try = document.querySelector('.dropback .try'), 
    print_your_name = document.getElementById('name'),
    true_element = document.querySelector('.true span'),
    tries_element = document.querySelector('.tries span'),

    // won :
    wonDiv = document.getElementById('won-div'),
    deadTime = document.getElementById('dead-time'),
    answersTrue = document.getElementById('answers-true'),
    answersFalse = document.getElementById('answers-false');

dropback_start.onclick = function () {

    let your_name = prompt('write your name');

    if (your_name == null || your_name == '') {

        print_your_name.textContent = 'unknown';

    } else {

        print_your_name.textContent = your_name;

    }

    dropback.style.display = 'none';

    this.remove();

    
    contDown = setInterval(() => {

        secondsPass();

    }, 1000);
}


let duration = 1000, 
    fl = [];
    blocks = document.querySelector('.memory-game-blocks');

let array_blocks = Array.from(blocks.children),

    order_range = [...Array(array_blocks.length).keys()];

shuffle(order_range);

array_blocks.forEach((ele, index) => {

    ele.style.order = order_range[index];

    ele.addEventListener('click', function() {

        flip(ele);

    });
});

function flip(select) {
    select.classList.add('is-flipped');

    let allflip = array_blocks.filter(flippedblock => flippedblock.classList.contains('is-flipped'));

    function allMtchLen() {
        return allMtch.length;
    }

    if (allflip.length === 2) {

        stop_clicking();
        
        check_match(allflip[0], allflip[1]);

    } else if (allflip.length === 1) {

        setTimeout(() => {

            allflip[0].classList.remove('is-flipped')

        }, duration);

    } 

    fl.push(allflip);

    if (allflip.length === array_blocks.length) {

        stop_clicking();

    }

}

let checkForEndGame = setInterval(() => {
    let allMtch = array_blocks.filter(flippedblock => flippedblock.classList.contains('has-match'));
    
    if (allMtch.length === array_blocks.length) {

        won();
    
        clearInterval(checkForEndGame);
    }

}, 100);

/*

document.querySelectorAll('.game-block').forEach(function (ele) {ele.classList.add('has-match')}); 

*/

function won() {
        
    dropback.style.display = 'flex';
    wonDiv.style.display = 'block';

    deadTime.innerHTML = time_ele.innerHTML; 

    answersTrue.innerHTML = true_element.innerHTML;

    answersFalse.innerHTML = tries_element.innerHTML;

}
function stop_clicking() {

    blocks.classList.add('no-clicking');

    setTimeout(() => {

        blocks.classList.remove('no-clicking');

    }, duration);
}

function check_match(first, second) {

    if (first.dataset.lang === second.dataset.lang) {

        first.classList.remove('is-flipped');
        second.classList.remove('is-flipped');

        first.classList.add('has-match');
        second.classList.add('has-match');

        document.getElementById('success').play();

        true_element.innerHTML = parseInt(true_element.innerHTML) + 1;

    } else {

        tries_element.innerHTML = parseInt(tries_element.innerHTML) + 1; 

        setTimeout(() => {

            first.classList.remove('is-flipped');
            second.classList.remove('is-flipped');

        }, duration);

        document.getElementById('fail').play();
    }
} 

function shuffle(array) {
    let current = array.length,
        temp,
        random;

    while (current >  0) {

        random = Math.floor(Math.random() * current);

        current--;

        temp = array[current];

        array[current] = array[random];

        array[random] = temp;
    }
    return array;
}


let time_ele = document.getElementById('time'),
    seconds = 60;

function secondsPass() {
    
    let min = Math.floor(seconds / 60);

    rem = seconds % 60;

    if (seconds < 10) {

        rem = '0' + rem;

        time_ele.style.color = 'red';

    }

    time_ele.innerHTML = min + ':' + rem;

    if (seconds > 0) {

        seconds--;

    } else {

        dropback.style.display = 'flex';
    
        dropback_try.style.display = 'block';
    
        clearInterval(contDown);
    }


    dropback_try.onclick = _ => {

        location.reload();

    } 

}
