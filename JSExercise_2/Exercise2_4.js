// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
function sum(array) 
{
    let total = 0;
    for (let i = 0; i < array.length; i++) 
    {
      total = total + array[i];
    }
    return total;
  }