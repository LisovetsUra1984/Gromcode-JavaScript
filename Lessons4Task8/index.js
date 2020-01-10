let sum = 0;
for (let i = 1; i <= 10000; i++)
{
sum = sum + i;
}
  let res = sum / 1234 > sum % 1234 ? true : false;
  console.log(res);