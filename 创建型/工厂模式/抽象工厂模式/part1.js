// 抽象工厂方法
var AbstractFactory = function(subType, superType) {
    if (typeof AbstractFactory[superType] === 'function') {
        // 将子类constructor指向子类
        subType.constructor = subType; // TIP: 下面赋值子类的prototype会改写子类的构造函数
        // 子类原型继承父类
        subType.prototype = new AbstractFactory[superType](); // TIP: 我们需要继承父类的实例,而不只是父类的原型
    } else {
        // 不存在该抽象类抛错
        throw new Error('未创建该抽象类');
    }
}

// 小汽车抽象类
AbstractFactory.Car = function() {
    this.type = 'car';
}

AbstractFactory.Car.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function() {
        return new Error('抽象方法不能调用');
    }
}

// 公交车抽象类
AbstractFactory.Bus = function() {
    this.type = 'bus';
}

AbstractFactory.Bus.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getPassengerNum: function() {
        return new Error('抽象方法不能调用');
    }
}

// 使用

// 宝马汽车类
var BMW = function(price, speed) {
    this.price = price;
    this.speed = speed;
}

// 抽象工厂实现对Car抽象类的继承
AbstractFactory(BMW, 'Car');
// 实现继承来的抽象方法
BMW.prototype.getPrice = function() {
    return this.price;
}
BMW.prototype.getSpeed = function() {
    return this.speed;
}
