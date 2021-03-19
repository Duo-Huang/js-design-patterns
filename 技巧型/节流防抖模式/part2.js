// 节流函数
function throttle(fn, delay) {
    let timer;
    return function () {
        let args = arguments;
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            clearTimeout(timer);
            timer = null;
        }, delay)
    }
}

// test
function testThrottle(e, content) {
    console.log(e, content);
}

var testThrottleFn = throttle(testThrottle, 1000);

document.onmousemove = function (e) {
    testThrottleFn(e, 'throttle');
}