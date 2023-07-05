 let count = 0;

 document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
 }

 document.getElementById("RestBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
 }

 document.getElementById("IncreaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
 }
