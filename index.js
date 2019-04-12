'use strict';

module.exports = function addKey(arr, obj, filterFn) {
    if (!Array.isArray(arr)) {
        throw new Error("第一个参数必须为数组类型")
    }
    let temp = arr.forEach((v, index, arr) => {
        typeof filterFn === 'function' ? filterFn(v, index, arr) : '';
        for (var key in obj) {
            v[key] = obj[key]
        }
    })
    return temp;
}