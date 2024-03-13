```
const myPromise = Promise.resolve(Promise.resolve("Promise!"));
function funcOne() {
    myPromise.then(res => {
        console.log("执行第一个then", res)
        return res }).then(res => {
            console.log('执行第二个then', res)
        });
    setTimeout(() => console.log("Timeout!1"), 0);
    console.log("Last line!"); }
async function funcTwo() {
    console.log('进入funcTwo')
    const res = await myPromise;
    console.log('执行完第一个await，继续往下执行')
    console.log(await res);
    console.log('执行完第二个await，继续往下执行')
    setTimeout(() => console.log("Timeout!2"), 0);
    console.log("Last line!"); }
funcOne();
funcTwo();


```

```
// Last line!
//     进入funcTwo
// 执行第一个then Promise!
//     执行完第一个await，继续往下执行
// 执行第二个then Promise!
//     Promise!
//     执行完第二个await，继续往下执行
// Last line!
//     Timeout!1
// Timeout!2

```

