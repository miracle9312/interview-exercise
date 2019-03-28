//实现一个sleep函数
// promise实现
const sleep = (time) =>{
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    })
};

sleep(300).then(() => {
    console.log('hello world');
});

// async await实现
const sleepAsync = async (fn, time) => {
    const p1 = new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
    await p1;
    fn();
};

sleepAsync(()=>{console.log('hello async')}, 300);

// generator实现
sleepGenerator = (time) => {
    function *gen() {
        yield new Promise((resolve, reject) => {
            setTimeout(resolve, time);
        })
    }
    return gen().next().value;
};

sleepGenerator(300).then(() => { console.log('hello generator') });