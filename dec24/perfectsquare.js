let n = prompt("Enter a Number");
n = parseInt(n);
var check = true;

for (var i = 0; i < n; i++) 
{
    var s= i * i
    if (s== n) 
    {
        alert(" perfect square");
        check= false;
       break;
    }

}
if (check == true)
{
    alert(" not a perfect square");
}

