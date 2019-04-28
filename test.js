'use strict';
require('mocha');
const assert = require('assert');
const addKey = require('./');

let arr = [
    {
        id: 1,
        name: '亚瑟'
    },
    {
        id: 2,
        name: '狄仁杰'
    },
    {
        id: 3,
        name: '曹操'
    }
]
describe('addKey', function () {
    it('should return add custom key:', function () {
        addKey(arr, { 'Address': 'Chinese' })

        assert(arr[0].Address === 'Chinese')
        assert(arr[1].Address === 'Chinese')
        assert(arr[2].Address === 'Chinese')
    });

    it('should return add custom key and filtered correctly:', function () {
        addKey(arr, { 'isShow': false }, (v, index, array) => {
            index === array.length - 1 ? (v.name = '铠', v.isShow = true) : ''
        })

        assert(!arr[0].isShow)
        assert(!arr[1].isShow)
        assert(arr[2].isShow) // true
    });

    it('should return omit custom key and filtered correctly:', function () {
        addKey(arr, (v, index, array) => {
            index === array.length - 1 ? (v.name = '曹操', v.isShow = true) : ''
        })

        assert(arr[0].isShow === undefined)
        assert(arr[1].isShow === undefined)
        assert(arr[2].isShow) // true
    });


});
