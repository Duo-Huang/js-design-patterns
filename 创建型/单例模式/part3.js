// 惰性单例
var LazySingle = (function() {
    var _instance = null;
    function Single() {
        return {
            publicMethod: function() {},
            publicProperty: '0.1.0'
        }
    }

    return function() {
        if (!_instance) {
            _instance = Single();
        }
        return _instance;
    }
})();

console.log(LazySingle().publicProperty) // 0.1.0