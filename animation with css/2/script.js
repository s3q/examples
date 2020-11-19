let footer = document.querySelector('.footer'),
    ioBnLike = document.querySelectorAll('.io-button-like'),
    footerLike = document.querySelector('.footer-like');

footerLike.classList.remove("io-footer-like");

let current = 0;

ioBnLike.forEach(likeItem => {
    likeItem.onclick = _ => {
        likeItem.classList.toggle('far');
        likeItem.classList.toggle('fas');
        likeItem.classList.toggle('like');

        footerLike.classList.add('io-footer-like');

        if (likeItem.classList.contains('like')) {
            current++;
        }

        creatNoticeLike();

    }
});

function creatNoticeLike() {

    let noticeLikeText = `<div class="notice-like"><i class="fas fa-heart"></i> <i class="number">${current}</i></div>`;

    footer.innerHTML += noticeLikeText;

    setTimeout( function () {
    let noticeLike = document.querySelector('.notice-like');
        noticeLike.remove();
    }, 5000);
}
