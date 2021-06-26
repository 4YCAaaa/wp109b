//請寫一個函數 m357(a,b) 列出 a 到 b 之間為 3,5,7 任一數之倍數的所有數值？
function m(a,b)
{
    for(var i=a;i<=b;i++)
    {
        if(i%3==0||i%5==0||i%7==0)
        {
            console.log(i)
        }
    }
}
console.log(m(1,10));