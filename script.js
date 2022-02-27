"use strict"

function move1(event, name) {
    var tabs = document.querySelectorAll(".tab");
    var buttons = document.querySelectorAll("button");

    // nuima stilius ir dipslay
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        buttons[i].classList.remove("selected-1");
        buttons[i].classList.remove("selected-2");
    }

    document.getElementById(name).style.display = "block";
    event.currentTarget.classList.add("selected-1");

    setTimeout(function () {
        var tabs = document.querySelectorAll(".tab");
        for (var x of tabs) {
            x.classList.remove("tabAnimation");
        }

        document.getElementById(name).classList.add("tabAnimation");
    }, 1000);
}


function move2(event, name) {
    var tabs = document.querySelectorAll(".tab");
    var buttons = document.querySelectorAll("button");

    // nuima stilius ir dipslay
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
        buttons[i].classList.remove("selected-2");
        buttons[i].classList.remove("selected-1");
    }

    document.getElementById(name).style.display = "block";
    event.currentTarget.classList.add("selected-2");

    setTimeout(function () {
        var tabs = document.querySelectorAll(".tab");
        for (var x of tabs) {
            x.classList.remove("tabAnimation");
        }

        document.getElementById(name).classList.add("tabAnimation");
    }, 1000);
}

