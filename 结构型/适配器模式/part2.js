function doSomeThing(name, title, age, color, size, prize) {}
// 默认值适配
function doSomeThing (obj) {
    var _adapter = {
        name: '孟子',
        title: '古人',
        age: '76',
        color: 'pink',
        size: 100,
        prize: 90
    };

    for (var i in _adapter) {
        _adapter[i] = obj[i] || _adapter[i];
    }
    // ...
}