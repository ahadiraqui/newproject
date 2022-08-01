function isprime(num)
{
    if(num===1) return false;
    if(num===2) return true;
    for(let n=2;n<num;n++)
    {
        if(num%n===0)
        return false;
    }
    return true;
}
function allprime(n)
{

for (let num = 1;  num<=n; num++) {
    if(isprime(num)){
   console.log(num+' si prime ');
}
else{
    console.log(num+'is not prime');
}
}
}
allprime(11);