let date = document.querySelector(".date");
let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

function cal(){
    let today = new Date();

    let allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    date.innerHTML = today.getDate();
    day.innerHTML = allDays[today.getDay()];
    month.innerHTML = allMonths[today.getMonth()];
    year.innerHTML = today.getFullYear();
}
cal();





