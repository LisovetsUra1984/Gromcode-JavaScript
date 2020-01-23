function compareSums(a,b,c,d)
{
  if(sum(a,b)>sum(c,d))
  {
    return true;
  }
  else
  {
    return false;
  }
}
function sum(a,b)
{
  res = a;
  for(a; a<=b; a++ )
  {
    res = res+a;
  }
  return res;
}
   