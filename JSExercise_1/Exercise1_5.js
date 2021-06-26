//請將分數轉換為等第 90+=A, 80+=B, 70+=C, 69-=D
function score(n)
{
    if(n>=90)
    {
        console.log("A");
    }
    if(n>=80&&n<90)
    {
        console.log("B");
    }
    if(n>=70&&n<80)
    {
        console.log("C");
    }
    if(n<70)
    {
        console.log("D");
    }
}
(score(98));