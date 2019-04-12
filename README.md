# addKey
> Add a new key-value pair for each single item of the array type and filter the children


## Usage

Works with arrays.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save addkey
```

## Usage

Works with arrays.

```js
const addKey = require('./addkey');
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
 addKey(arr, { 'isShow': false }, (v, index, array) => {
    index === array.length - 1 ? (v.name = '铠', v.isShow = true) : ''
})

// log arr =>

/*  
   [
      { id: 1, name: '亚瑟', isShow: false },
      { id: 2, name: '狄仁杰', isShow: false },
      { id: 3, name: '铠', isShow: true }
   ] 
*/
```


### License

Copyright © 2019, [xiaoyueyue](https://github.com/xiaoyueyue165).
Released under the [MIT License](LICENSE).

