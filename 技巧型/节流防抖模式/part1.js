// 防抖函数
function debounce(fn, delay) {
    let timer;
    return function () {
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// test
function testDebounce(e, content) {
    console.log(e, content);
}

var testDebounceFn = debounce(testDebounce, 1000);

document.onmousemove = function (e) {
    testDebounceFn(e, 'debounce');
}