var Factory = function(type, content) {
    if (this instanceof Factory) {
        return new this[type](content);
    }
    return new Factory(type, content);
}

Factory.prototype = {
    Java: function(content) {
        // ...
    },
    JavaScript: function(content) {
        // ...  
    },
    UI: function(content) {
        this.content = content;
        (function(content) {
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.borber = '1px solid red';
            document.getElementById('container')
            .appendChild(div);
        })(content);
    },
    Php: function(content) {
        // ...
    }
}