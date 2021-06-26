// 請寫一個函式 接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。

function findddSmallerrrTotalll(numArray, n) 
{
    let smallTotal = 0;
    for (let i = 0; i < numArray.length; i++) 
    {
      if (numArray[i] < n) 
      {
        smallTotal = smallTotal + numArray[i];
      }
    }
    return smallTotal;
}