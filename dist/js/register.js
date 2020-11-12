//注册用户
var btn = document.getElementById("btn1");
var user = document.getElementById("user");
var psw = document.getElementById("psw");
btn.onclick = function(){
    // console.log(user.value);
    axios.post(" http://localhost:3000/user",{
        "username":user.value,
        "password":psw.value
    }).then(res => {
        alert("注册成功")
    }).catch(err=>{
        console.log(err)
    })
}
//表单验证
var t1 = document.getElementById("user");
var t2 = document.getElementById("yanzheng");
var t3 = document.getElementById("psw");
var t4 = document.getElementById("psw2");

var reg1 = /^1(3|4|5|6|7|8|9)\d{9}$/;
var reg2 = /[a-zA-Z_0-9]{8,19}/;
//手机验证
t1.onchange = function (){
    var val = this.value;
      if (reg1.test(val)) {
          p1.innerText = "正确";
          p1.style.color = "green";
      } else {
          p1.innerText = "输入格式不正确，重新输入";
        p1.style.color = "red";
      }
}
//密码验证
t3.onchange = function (){
    var val = this.value;
      if (reg2.test(val)) {
          p3.innerText = "正确";
          p3.style.color = "green";
      } else {
          p3.innerText = "输入格式不正确，重新输入";
        p3.style.color = "red";
      }
}