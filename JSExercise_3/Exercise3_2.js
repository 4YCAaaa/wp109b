//判断是否符合指定格式
function matchesPattern(str) 
{
    var reg=/^(\d{3}\-){2}\d{4}$/;
    return reg.test(str);
}
