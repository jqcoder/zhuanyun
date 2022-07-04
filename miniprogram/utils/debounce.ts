export default function (fn: any, delay: number, firstInto = false) {
    let timer: any = null;
    let isUse = false;
    const _debounce = function (...args: any) {
        if (timer) clearTimeout(timer);
        // 第一次是否执行 && 是否已经执行过
        if (firstInto && !isUse) {
            fn.apply(this, args);
            isUse = true;
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
                isUse = false;
            }, delay);
        }
    }

    // 取消功能
    _debounce.cancel = function () {
        if (timer) clearTimeout(timer);
        timer = null;
        isUse = false;
    }

    return _debounce;
}

