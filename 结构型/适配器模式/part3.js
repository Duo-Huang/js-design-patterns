// 服务器数据适配 (服务器返回数据常变, ui处理理想数据是一个一维数组)
function ajaxAdapter(data) {
    return [data['key1'], data['key2'], data['key3']]
}

$.ajax({
    url: 'xxx.php',
    success: function(data) {
        if (data) {
            doSomeThing(ajaxAdapter(data));
        }
    }
}); 