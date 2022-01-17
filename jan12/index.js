var countl= 0;
var countd=0


function Like(){
    countl= countl+1;
    document.getElementById("like").innerText=countl;
}
function Disl(){
    countd= countd+1;
    document.getElementById("dislike").innerText=countd;
}