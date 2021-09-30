
setInterval(time_fn,500);
function time_fn(){
    var time = new Date();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var ap = "AM";

    if(hr > 12){ ap = "PM";}

    if(hr > 12){ hr = hr -12;}
    if(hr ==0){hr =12;}

    if(hr < 10){ hr = '0' + hr;}
    if(min < 10){ min = '0' + min;}
    if(sec < 10){ sec = '0' + sec;}

    document.getElementById('hours').innerHTML = hr;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('meri').innerHTML = ap;
    
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function boom(){
    var four = document.getElementById("imgone");
    var btn = document.getElementById("btn");
    if(btn.value == "Party Time !"){
        four.src = "images/party.jpeg";
        btn.value = "Party End!!"
        document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   PARTY TIME !!";
        document.getElementById("wish").setAttribute("style","display:block")
        document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; PARTY la la la ";
    }
    else{
        four.src = "images/files.png";
        btn.value = "Party Time !"
        document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   FREE TIME !!";
        document.getElementById("wish").setAttribute("style","display:none")

    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var date = new Date();
var hour = date.getHours();

const opt1 = document.querySelector(".opt1");
opt1.addEventListener("click", morning)

function morning(){
    if(opt1.value == hour){
        var first = document.getElementById("imgone")
        first.src = "images/early.png";
        document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   WAKE UP !!";
        document.getElementById("wish").setAttribute("style","display:block")
        document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; GOOD MORNING ";
    }
    else{
        document.getElementById("imgone").src = "images/files.png";
        document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   FREE TIME !!";
        document.getElementById("wish").setAttribute("style","display:none")
    }
}


const opt2 = document.querySelector(".opt2");
opt2.addEventListener("click", noon)

function noon(){
    if(opt2.value == hour){
        var second = document.getElementById("imgone")
        second.src = "images/pizza.png";
        document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   LET'S HAVE SOME LUNCH  !!";
        document.getElementById("wish").setAttribute("style","display:block")
        document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; GOOD AFTERNOON ";
    }
    else{
        document.getElementById("imgone").src = "images/files.png";
        document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   FREE TIME !!";
        document.getElementById("wish").setAttribute("style","display:none")
    }
}


const opt3 = document.querySelector(".opt3");
opt3.addEventListener("click", night)

function night(){
    if(opt3.value == hour){
        var third = document.getElementById("imgone")
        third.src = "images/sleep.png";
        document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   SLEEPING TIME !!";
        document.getElementById("wish").setAttribute("style","display:block")
        document.getElementById("wish").innerHTML = "&nbsp;&nbsp;&nbsp; GOOD EVENING ";
    }
    else{
        document.getElementById("imgone").src = "images/files.png";
        document.getElementById("name").innerHTML = "&nbsp;&nbsp;&nbsp;   FREE TIME !!";
        document.getElementById("wish").setAttribute("style","display:none");
    }
}








//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
