function getPrimes(n){
if(n==1) 
return false;
for(d=2; d*d<=n; d++){ 
if(n%d==0) 
return false;
}
return true;
}