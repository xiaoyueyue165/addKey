'use strict';

/**
 * 为数组添加新的自定义键值以及过滤每个子项的方法
 *
 * @param {*} arr
 * @param {*} obj { isShow:false,isStar:false} 第二个参数为 Function 时 可省
 * @param {*} filterFn 第二个参数为 Object 时 可省
 * @returns Array
 */

module.exports = function addKey(sourceArray, extendObj, filterFn) {
  var getType = function (a) {
    var typeArray = Object.prototype.toString.call(a).split(" ");
    return typeArray[1].slice(0, -1);
  }
  var secondParamType = getType(arguments[1]);

  if (!getType(sourceArray) == 'Array') {
    throw new Error("第一个参数必须为数组类型")
  }
  if (secondParamType === 'Object') {
    return sourceArray.forEach((v, index, sourceArray) => {
      for (var key in extendObj) {
        v[key] = extendObj[key]
      }
      typeof filterFn === 'function' ? filterFn(v, index, sourceArray) : '';
    })
  } else if (secondParamType === 'Function') {
    return sourceArray.forEach((v, index, sourceArray) => {
      arguments[1](v, index, sourceArray)
    })
  } else {
    return sourceArray;
  }
}
