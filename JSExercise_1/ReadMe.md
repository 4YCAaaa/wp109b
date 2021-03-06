## 可以寫的題目
# 基本習題
* 請寫一個程式計算 10! ，也就是 10*9*8*....*1 。
* 請寫一個程式印出九九乘法表。
* 請寫一個程式求某個大於 1 的數 n 之平方根 。
* 請寫一個函數 m357(a,b) 列出 a 到 b 之間為 3,5,7 任一數之倍數的所有數值？
  * 範例： m357(10,15) => 10, 12, 14, 15
* 請將分數轉換為等第 90+=A, 80+=B, 70+=C, 69-=D
  * 範例： degree(85) => 'B'
* 給定兩個數字，請算出它們的最大公因數？
  * 範例： commonFactor(12,15) => 3
* 將一個10進位的數字換成二進位數字？
  * 範例 binary(6) => "110"
* 請檢查某數是否為質數？ 範例： isPrime(17) => true
* 給你兩個數字，請算出這兩個數字之間有幾個質數(包含輸入的兩個數字)？
  * 範例： countPrime(3, 7) => 3
  ---
  # 字串處理習題
* 請判斷一個字串是否是一個迴文？
  * 範例： palindrome("abcba") => true
* 請將輸入的字串翻轉？
  * 範例 reverse("abcde") => "edcba"
* 請輸出某二進位字串的偶校驗位元 (parity bit)
  * 範例： evenParity("1010001") => 1
* 請輸出某二進位字串的1補數
  * 範例： complement1("10101010") => "01010101"
* 請寫一個程式檢查數學是中的括號是否合法？
  * 範例： isPaired("(a+3)*5/7)))*8") => false
   ---
   # 陣列處理習題
* 請在一個已經排序的陣列中之正確位置插入一個數值。
  * 範例： insert([1,2,5,6,7], 3) => [1,2,3,5,6,7]
* 請用二分搜尋法搜尋一個已經排好序的陣列。
  * 範例： find([ 1, 4, 5, 8, 9], 5) => 2 , 找不到時傳回 -1。
* 請將 a 到 b 之間無法被 3, 5, 7 整除的數字放到陣列中？
  * 範例： filter357(5,10) = [8]
  * 範例： filter357(5,15) = [8,11,13]
* 請算出某陣列的平均值？
  * 範例： mean([1,2,3,4,5]) => 3
* 請算出某陣列的標準差？ (標準差為 (xi-x)^2 的總和)
  * 範例： sd([1,2,3,4,5]) = sqrt((2^2+1^2+0^2+1^2+2^2)/5) = sqrt(2)=1.414。
* 請寫一個函數找出一個排序好陣列中差異最小的兩個數之距離？
  * 範例： minGap([1,3,6,7,10]) = 1
* 請寫一個函數 random(n, a, b) 可以產生 n 個介於 a 到 b 之間的浮點亂數？
  * 範例： random(3, 10, 20)= [13.76, 19,23, 14,11]
* 寫一個程式做因數分解。
  * 範例：factor(45) => [3, 3, 5]
  ---
  # 矩陣處理習題
* 寫一個程式把矩陣轉置。
  * 範例：transpose([[1,2,3], [3,2,1]]) => [[1,3], [2,2], [3,1]]
* 請寫一個函數計算兩矩陣相加？
  * 範例： add([[1,2],[3,4]], [[1,1],[1,1]]) => [[2,3], [4,5]]
* 請寫一個函數計算兩矩陣相減？
  * 範例： sub([[1,2],[3,4]], [[1,1],[1,1]]) => [[0,1], [2,3]]
* 請寫一個函數計算兩矩陣相乘？
  * 範例： mul([[1,2],[3,4]], [[1,1],[1,1]]) => [[3,3], [7,7]]
* 請寫一個函數 neg(A) 傳回某矩陣 A 的負矩陣 -A。
  * 範例： neg([[1,2],[3,4]]) => [[-1,-2],[-3,-4]]
* 請寫一個函數判斷某方陣是否每行每列的加總都是一樣的？
  * 範例： isMagic([[1,2,3], [2,3,1], [3,1,2]]) = true
  * 範例： isMagic([[1,2,3], [2,3,1], [3,2,1]]) = false
* 請寫一個函數可以把 n*m 個數值的陣列改變為的矩陣？
  * 範例： asMatrix([1,2,3,4,5,6], 2, 3) => [[1,2,3],[4,5,6]]
  ---