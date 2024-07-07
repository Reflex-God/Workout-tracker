// import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
// let id = nanoid(10);
// console.log(id);

const myHeading = document.querySelector("h1");
myHeading.textContent = "Workout Tracker";

let display = document.querySelector(".display");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");
let days = document.querySelector(".days");
let selected = document.querySelector(".selected");
let workout = {};
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
if(!workout.hasOwnProperty(selectedDate)){
        workout[selectedDate] = [] ;
}
    var input = document.createElement("input");
    input.type = "text";
    input.id = "workouts";
    input.placeholder = "Enter the workout"
    document.getElementById('textBoxContainer').innerHTML = ""
    document.getElementById('textBoxContainer').appendChild(input);

    var input1 = document.createElement("input");
    input1.type = "number";
    input1.id = "set";
    input1.placeholder = "sets"
    document.getElementById('setsContainer').innerHTML="";
    document.getElementById('setsContainer').appendChild(input1);

    var input2 = document.createElement("input");
    input2.type = "number";
    input2.id = "rep";
    input2.placeholder = "reps"
    document.getElementById('repsContainer').innerHTML=""
    document.getElementById('repsContainer').appendChild(input2)

    var plus = document.createElement("button");
    plus.type = "button";
    plus.id = "addWorkout"
    plus.textContent = "+"
    
    // document.getElementById('worklist').innerHTML = JSON.stringify(workout.filter((work) => work.clickedDate === selectedDate));
    document.getElementById('worklist').innerHTML = JSON.stringify(workout[selectedDate]);

    plus.addEventListener("click", ()=>{

        function Workout(workoutName,sets,reps,clickedDate){
            this.workoutName = workoutName;
            this.sets = sets;
            this.reps = reps;
            this.clickedDate = clickedDate

        }
        var workoutName =  document.getElementById("workouts").value;
        var sets =  document.getElementById("set").value;
        var reps =  document.getElementById("rep").value;
        var clickedDate =  selectedDate;
        
        const work = new Workout(workoutName,sets,reps,clickedDate) ;

        // workout.push(work);

        workout[selectedDate].push(work);
        console.log(work);

        // document.getElementById('worklist').innerHTML = JSON.stringify(workout.filter((work) => work.clickedDate === selectedDate));

        document.getElementById('worklist').innerHTML = JSON.stringify(workout[selectedDate]);
        document.getElementById("workouts").value = "";
        document.getElementById("set").value = "";
       document.getElementById("rep").value = "";
    
    })
document.getElementById('plus').innerHTML ="";
    document.getElementById('plus').appendChild(plus);


    });
    });
}
displaySelected();

function addWorkout(){
    var x = document.getElementById("Workout").value;
    document.getElementById("WorkoutEntered").innerHTML = x
}

