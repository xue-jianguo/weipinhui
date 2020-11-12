$(function(){
    //左侧边栏固定
    var navh = $(".left-div").offset().top;
    $(window).scroll(function(){
        var scroh = $(this).scrollTop();
        if(scroh>=navh){
            $(".left-div").css({"position":"fixed","top":0});
        }else if(scroh<navh){
            $(".left-div").css({"position":"absolute","top":173});
        }
    })
    //左侧边栏返回顶部按钮
    $("#left-div-top").click(function(){
        $('html,body').scrollTop(0);
    })

    //楼梯
    $(window).scroll(function () {
        var flag = true;
        if (flag) {
            var st = $(this).scrollTop();
            if (st >= 2600) {
                $("#floorNav").fadeIn();
            } else {
                $("#floorNav").fadeOut();
            }
            $(".content").each(function () {
                if (st >= $(this).offset().top - $(this).outerHeight() / 2) {
                    var index = $(this).index();
                    // $("#floorNav li").eq(index).addClass("hover").siblings().removeClass("hover");
                    $("#floorNav li").eq(index).addClass("style").siblings().removeClass("style");
                }
            })
        }
    });
    //点击跳转
    $("#floorNav li:not(:last)").click(function () {
            flag = false;
            $(this).addClass("hover").siblings().removeClass("hover");
            var index = $(this).index();
            $("html,body").animate({
                "scrollTop": $(".content").eq(index).offset().top
            }, 500, function () {
                flag = true;
            });
    });
    //点击最后一个
    $("#floorNav li:last").click(function () {
		$("html,body").animate({
			"scrollTop": 0
		}, 500);
	})

});

//js写的
var oPordList1 = document.getElementById("stylish-guy-commodity");
var oPordList2 = document.getElementById("women-wear-commodity");
var oPordList3 = document.getElementById("children-wear-commodity");
var oPordList4 = document.getElementById("underwear-commodity");

var str = "";



axios.get("http://localhost:3000/products").then(res => {
    params:{
        
    }

    // console.log(res.data);
    for(var i = 0;i < res.data.length;i++){
        str += `
                <li>
                    <img src="${res.data[i].img}">
                    <p>${res.data[i].p}</p>
                    <h1>${res.data[i].h1}</h1>
                    <input type="button" value="立即抢购" id="shop">
                </li>
            
        `;
        oPordList1.innerHTML = str;
        oPordList2.innerHTML = str;
        oPordList3.innerHTML = str;
        oPordList4.innerHTML = str;
    }
});

