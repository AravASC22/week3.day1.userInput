let form_container = document.getElementsByClassName("form_container");
let title_input = document.getElementById("title_input").value;

function title_check() {
    title_input = document.getElementById("title_input").value;
}

document.getElementById("submit_button").addEventListener("click", click);
addEventListener("keypress", title_check);
function click(event) {
    event.preventDefault();

    let noun_input = document.getElementById("noun").value;
    let verb_input = document.getElementById("verb").value;
    let adjective_input = document.getElementById("adjective").value;

    if (title_input == "" || noun_input == "" || verb_input == "" || adjective_input == "") {
        alert("Please fill in all fields");        
    }
    else {
        document.getElementById("story_result").innerHTML = "Last night I ate a " + noun_input + " and today I just had to " + verb_input + ". What a " + adjective_input + " day!";
        document.getElementById("main_title").innerHTML = title_input;
        for (i = 0; i<form_container.length; i++) {
            form_container[i].style.display = "none";
        }
    }
}

