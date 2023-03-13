let input = document.querySelector("input");
let addStudent = document.getElementById("addStudent");
let list = document.querySelector("ul");
let clearButton = document.getElementById("clear");
let heading = document.querySelector("h1");
let Hbutton = document.getElementById("headingst");
addStudent.addEventListener("click", ()=>{
    list.innerHTML += `<li> ${input.value} </li>`
    input.value = " ";
})

clearButton.addEventListener("click", ()=>{
    list.innerHTML = " ";
})

Hbutton.addEventListener("click", ()=>{
    heading.style.color = "red";
})



