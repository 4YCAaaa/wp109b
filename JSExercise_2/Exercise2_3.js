// 回傳陣列裡面所有小於 n 的數的數量
function findSmallCounttt(numArray, n) 
{
    let smallThanNNN = 0;
    for (let i = 0; i < numArray.length; i++)
     {
      if (numArray[i] < n) 
      {
        smallThanNNN++;
      }
    }
    return smallThanNNN;
  }