const rippleButton = document.querySelectorAll('.ripple-button');

rippleButton.forEach(bn => {

    bn.addEventListener('click', eve => {

        let rippleSpan = document.createElement('span');

        rippleSpan.classList.add('ripple-span');

        const hrPos = eve.clientX - eve.target.offsetLeft; 
        const vrPos = eve.clientY - eve.target.offsetTop; 

        rippleSpan.style.left = hrPos + 'px';
        rippleSpan.style.top = vrPos + 'px';

        bn.appendChild(rippleSpan);

        setTimeout(() => {
            rippleSpan.remove();
        }, 1500);
    });

});