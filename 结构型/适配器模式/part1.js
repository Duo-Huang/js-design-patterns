// 相似框架适配
A(function() {
    A('button').on('click', function() {
        // ...
    })
})
// jQuery替代A框架
window.A = A = jQuery;

// 异类F框架适配
var F = F || {};

F.g = function(id) {
    return document.getElementById(id);
}
F.on = function(id, type, fn) {
    var dom = typeof id === 'string' ? this.g(id) : id;
    if (dom.addEventListener) {
        dom.addEventListener(type, fn);
    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);
    } else {
        dom['on' + type] = fn;
    }
}

F.on(window, 'load', function() {
    F.on('myBtn', 'click', function() {
        // ...
    })
})

// F框架适配jQuery
F.g = function(id) {
    return $('#' + id).get(0);
}

F.on = function(id, type, fn) {
    var dom = typeof id === 'string' ? $('#' + id) : $(id);
    dom.on(type, fn);
}