var Alert = function(text) {
    this.content = text
}

Alert.prototype.show = {
    // 显示警告框
}

var Confirm = function(text) {
    this.content = text
}

Confirm.prototype.show = {
    // 显示确认框
}

var Prompt = function(text) {
    this.content = text
}

Prompt.prototype.show = {
    // 显示提示框
}
// 弹窗工厂函数
var PopFactory = function(type, content) {
    switch(type) {
        case 'alert':
            return new Alert(content);
        case 'confirm':
            return new Confirm(content);
        case 'prompt': 
        return new Prompt(content);
    }
}   