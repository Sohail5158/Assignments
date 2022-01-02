var n=prompt("Enter number");
n=parseInt(n);
for( var i=2; i<=n ; i++)
 {
     var prime=1;
     for(var a=2; a<i; a++)
      {    
        if(i%a==0)
          {   
 	    prime=0;
	    break;
          }		
       }

	if(prime==1)
	{
	console.log(i);
	}
}