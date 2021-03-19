// 外观模式兼容性封装
function addEvent(dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}

// test
var input = document.getElementById('input');
addEvent(input, 'click', function() {
    // ...
})