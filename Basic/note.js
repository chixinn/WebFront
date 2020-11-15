// Chapter1-Js: 变量｜ 数字与运算符 ｜ 数组 ｜ null & undefined |字符串|类型转换
console.log('hello world');
var name=name;
var myarray=new Array(1,2,3,4,5)
var message;
// 流程控制语句会把后面的值隐式转换为布尔类型。比如
if (message) {
  //会自动把 message 转换成 false，最后打印结果为：我很好
  console.log('你好啊');
} else {
  console.log('我很好');
}
// Chapter2-JS关键特性: 条件控制语句｜循环语句｜函数模块｜事件
// 严格来说，内置浏览器函数并不是函数，它们是方法，
// 函数声明创建函数
function functionName(parameters){
  // 执行的代码
}
// 函数表达式创建函数
// JavaScript 函数可以通过一个表达式定义。函数表达式可以存储在变量中。
// 匿名函数就是没有命名的函数，一般在绑定事件的时候使用
var myButton = document.querySelector('button');

myButton.onclick = function () {
  alert('hello');
};
// 使用匿名函数来运行负载的代码以响应事件触发（如点击按钮），使用事件处理程序。
(function () {
  alert('hello');
})();


