// 封装方法简化使用
var A = {
    get: function(id) {
        return document.getElementById(id);
    },
    css: function(id, key, value) {
        this.get(id).style[key] = value;
    },
    attr: function(id, key, value) {
        this.get(id)[key] = value;
    },
    on: function(id, type, fn) {
        this.get(id)['on' + type] = fn;
    }
}
