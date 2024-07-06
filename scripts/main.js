const myHeading = document.querySelector("h1");
myHeading.textContent = "Workout Tracker";

let display = document.querySelector(".display");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let days = document.querySelector(".days");
let selected = document.querySelector(".selected");
let workout ;
let sets;
let reps;


let date = new Date();
console.log(date);

let year = date.getFullYear();
let month = date.getMonth();

function displayCalender() {
    const firstDay = new Date(year,month,1);
const firstDayIndex = firstDay.getDay();

const lastDay = new Date(year,month+1,0);
const numberOfDays = lastDay.getDate();
    
let formattedDate = date.toLocaleString("en-US",{
    month:"long",
    year:"numeric",
});
display.innerHTML=`${formattedDate}`;

display.addEventListener("click",()=>{
    alert("clicked")
});



for (let x = 1;x <= firstDayIndex;x++){
    const div = document.createElement("div");
    div.innerHTML += "";
    days.appendChild(div);
}

for (let i = 1;i <= numberOfDays; i++){
    let div = document.createElement("div");
    let currentDate = new Date(year, month ,i);

    div.dataset.date = currentDate.toDateString();

    div.innerHTML += i ;
    days.appendChild(div);
    if(
        currentDate.getFullYear() === new Date().getFullYear() &&
        currentDate.getMonth() === new Date().getMonth() &&
        currentDate.getDate() === new Date().getDate()
    ){
        div.classList.add("current-date");
    }
}
}

displayCalender();


previous.addEventListener("click", () => {
    days.innerHTML = "";
    selected.innerHTML = "";

    if (month < 0) {
        month = 11;
        year = year - 1;
    }
    month = month - 1;
    
    date.setMonth(month);

    displayCalender();
    displaySelected();
});

next.addEventListener("click", ()=>{
    days.innerHTML = "";
    selected.innerHTML = "";

    if(month > 11){
        month = 0;
        year = year + 1;
    }
    month = month + 1;
    date.setMonth(month);

    displayCalender();
    displaySelected();
}
);
function displaySelected(){
    const daysElements = document.querySelectorAll(".days div");
    daysElements.forEach((days) => {
        days.addEventListener("click", (e) =>{
        const selectedDate = e.target.dataset.date;
        selected.innerHTML = `Selected Date : ${selectedDate}`;
    });
    });
}
displaySelected();

function addWorkout(){
    var x = document.getElementById("Workout").value;
    document.getElementById("WorkoutEntered").innerHTML = x
}

