let buttonDir = document.querySelectorAll(".buttondir"),
    inputPath = document.getElementById("path"),
    submitPath = document.getElementById("submitpath");


console.log(buttonDir);

buttonDir.forEach(item => {

    item.addEventListener('click', _ => {

        if (item.textContent != "") {

            // ------------------
            inputPath.value += item.textContent;

            if (item.textContent == "." || item.textContent == "..") {

                arrBackOne = [];

                // ------------------
                if (inputPath.value[inputPath.value.length - 1] == ".") {

                    arrBackOne = inputPath.value.split("\\");
                    let pathback = "";

                    // ------------------
                    if (inputPath.value[inputPath.value.length - 1] == "." && inputPath.value[inputPath.value.length - 2] != ".") {

                        // ------------------
                        delete(arrBackOne[arrBackOne.length - 1]);
                        delete(arrBackOne[arrBackOne.length - 2]);

                        arrBackOne.forEach(i => {

                            // ------------------
                            pathback += i + "\\";

                        });

                        inputPath.value = pathback;

                    // ------------------
                    } else if (inputPath.value[inputPath.value.length - 1] + inputPath.value[inputPath.value.length - 2] == ".." && inputPath.value[inputPath.value.length - 3] != ".") {
                        
                        // ------------------
                        pathback = arrBackOne[0] + "\\";

                        inputPath.value = pathback;

                    }

                }

            }

            // ------------------
            submitPath.click();

        }

    });

});

let params = new URLSearchParams(location.search);

if (params.has("path")) {
    inputPath.value = params.get("path");
}

let fileName = document.getElementById("fileName"),
    suCreateFile = document.getElementById("suCreateFile");



let folderName = document.getElementById("folderName"),
    suCreateFolder = document.getElementById("suCreateFolder");


let cdorcfName = document.getElementById("cdorcfName"),
    suDelete = document.getElementById("suDelete");


function sumPath9(button, inputPath1, inputPath2) {
 
    button.addEventListener("click", _ => {

        if (!inputPath2.value.includes("\\")) {
            
            inputPath2.value = inputPath1.value + inputPath2.value;

        }

    
    });
    
    
}

sumPath9(suCreateFile, inputPath, fileName);
sumPath9(suCreateFolder, inputPath, folderName);
sumPath9(suDelete, inputPath, cdorcfName);


function focusInputT(button, input) {

    button.addEventListener("click", _ => {

        input.focus();
    
    });    

}

focusInputT(document.getElementById("createFile"), fileName);
focusInputT(document.getElementById("createFolder"), folderName);
focusInputT(document.getElementById("deletec"), cdorcfName);




let buttonDelelet = document.querySelectorAll(".buttondele");

buttonDelelet.forEach(item => {

    item.addEventListener("click", _ => {

        if (item != "") {

            cdorcfName.value = inputPath.value + item.parentElement.firstChild.textContent;
    
    
            suDelete.click();
    
        }

    });
    
});


/*
//folderName.value = inputPath.value;

let params = new URLSearchParams(location.search);

if (params.has("fileName") && params.has("suCreateFile")) {

    let arrFileName = params.get("fileName").split("\\");

    arrFileName.pop();

    inputPath.value = arrFileName.join("\\");

    
}*/

