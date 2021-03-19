class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
        this.length = this.list.length;
        this.splice = [].splice;
    }

    first() {
        this.index = 0;
        return this.list[0];
    }

    last() {
        this.index = this.length - 1;
        return this.list[this.length - 1];
    }

    prev() {
        if (--this.index > 0) {
            return this.list[this.index];
        }
        this.index = 0;
        return null;
    }
 
    next() {
        if (++this.index < this.length) {
            return this.list[this.index];
        }
        this.index = this.length - 1;
        return null;
    }

    get(num) {
        if (num < 0 && Math.abs(num) <= this.length) {
            this.index = this.length + num;
            return this.get(this.length + num);
        }
        if (num >= 0 && num <= this.length - 1) {
            this.index = num;
            return this.list[num];
        }
        return null;
    }

    each(fn) {
        for (var i = 0; i < this.length; i++) {
            if (fn.call(this.list[i], this.list[i], i)) {
                break;
            }
        }
    }
}
 
class Container {
    constructor(list) {
        this.list = list;
    }
 
    // 生成迭代器
    getIterator() {
        return new Iterator(this);
    }
}