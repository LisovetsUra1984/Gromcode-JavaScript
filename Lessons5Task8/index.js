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
  for(from; from<=to; from++ )
  {
    res = res+from;
  }
  return res;
}
   