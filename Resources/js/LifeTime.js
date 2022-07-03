function LifeTimeGet(){
    
    const today = new Date();
const val = document.getElementById('val').value;
const val1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let BirthTime = document.getElementById("valH").value
let prs = Date.parse(val) + Date.parse(`01 Jan 1970 ${BirthTime} GMT`)
const time = today.getHours() * 3600000 + today.getMinutes() * 60000 + today.getSeconds() * 1000; 
const TotalBirth = Date.parse(val1)+time;
const Mi = TotalBirth - prs;
document.getElementById("birthhour").value = BirthTime; 
document.getElementById("data").value = val;
document.getElementById("cdata").value = val1;
const trueTime = [];
let Sec = Mi / 1000;
const secScr = document.createElement('p');
secScr.innerText = "Your Seconds Are:" + Sec;
secScr.setAttribute("Class", "Pad");
alert(Mi);
document.body.appendChild(secScr);    
let Min = Math.floor(Mi / 60000);
const MinScr = document.createElement('p');
MinScr.innerText = "Your Minutes Are:" + Min;
document.body.appendChild(MinScr)  
 let Hour = Math.floor(Mi / 3600000);
const HourScr = document.createElement('p');
HourScr.innerText = "Your Hours Are:" + Hour;
document.body.appendChild(HourScr)  
let Day = Math.floor(Mi / 86400000); 
const DayScr = document.createElement('p');
DayScr.innerText = "Your Days Are:" + Day;
document.body.appendChild(DayScr)  
let Week = Math.floor(Mi / 604800000);
const WeekScr = document.createElement('p');
WeekScr.innerText = "Your Weeks Are:" + Week;
document.body.appendChild(WeekScr)  
let Month = Math.floor(Mi / 2629800000);
const MonthScr = document.createElement('p');
MonthScr.innerText = "Your Months Are:" + Month;
document.body.appendChild(MonthScr)  
let Year = Math.floor(Mi / 31557600000);
const YearScr = document.createElement('p');
YearScr.innerText = "Your Years Are:" + Year;
document.body.appendChild(YearScr);
trueTime.push(Sec)
trueTime.push(Min)
trueTime.push(Hour)
trueTime.push(Day)
trueTime.push(Week)
trueTime.push(Month)
trueTime.push(Year)
document.getElementById("lifetime").value = trueTime
}

function RemoveData(){

for(var i = 0; i < 1000; i++) {
  document.querySelector("p").remove()
}
}
function RickRoll(){
  alert("Get Ready To Dance")
}

    