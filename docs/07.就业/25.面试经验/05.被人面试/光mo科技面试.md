## 公司

主要是集合各个大牛然后进行AIGC方向的内容的开发

10多个人的创业公司

## 个人反思：

- [x] 腾讯会议什么的准备不够充分

如果是远程面试得话在家面试就好了，并且个人电脑上得软件这些安排好先

- [ ] js对于异步函数的理解不够对
- [ ] js的题目掌握得不够深入
- [ ] 自我介绍准备的不够充分
- [ ] 网络安全这一块准备得不够深入
- [ ] 面试地点的选择应该在安静点的地方
- [x] 面试前的工具应该准备好。
- [ ] 自我介绍中应该暴露更多关于我自己长处
- [ ] 个人项目介绍部分准备得不够好
- [ ] 编程题目不是很熟练

## 题目：

### 1.下面题目的输出是什么

```
let a = 10
let obj = {
    a: 20,
    x:()=>{
        console.log(this)
    },
    y:function (){
        console.log(this)
    }
}
let tmp = obj.y
tmp()
obj.y()
obj.x()
```

答案：

编辑器运行后的

```
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
  }
}
{ a: 20, x: [Function: x], y: [Function: y] }
{}

```

浏览器得到的

```
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
{a: 20, x: ƒ, y: ƒ}
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
```

知识点：

1.this的运行机制

2.箭头函数和常规函数

详细解释

```
变量a被赋值为10，是全局变量。

对象obj包含属性a、方法x和方法y。属性a被赋值为20。

方法x是一个箭头函数，箭头函数的this绑定是在定义时确定的，它继承自外层作用域的this，而外层作用域是全局作用域。因此，在箭头函数x中打印this时，输出的是全局对象（在浏览器环境中是Window对象）。

方法y是一个普通函数，普通函数的this绑定是在运行时确定的。在这个例子中，通过将obj.y赋值给tmp，然后通过tmp()调用方法y。在这种情况下，函数y的this指向的是全局对象（也就是Window对象），因此在函数y中打印this时，输出的是全局对象。

最后，通过obj.y()直接调用方法y，此时函数y的this指向的是对象obj本身，所以在函数y中打印this时，输出的是对象obj。

需要注意的是，箭头函数和普通函数的this绑定规则是不同的，箭头函数没有自己的this，而是继承自外层作用域的this。普通函数的this绑定取决于函数的调用方式，可以通过函数名调用或者作为对象的方法调用，this的指向会有所不同。
```

### 2.前端有哪些危险？并且如何进行防范。

| 方式                                    | 攻击详情                                                     | 防御方法                             |
| --------------------------------------- | ------------------------------------------------------------ | ------------------------------------ |
| XSS (Cross Site Scripting) 跨站脚本攻击 | `XSS`的攻击目标是为了盗取存储在客户端的`cookie`或者其他网站用于识别客户端身份的敏感信息。一旦获取到合法用户的信息后，攻击者甚至可以假冒合法用户与网站进行交互 |                                      |
| iframe                                  |                                                              | 可以在html配置防止其他字段攻击的方式 |
| csrf                                    |                                                              |                                      |
| SQL攻击                                 |                                                              |                                      |

xss攻击

corsf

iframe攻击

### 3.以下结果的输出是什么？

```
const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("resolve3")
        console.log("timer1")
    }, 0)
    resolve("resolve1")
    resolve("resolve2")
}).then(res =>{
    console.log(res)
    setTimeout(()=>{
        console.log("timer2")
    }, 0)
    return 333
}).finally(res =>{
    console.log("finally", res)
})
```

```
个人分析：resolve1 ->resole1-> finallyresolve1 -> timer1 -> resolve2 ->resolve2 -> timer2
```

gpt和控制台输出：

编辑器控制台（我信这个）

```
resolve1
finally undefined
timer1
timer2
```

gpt（有大问题）

```
resolve1
finally undefined
resolve3
timer1
333
timer2
```

```
resolve1
finally undefined
timer1
resolve3
timer2
finally 333
```

浏览器：

```
resolve1
finally undefined
undefined
timer1
timer2
```

### 4.编程：请实现main函数，让dataList列表执行顺序保存和并发保存

```
// 要保存的列表
const dataList = [1, 2, 3, 4, 5];

// 保存的接口函数
async function saveData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, Math.random() * 100);
    });
}

async function main() {
    // 串行执行，按顺序保存12345
    for (const data of dataList) {
        await saveData(data);
        console.log(`保存数据 ${data}`);
    }

    // 并行执行，顺序无关，可以并发请求
    const promises = dataList.map((data) => saveData(data));
    await Promise.all(promises);
    console.log("所有数据保存完成");
}

main();
```

