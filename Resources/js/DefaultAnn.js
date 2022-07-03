function IFS(){
    
    const today = new Date();
    const val = document.getElementById('val').value;
    const val1 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let BirthTime = document.getElementById("valH").value
    let prs = Date.parse(val) + Date.parse(`01 Jan 1970 ${BirthTime} GMT`)
    const time = today.getHours() * 3600000 + today.getMinutes() * 60000 + today.getSeconds() * 1000; 
    const TotalBirth = Date.parse(val1)+time;
    let Mi = TotalBirth - prs;

    if(Mi === NaN ){
        let Error = document.createElement("p");
  Error.innerText = "Your format Is Not Correct/You Didn't Fill In The Birth Date/Server Side Has error Might Be Fixed If You Contact diooplatinum@gmail.com";
  Error.setAttribute("Class", "Pad");
  document.body.appendChild(Error);
    }
    else{
    let Sec = Mi / 1000;      
    let Min = Math.floor(Mi / 60000);  
    let Hour = Math.floor(Mi / 3600000);  
    let Day = Math.floor(Mi / 86400000);   
    let Week = Math.floor(Mi / 604800000);  
    let Month = Math.floor(Mi / 2629800000);  
    let Year = Math.floor(Mi / 31557600000);
    
    let Sec1 = Sec.toString();
    let Min1 = Min.toString();
    let Hour1 = Hour.toString();
    let Day1 = Day.toString();
    let Week1 = Week.toString();
    let Month1 = Month.toString();
    let Year1 =Year.toString();
    
    Sec1 = parseInt(Sec1[0]) + 1;
    Min1 = parseInt(Min1[0]) + 1;
    Hour1 = parseInt(Hour1[0])+ 1;
    Day1 = parseInt(Day1[0]) + 1;
    Week1 = parseInt(Week1[0]) + 1;
    Month1 = parseInt(Month1[0]) + 1;
    Year1 = parseInt(Year1[0]) + 1;
    
    let Sec2 = Sec.toString().length - 1;      
    let Min2 = Min.toString().length - 1;  
    let Hour2 = Hour.toString().length - 1;  
    let Day2 = Day.toString().length - 1;   
    let Week2 = Week.toString().length - 1;  
    let Month2 = Month.toString().length - 1;  
    let Year2 = Year.toString().length - 1;
    
    let Sec3 = 10 ** Sec2 * Sec1;      
    let Min3 = 10 ** Min2 * Min1;  
    let Hour3 = 10 ** Hour2 * Hour1;  
    let Day3 = 10 ** Day2 * Day1;   
    let Week3 = 10 ** Week2 * Week1;  
    let Month3 = 10 ** Month2 * Month1;  
    let Year3 = 10 ** Year2 * Year1;
    console.log(Year3)
    console.log(Year2)
    console.log(Year1)
    
    let Sec4 = Sec3 * 1000 - Mi;
    let Min4 = Min3 * 60000 - Mi;
    let Hour4 = Hour3 * 3600000 - Mi; 
    let Day4 = Day3 * 86400000 - Mi; 
    let Week4 = Week3 * 604800000 - Mi; 
    let Month4 = Month3 * 2629800000 - Mi;
    let Year4 = Year3 * 31557600000 - Mi;
    
    function Calc(Mi, Ann, Time, Time1){
    let Day5 = Math.floor(Mi / 86400000)
    
    let p = document.createElement('p')
    let p1 = `You Have Lived For ${Time1} ${Time} And You Have ${Day5} Days Left Until Your ${Ann} ${Time} Anniversary `
    p.innerText = p1;
    if(Time === 'Seconds'){
        p.setAttribute('Class', 'Pad')
        document.body.appendChild(p)
    }else{
        document.body.appendChild(p)
    }
    }
    Calc(Sec4, Sec3, 'Seconds', Sec)
    Calc(Min4, Min3, 'Minutes', Min)
    Calc(Hour4, Hour3, 'Hours', Hour)
    Calc(Day4, Day3, 'Days', Day)
    Calc(Week4, Week3, 'Weeks', Week)
    Calc(Month4, Month3, 'Months', Month)
    Calc(Year4, Year3, 'Years', Year)
    
    }}
   