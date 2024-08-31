let daily = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
let orangeHours = document.querySelector("#orangeHours");
let blueHours = document.querySelector("#blueHours");
let greenHours = document.querySelector("#greenHours");
let pinkHours = document.querySelector("#pinkHours");
let yellowHours = document.querySelector("#yellowHours");
let purpleHours = document.querySelector("#purpleHours");
let previousWork = document.querySelector("#previousWork");
let previousExercise = document.querySelector("#previousExercise");
let previousStudy = document.querySelector("#previousStudy");
let previousPlay = document.querySelector("#previousPlay");
let previousSelf = document.querySelector("#previousSelf");
let previousSocial = document.querySelector("#previousSocial");

daily.addEventListener("click", function () {
  orangeHours.innerHTML = "4hrs";
  blueHours.innerHTML = "2hrs";
  greenHours.innerHTML = "6hrs";
  pinkHours.innerHTML = "6hrs";
  yellowHours.innerHTML = "0hrs";
  purpleHours.innerHTML = "1hr";
  previousWork.innerHTML = "Yesterday - 5hrs";
  previousPlay.innerHTML = "Yesterday - 1hrs";
  previousStudy.innerHTML = "Yesterday - 8hrs";
  previousExercise.innerHTML = "Yesterday - 4hrs";
  previousSocial.innerHTML = "Yesterday - 2hrs";
  previousSelf.innerHTML = "Yesterday - 0hrs";
  document.getElementById("daily").style.color = "white";
  document.getElementById("weekly").style.color= "var(--Desaturated-blue)";
  document.getElementById("monthly").style.color= "var(--Desaturated-blue)";
});

weekly.addEventListener("click", function () {
  orangeHours.innerHTML = "12hrs";
  blueHours.innerHTML = "10hrs";
  greenHours.innerHTML = "8hrs";
  pinkHours.innerHTML = "12hrs";
  yellowHours.innerHTML = "3hrs";
  purpleHours.innerHTML = "7hr";
  previousWork.innerHTML = "Last Week - 14hrs";
  previousPlay.innerHTML = "Last Week - 9hrs";
  previousStudy.innerHTML = "Last Week - 9hrs";
  previousExercise.innerHTML = "Last Week - 15hrs";
  previousSocial.innerHTML = "Last Week - 7hrs";
  previousSelf.innerHTML = "Last Week - 11hrs";
  document.getElementById("daily").style.color = "var(--Desaturated-blue)";
  document.getElementById("weekly").style.color= "white";
  document.getElementById("monthly").style.color= "var(--Desaturated-blue)";
});

monthly.addEventListener("click", function () {
  orangeHours.innerHTML = "30hrs";
  blueHours.innerHTML = "24hrs";
  greenHours.innerHTML = "16hrs";
  pinkHours.innerHTML = "20hrs";
  yellowHours.innerHTML = "10hrs";
  purpleHours.innerHTML = "19hr";
  previousWork.innerHTML = "Last Month - 30hrs";
  previousPlay.innerHTML = "Last Month - 28hrs";
  previousStudy.innerHTML = "Last Month - 20hrs";
  previousExercise.innerHTML = "Last Month - 17hrs";
  previousSocial.innerHTML = "Last Month - 22hrs";
  previousSelf.innerHTML = "Last Month - 24";
  document.getElementById("daily").style.color = "var(--Desaturated-blue)";
  document.getElementById("weekly").style.color= "var(--Desaturated-blue)";
  document.getElementById("monthly").style.color= "white";
});
