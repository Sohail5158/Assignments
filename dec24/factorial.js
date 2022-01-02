var n=prompt("Enter a positive integer");
n=parseInt(n);
if (n< 0) 
{
    alert('enter a positive number');
}
else if (n=== 0) 
{
    alert("1");
}
else 
{
    let fact = 1;
    for (i = 1; i <= n; i++) 
{
        fact *= i;
}
    alert(fact);
}