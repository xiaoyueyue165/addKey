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
var ar = [
    { id: 1, name: '亚瑟', isShow: false },
    { id: 2, name: '狄仁杰', isShow: false },
    { id: 3, name: '铠', isShow: false }
]
addKey(arr, { 'isShow': false }, (v, index, array) => {
    index === array.length - 1 ? v.name = '铠' : '';
})
console.log(arr);