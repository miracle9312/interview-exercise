let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]];

// 递归实现
// 分析：迭代arr数组，每次取出一条，
// 判断是否为数组，若是，则展开回插入数组，
// 否则将该项插入到返回数组中，如此最终的返回数组即为扁平化数组
function flatten(arr) {
    const rtnArr = [];
    while(arr.length) {
        const item = arr.shift();
        if(Array.isArray(item)) {
            arr.unshift(...item);
        }else {
            rtnArr.push(item)
        }
    }
    return rtnArr;
}

console.log(flatten(arr));