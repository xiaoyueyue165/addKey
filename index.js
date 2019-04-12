'use strict';

module.exports = function addKey(sourceArray, extendObj, filterFn) {
    if (!Array.isArray(sourceArray)) {
        throw new Error("第一个参数必须为数组类型")
    }
    return sourceArray.forEach((v, index, sourceArray) => {
        for (var key in extendObj) {
            v[key] = extendObj[key]
        }
        typeof filterFn === 'function' ? filterFn(v, index, sourceArray) : '';
    })
}