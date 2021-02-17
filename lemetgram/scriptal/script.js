let sendmessageforao = document.getElementById("sendmessageforao"),
    showusersinplat = document.getElementById("showusersinplat"),
    // alert :
    usersinplat = document.getElementById("usersinplat"),
    alertusersinplat = document.getElementById("alertusersinplat"),
    closealertusersinplat = document.getElementById("closealertusersinplat"),
    // chat :
    thuchatbox = document.getElementById('thuchatbox'),
    thuuserschatbox = document.getElementById("thuuserschatbox");


let bnsendmessagefortps = document.querySelectorAll(".bnsendmessagefortps");

let elementsselectedtosend = document.querySelectorAll('[data-selected-to-send]');


XMLHttpRequestFn("POST", "phpscripts/getmessageinplat.php", `get-alluserm=true`, "#thuuserschatbox", function () {

    // update change :
    elementsselectedtosend = document.querySelectorAll('[data-selected-to-send]');
    toggleattrforelementsselectedtosend();
});

function setalldataselectedtosend(elements) {
    elements.forEach(ele => {
        ele.setAttribute('data-selected-to-send', 'false');
    });
}

function craeteuserchatbox(username) {
    let newcuserchatbox = document.createElement('div'),
        newcuserprofileimg = document.createElement('div'),
        newcuserprofilename = document.createElement('div');

    newcuserchatbox.classList.add('userchatbox', 'bnselectsendmessageforh');
    setalldataselectedtosend(elementsselectedtosend);
    newcuserchatbox.setAttribute('data-selected-to-send', 'true');
    newcuserprofileimg.classList.add('userprofileimg');
    newcuserprofilename.classList.add('userprofilename');

    newcuserprofilename.textContent = username;

    newcuserchatbox.appendChild(newcuserprofileimg);
    newcuserchatbox.appendChild(newcuserprofilename);

    return newcuserchatbox;
}


bnsendmessagefortps.forEach((item) => {
    item.addEventListener("click", function () {
        let usertosendmessageforh = "";
        // get username :
        usertosendmessageforh = item.children[1].textContent;
        console.log(usertosendmessageforh);

        // close alert
        closealertusersinplat.click();
        usertosendmessageforh.trim();

        let appcildtothuuserschatboxcheck = true;
        let thuuserschatboxchildren = Array.from(thuuserschatbox.children);
        if (Array.from(thuuserschatbox.children).length > 0) {
            thuuserschatboxchildren.forEach((ele) => {
                if (ele.children[1].textContent == usertosendmessageforh) {
                    appcildtothuuserschatboxcheck = false;
                }
            });

            if (appcildtothuuserschatboxcheck == true)
                thuuserschatbox.appendChild(craeteuserchatbox(usertosendmessageforh));
        } else {
            thuuserschatbox.appendChild(craeteuserchatbox(usertosendmessageforh));
        }

        // update change :
        elementsselectedtosend = document.querySelectorAll('[data-selected-to-send]');
        toggleattrforelementsselectedtosend();
    });
});

toggleattrforelementsselectedtosend();

function toggleattrforelementsselectedtosend() {
    elementsselectedtosend.forEach(item => {
        item.addEventListener('click', function () {
            setalldataselectedtosend(elementsselectedtosend);
            item.setAttribute('data-selected-to-send', 'true');
            XMLHttpRequestFn("POST", "phpscripts/getmessageinplat.php", `get-messages=true&toper=${item.children[1].textContent}`, "#chatbox", function () { 
                thuchatbox.scrollTo(0, thuchatbox.clientHeight * 10);
            });
        });
    });
}

let submitmessage = document.getElementById('submit-message'),
    message = document.getElementById('message');

submitmessage.addEventListener('click', function () {
    let elementselectedtosend = Array.from(document.querySelectorAll('[data-selected-to-send="true"]'));
    console.log(elementselectedtosend);
    if (message.value && message.value.trim() != "") {
        messageval = message.value.trim();
        if (elementselectedtosend.length == 1) {
            personselectedtosend = elementselectedtosend[0];

            let personnameto = personselectedtosend.children[1].textContent;

            XMLHttpRequestFn("POST", "phpscripts/sendmessagetoplat.php", `submit-message=true&message=${messageval}&toper=${personnameto}`, "console", function () {

                message.value = "";

                thuchatbox.scrollTo(0, thuchatbox.clientHeight * 10);

                XMLHttpRequestFn("POST", "phpscripts/getmessageinplat.php", `get-messages=true&toper=${personnameto}`, "#chatbox", function () { });

            });
        }
    }
});

