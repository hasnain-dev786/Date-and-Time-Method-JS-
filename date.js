setInterval(()=>
{
    let myDate = new Date()
    let time = myDate.toLocaleTimeString()
    document.getElementById("time").innerHTML=time
 },1000)


let mydata = new Date()
console.log(mydata)


let mydays =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"

]
let days =mydays[mydata.getDay()]
document.getElementById("day").innerHTML = days


let myMonths =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let month = myMonths[mydata.getMonth()]
document.getElementById("month").innerHTML = month   

let date =mydata.getDate()
document.getElementById("date").innerHTML = date

let year = mydata.getFullYear()
document.getElementById("year").innerHTML = year

 


