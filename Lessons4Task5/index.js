let m = 1;
const n = 50;
let result = 0;
let t = i;
for(let i = m;i <= n;i++)
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
else if(i % 5==0)
{
console.log(t)
}

}
