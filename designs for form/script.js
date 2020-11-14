const username = document.getElementById('username'),
      password = document.getElementById('password'),
      submit = document.getElementById('submit'),
      formCard = document.querySelector('.form-card'),
      userCircle = document.querySelector('.user-circle'),
      ioU1 = document.querySelector('.io-u1'),
      ioS1 = document.querySelector('.io-s1'),
      ioS2 = document.querySelector('.io-s2'),
      checkIn = document.querySelector('.check-in'),
      cardInfo = document.querySelector('.card-info'),
      mode = document.querySelector('.mode');

submit.onclick = event => {

    event.preventDefault();

    if (username.value.indexOf('@') !== -1 && username.value.indexOf('.com') !== -1) {
        

        if (password.value.length > 7) {
        
            ioS1.classList.add('ani-s');
            ioS2.classList.add('ani-s');

            checkIn.classList.remove('check-false');
            ioU1.classList.remove('ani-u-top');

            cardInfo.classList.remove('card-false-info');
            setTimeout(() => {
                
                checkIn.classList.add('check-true');

                setTimeout(() => {
                    
                    ioU1.classList.remove('ani-u-bottom');
                    ioU1.classList.add('ani-u-top');

                    ioS1.classList.remove('ani-s');
                    ioS2.classList.remove('ani-s');

                    cardInfo.style.display = 'block';
                    cardInfo.innerHTML = "Entered ... Information is correct <i class='fas fa-check-circle' style='margin-left: 100px'></i>";
                    cardInfo.classList.add('card-true-info');

                    setTimeout(() => {
                        
                        cardInfo.style.display = 'none';

                    }, 6000);

                },  1000);

            }, 1600);

        } else {

            ioS1.classList.add('ani-s');
            ioS2.classList.add('ani-s');

            checkIn.classList.remove('check-true');
            ioU1.classList.remove('ani-u-top');
            ioU1.classList.add('ani-u-bottom');

            cardInfo.classList.remove('card-true-info');
            setTimeout(() => {
                
                checkIn.classList.add('check-false');

                setTimeout(() => {
                    
                    ioS1.classList.remove('ani-s');
                    ioS2.classList.remove('ani-s');

                    cardInfo.style.display = 'block';
                    cardInfo.innerHTML = "No entry ... The information is incorrect <i class='fas fa-times-circle' style='margin-left: 100px'></i>";
                    cardInfo.classList.add('card-false-info');

                    setTimeout(() => {
                        
                        cardInfo.style.display = 'none';

                    }, 6000);

                },  1000);


            }, 1600);

        }     


    } else {

        ioS1.classList.add('ani-s');
        ioS2.classList.add('ani-s');

        checkIn.classList.remove('check-true');
        ioU1.classList.remove('ani-u-top');
        ioU1.classList.add('ani-u-bottom');

        cardInfo.classList.remove('card-true-info');
        setTimeout(() => {
            
            checkIn.classList.add('check-false');

            setTimeout(() => {
                    
                ioS1.classList.remove('ani-s');
                ioS2.classList.remove('ani-s');

                cardInfo.style.display = 'block';
                cardInfo.innerHTML = "No entry ... The information is incorrect <i class='fas fa-times-circle' style='margin-left: 100px'></i>";
                cardInfo.classList.add('card-false-info');

                setTimeout(() => {
                        
                    cardInfo.style.display = 'none';

                }, 6000);

            },  1000);

        }, 1600);

    }

}

mode.onclick = _ => {

    mode.classList.toggle('mode-dark');
    mode.classList.toggle('mode-light');
    mode.classList.toggle('dark');

    document.body.classList.toggle('dark');

    userCircle.classList.toggle('dark');
    formCard.classList.toggle('dark');
    username.classList.toggle('dark');
    password.classList.toggle('dark');
    submit.classList.toggle('dark');
    checkIn.classList.toggle('dark');
    cardInfo.classList.toggle('dark');
}