function XMLHttpRequestFn(
    method,
    url,
    data = "",
    print = "",
    callback = function () {}
) {
    let newRequest = new XMLHttpRequest();

    newRequest.onreadystatechange = function () {
        console.log("ready state change ...");
        switch (this.readyState) {
            case 1:
                console.log("#1 -> request not initialized");
                break;
            case 2:
                console.log("#2 -> server connection established");
                break;
            case 3:
                console.log("#3 -> request recived");
                break;
            case 4:
                console.log("#4 -> request is finished and response is ready");
                break;
        }
        switch (this.status) {
            case 200:
                console.log("status : success *");
                break;
        }
        if (this.readyState === 4 && this.status === 200) {
            if (print === "console") {
                console.log(
                    "\n\n\nresponse : \n\n\n" + this.responseText + "\n\n\n"
                );
            } else if (document.querySelector(print)) {
                document.querySelector(print).innerHTML = this.responseText;
                console.log(
                    "\n\nresponse : \n\n\n" + this.responseText + "\n\n\n"
                );
            }
        }
    };

    newRequest.onloadend = callback;

    method.toUpperCase();

    newRequest.open(method, url + (method === "GET" ? "?" + data : ""), true);
    newRequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    newRequest.send(method === "POST" ? data : "");
}


function setCookie(cname, cvalue, exdays = "") {
  var d = new Date();
  if (exdays !== "") {
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
  } else {
    var expires = "expires";
  }
  try {
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  } catch (error) {
    console.log(error);
  }
}

