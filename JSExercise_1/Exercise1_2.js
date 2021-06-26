//請寫一個程式印出九九乘法表。
function Multab() 
{
    let a = 0;
    for(var i=1;i<10;i++)
    {
        for(var j=1;j<10;j++)
        {
            a = i*j;
            console.log(a);
        }
    }
}
console.log(Multab());