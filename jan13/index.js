// let array=[ [4, 3, 2, 4], [9, 1, 5, 6], [2, 7, 9, 8], [8, 5, 2, 0]];
alert("enter elements for a 4x4 matrix");
var a00=parseInt(prompt("enter a[0][0] element "));
var a01=parseInt(prompt("enter a[0][1] element "));
var a02=parseInt(prompt("enter a[0][2] element "));
var a03=parseInt(prompt("enter a[0][3] element "));
var a10=parseInt(prompt("enter a[1][0] element "));
var a11=parseInt(prompt("enter a[1][1] element "));
var a12=parseInt(prompt("enter a[1][2] element "));
var a13=parseInt(prompt("enter a[1][3] element "));
var a20=parseInt(prompt("enter a[2][0] element "));
var a21=parseInt(prompt("enter a[2][1] element "));
var a22=parseInt(prompt("enter a[2][2] element "));
var a23=parseInt(prompt("enter a[2][3] element "));
var a30=parseInt(prompt("enter a[3][0] element "));
var a31=parseInt(prompt("enter a[3][1] element "));
var a32=parseInt(prompt("enter a[3][2] element "));
var a33=parseInt(prompt("enter a[3][3] element "));
let array=[[a00,a01,a02,a03],[a10,a11,a12,a13],[a20,a21,a22,a23],[a30,a31,a32,a33]];
console.log(array);
document.write('sum of diagonals =');
var sum=0;
for(var i=0;i<array.length;i++)
{
    for(var j=0;j<array[i].length;j++)
    {
        if(i==j)
        {
           sum+=array[i][j];           
        }
    }
}
console.log(sum);
document.write(sum);

