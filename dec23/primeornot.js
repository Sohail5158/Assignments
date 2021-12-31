var n=prompt("enter any number");
n=parseInt(n);
if(n==0)
{
alert("number is not a prime");
}
else if(n==1)
{
alert("number is neither prime nor composite number");
}
else
{
for(i=2;i<n;i++)
{
if(n%i==0)
{
alert("number is not prime");
}
else
{
alert("number is prime");
}
}
}