//移除数组中的元素
function removeWithoutCopy(array, item) {
    while(array.indexOf(item) != -1){
        array.splice(array.indexOf(item),1);
    }
    return array;
}