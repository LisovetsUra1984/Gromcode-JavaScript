let m = 0;
const n = 50;
let result = 1;
for(let i = m;i <=n;i++)
{
  if(i % 2== 0 & i % 4 !=0)
  {
    result=result + i;
  }
  else if (i % 3==0)
  {
    result=result - i;
  }
  else if (i % 4==0)
  {
    result = result * i;
  }
}
console.log(result);