//查找重複元素
function duplicates(array) {
    var a=array.sort(),b=[];
    for(var i in a){
        if(a[i]==a[i-1] && b.indexOf(a[i])==-1) b.push(a[i]); 
    }
    return b;
}