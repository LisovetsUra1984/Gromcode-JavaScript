function compareSums(a,b,c,d)
{

    return sum(a,b)>sum(c,d);
}
function sum(from, to)
{
  res = from;
    do{
      from++
    res = res+from;
    }
    while(from<to)
  
  return res;
}
