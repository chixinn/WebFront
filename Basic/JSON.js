// Json与JavaScript对象
// JSON 是一种纯数据格式,它只包含属性，没有方法。
// 有一些常用的内置对象
// this:谁调用this,this指的就是谁

// 创建对象和访问对象：
var student={
    name:'zhangsan',
    age:18,
    gender:'male',
    sayHi:function(){
        console.log('hi,my name is '+this.name);
    }, // 这个逗号
};
var student = new Object();
(student.name='zhangsan');
(student.age=18),
(student.gender='male'),
(student.sayHi=function(){
    console.log('hi,my name is '+this.name);
});
// 通过工厂函数创建对象
function createStudent(name, age, gender) {
    var student = new Object();
    student.name = name;
    student.age = age;
    student.gender = gender;
    student.sayHi = function () {
      console.log('hi,my name is ' + this.name);
    };
    return student;
  }
  var s1 = createStudent('zhangsan', 18, 'male');
//   自定义构造函数
function Student(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayHi = function () {
      console.log('hi,my name is ' + this.name);
    };
  }
  var s1 = new Student('zhangsan', 18, 'male');