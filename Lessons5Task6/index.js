function getPrimes(n){
    for (var i=2; i<=n; i++){
        for(var j=2; j<=i; j++){
            if (i%j == 0) break;
        }
        if(j==i) console.log(i);
    }
    }
    console.log(getPrimes(35));