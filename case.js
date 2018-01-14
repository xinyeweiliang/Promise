let MyPromise = require('./Promise');
let p1 = new MyPromise(function (resolve, reject) {
    setTimeout(function () {
        let num = Math.random();
        if(num<.5){
            resolve(num);
        }else{
            reject('失败');
        }
    })
});
let p2 = p1.then(function (data) {
    return new MyPromise(function (resolve, reject) {
        resolve(new MyPromise(function (resolve, reject) {
            resolve(100);
        }))
    })
})
console.log(p1);
console.log(p2);