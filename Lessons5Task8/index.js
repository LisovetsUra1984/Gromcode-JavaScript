function sum(from,to){
    res = 0;
    for(from;from<=to;from++){
    res = res+from;
    }
    return res;
    }
    function compareSums(a,b,c,d){
        if(sum (a, b) >  sum  (c,d) ){
            return true;
        }
        else{
            return false;
        }
    }
   