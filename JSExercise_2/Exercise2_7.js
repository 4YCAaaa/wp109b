// 請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。(**)
function flatten(array) 
{
    let tempArray = [];
    for (let i = 0; i < array.length; i++)
     {
      if (Array.isArray(array[i]))
       {
        let flat = flatten(array[i]);
        for (let j = 0; j < flat.length; j++)
        {
          tempArray.push(flat[j]);
        }
      }
       else
      {
        tempArray.push(array[i]);
      }
    }
    return tempArray;
  }