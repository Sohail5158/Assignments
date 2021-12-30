var d=prompt("enter any number");
var e=prompt("enter any number");
var f=prompt("enter any number");
d=parseInt(d);
e=parseInt(e);
f=parseInt(f);
var z=[];
z.push(d);
z.push(e);
z.push(f);
console.log(z)

if(z[0]>z[1]&&z[0]>z[2])
{
alert(z[0])
}
else if(z[1]>z[2]&&z[1]>z[0])
{
alert(z[1])
}
else
{
alert(z[2])
}