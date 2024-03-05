
var input = document.querySelector(`.input-box`)

function intro(){
    console.log(input.value);
    input.value = ""
}


var input = document.querySelector('input')

function myintro(){
    console.log(input.value);
    input.value = ""
}

var heading = document.querySelector('.head')

function myintro(){
    if(heading.innerHTML === "Hello Ahmed "){
        heading.innerHTML = "JavaScript"
    }else {
        heading.innerHTML = `Hello Ahmed Nadeem`
    }
}


var heading = document.querySelector(`.head`)

function change(){
    if(heading.innerHTML === `Ahmed Nadeem`){
        heading.innerHTML = `Abdul majid`
    }else {
        heading.innerHTML = `Ahmed Nadeem `
    }
}


var heading = document.querySelector(`.head`);

function change() {
    if (heading.innerHTML === "Ahmed Nadeem") {
        heading.innerHTML = `Abdul majid`
    } else {
        heading.innerHTML = `Ahmed Nadeem`
    }
}

var heading = document.querySelector(`.head`);

function myintro(){
    if (heading.innerHTML === "Ahmed nadeem"){
        heading.innerHTML = "Abdul majid"
    }else {
        heading.innerHTML = "Ahmed Nadeem"
    }
}

var inputF = document.querySelector(`.inputone`)
var inputL = document.querySelector(`.inputtwo`)
var totalMarks = 200;

function aditionMarks(){
   console.log(inputF.value + inputL.value);
   inputF = ""
   inputL = ""
}


