//請寫一個程式求某個大於 1 的數 n 之平方根 。
function Something(n)
{   
    let k = 0;
    if(n>1)
    {   
        k = Math.pow(n,0.5);
    }
    return k;
}
console.log(Something(16));