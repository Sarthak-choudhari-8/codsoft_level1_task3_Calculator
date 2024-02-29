
let multiplybtn = document.querySelector("#multiply");

let allbutton = document.querySelectorAll(".button");



let inp = document.querySelector('input');
let string = "";


for (let button of allbutton) {
    button.addEventListener("click", (e) => {

        try {

            if (e.target.innerHTML == '=') {
                string = eval(string);
                inp.value = string;
            }


            else if (e.target.innerHTML == "CL") {

                string = "";
                inp.value = string;
            }
            else if (e.target.innerHTML == "DEL") {
                string = string.slice(0, string.length - 1);
                inp.value = string;
            }

            else {
                string = string + e.target.innerHTML;
                inp.value = string;
            }



        }
        catch (err) {
            inp.value = "Error";
            string = "";

        }

    });
}