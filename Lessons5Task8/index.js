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
function sum(from,to)
{
res = from;
do{
from++
res = res+from;
}
while(from<to);
  
return res;
}