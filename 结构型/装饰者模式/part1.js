// 装饰者
var decorator = function(input, fn) {
    var input = document.getElementById(input);
    if (typeof input.onclick === 'function') {
        var oldClickFn = input.onclick;
        // 重写增强
        input.onclick = function() {
            oldClickFn();
            fn();
        }
    } else {
        input.onclick = fn;
    }
}