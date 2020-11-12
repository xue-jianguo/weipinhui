//登陆方式切换
$(function(){
    $("#zhanghao").click(function(){
        $('.mian-sign-center1').css("display","none");
        $('.mian-sign-center2').css("display","block");
        $('#zhanghao').css("color","#f10180");
        $('#erweima').css("color","#666");
    });

    $("#erweima").click(function(){
        $('.mian-sign-center1').css("display","block");
        $('.mian-sign-center2').css("display","none");
        $('#erweima').css("color","#f10180");
        $('#zhanghao').css("color","#666");
    });
});
//表单验证

//js写的登录效果---------------------------------------
var btn = document.getElementById("signbtn");
var user = document.getElementById("txt1");
var pas = document.getElementById("txt2");
var xmlHttp = new XMLHttpRequest();
var jsonObj = null;

xmlHttp.onload = function(){
	if(xmlHttp.readyState == 4){ //表示响应完成
		if(xmlHttp.status == 200){ //响应码为200  表示服务器正确响应
			//获取响应内容
			txt = xmlHttp.responseText;
			//把json字符串解析成json对象
			jsonObj = JSON.parse(txt);
			// console.info(jsonObj)
        
		}else{
			console.info('数据返回失败！状态代码：'+xmlHttp.status+'状态信息：'+xmlHttp.statusText);
		}
	}
}

xmlHttp.open('GET','http://localhost:3000/user',true);
xmlHttp.send();

btn.onclick = function(){
    var uname = user.value;
	var pwd = pas.value;
    for(var i in jsonObj){
        if( uname==jsonObj[i]['username'] && pwd==jsonObj[i]['password']){
                alert("登陆成功");
                //显示跳转页面
                window.location.href='index.html?username='+uname+'&password='+pwd;
        }
	}
}