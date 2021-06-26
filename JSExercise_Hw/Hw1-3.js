/*加分題:請寫一個函數 primeBetween(a,b) 可以印出 a..b 之間的質數
例如 primeBetween(3,15)*/
function isPrime(n) {
    if (n < 2) 
        return 0;
    for (var k=2; k * k <= n; k++)
        if (n % k == 0) 
            return 0;
    return 1;
}

function primeBetween(a, b) {
    for (var i=a; i<=b; i++)
        if (isPrime(i))
        console.log(i);
}

primeBetween(3, 15)