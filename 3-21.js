// 数组隐式转换
const a = {
    i: 1,
    toString() {
        return a.i ++
    }
};

if(a == 1 && a == 2 && a ==3) {
    console.log(1)
}