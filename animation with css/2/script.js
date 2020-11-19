let footer = document.querySelector('.footer'),
    ioBnLike = document.querySelectorAll('.io-button-like'),
    ioBnComment = document.querySelectorAll('.io-button-comment'),
    ioBnSend = document.querySelectorAll('.io-button-send'),
    ioBnBookmark = document.querySelectorAll('.io-button-bookmark'),
    footerLike = document.querySelector('.footer-like');


// like :
footerLike.classList.remove("io-footer-like");
let current = 0;
ioBnLike.forEach(element => {
    element.addEventListener('click', _ => {
        ioColor(element, 'like');

        footerLike.classList.add('io-footer-like');

        if (element.classList.contains('like')) {
            current++;
            creatNoticeLike();
        }
    });
});

function creatNoticeLike() {

    let noticeLikeText = `<div class="notice-like"><i class="fas fa-heart"></i> <i class="number">${current}</i></div>`;

    footer.innerHTML += noticeLikeText;

    setTimeout( function () {
    let noticeLike = document.querySelector('.notice-like');
        noticeLike.remove();
    }, 5000);
}


// comment :
ioBnComment.forEach(element => {
    let cardComment = document.querySelector('.card-comment');


    element.addEventListener('click', e => {
        ioColor(element, 'comment');
        cardComment.classList.toggle('open');

        e.stopImmediatePropagation();

        cardComment.addEventListener('click', e => {
            e.stopImmediatePropagation();
        });

        window.addEventListener('click', ele => {
            if (ele !== cardComment && ele !== element) {
                cardComment.classList.remove('open');
                element.classList.add('far');
                element.classList.remove('fas');
                element.classList.remove('send');
            }
        });
    });
});


// send :
ioBnSend.forEach(element => {
    let cardSend = document.querySelector('.card-send');

    element.addEventListener('click', e => {
        ioColor(element, 'send');

        if (element.classList.contains('send')) {

            cardSend.classList.toggle('open');

            e.stopImmediatePropagation();

            cardSend.addEventListener('click', e => {
                e.stopImmediatePropagation();
            });

            window.addEventListener('click', ele => {
                if (ele !== cardSend && ele !== element) {
                    cardSend.classList.remove('open');
                    element.classList.add('far');
                    element.classList.remove('fas');
                    element.classList.remove('send');
                }
            });
        }
    });
});


// bookmark :
ioBnBookmark.forEach(element => {
    let imgFile = document.querySelector('.img-file');

    element.addEventListener('click', _ => {
        ioColor(element, 'bookmark');

        if (element.classList.contains('bookmark')) {
            imgFile.classList.toggle('scale');
            setTimeout( _ => {

                imgFile.classList.remove('scale');

            }, 4000);
        }
    })
});

function ioColor (element, classColor) {
    element.classList.toggle('far');
    element.classList.toggle('fas');
    element.classList.toggle(classColor);
}