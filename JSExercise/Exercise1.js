//請寫一個程式計算 10! ，也就是 10*9*8*....*1 
function Factorial(n)
{
    let a = 1;
    for(var i=1;i<=n;i++)
    {
        a = a * i;
    }
    return a;
}
console.log(Factorial(10));

/*遞迴
function recursion (num)
{
	if(num == 1)
    {
		return 1;
	}
    else
    {
		return num*recursion (num - 1);
	}
}
console.log(recursion (10));*/