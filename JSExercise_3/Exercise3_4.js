//計時器(**)
function counttttt(start, end)
 {
    console.log(start);
    var Timer = setInterval(function()
    {
        console.log(++start);
        if(start===end){
            cancel();
        }
    },100);
    var cancel = function()
    {
        clearInterval(Timer);
    }
    var obj = {
        "cancel":cancel
    };
     
    return obj;
}