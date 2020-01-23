function compareSums(a,b,c,d)
{
if(sum(a,b)>sum(c,d))
{
return true;
}
else if(sum(a,b)<sum(c,d))
{
return false;
}
}
function sum(a,b)
{
res = a;
do{
a++
res = res+a;
}
while(a<b);
  
return res;
}