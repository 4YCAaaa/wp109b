// 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
function isUpperCase(str) 
{
    if (str[0].charCodeAt() >= 65 && str[0].charCodeAt() <= 90) 
    {
      return true
    }
     else 
    {
      return false;
    }
}