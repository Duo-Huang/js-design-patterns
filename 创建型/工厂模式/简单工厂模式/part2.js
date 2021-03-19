function createPop(type, content) {
    var o = new Object();
    o.content = content;
    o.show = function() {
        // 显示方法
    }

    if (type === 'alert') {
        // 警告框差异处理
    }

    if (type === 'confirm') {
        // 确认框差异处理
    }

    if (type === 'prompt') {
        // 提示框差异处理
    }

    return o;
}

// 创建警告框
var userNameAlert = createPop(
    'alert',
    '用户名只能是字母数字组合'
    );