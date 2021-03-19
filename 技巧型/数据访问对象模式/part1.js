var BaseLocalStorage = function (prefix, timeSign) {
    this.prefix = prefix;
    this.timeSign = timeSign || '|-|';
}

BaseLocalStorage.prototype = {
    // 操作状态
    status: {
        SUCCESS: 0, // 成功
        FAILURE: 1, // 失败
        OVERFLOW: 2, // 溢出
        TIMEOUT: 3 // 过期
    },
    // 保存存储链接
    storage: localStorage || window.localStorage,
    // 获取本地存储数据库数据真实字段
    getKey: function (key) {
        return this.prefix + key;
    },
    // 添加(修改)数据
    set: function (key, value, callback, time) {
        var status = this.status.SUCCESS,
            key = this.getKey(key),
            time = time || new Date().getTime() + 1000 * 60 * 60 * 24 * 30;
        try {
            this.storage.setItem(key, time + this.timeSign + value);
        } catch (e) {
            status = this.status.OVERFLOW;
        }
        callback && callback.call(this, status, key, value);
    },
    // 获取数据
    get: function () {

    },
    // 删除数据
    remove: function () {

    }
}