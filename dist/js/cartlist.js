//主页
//点击li获取下标
    var index = 0;
    $("#women-wear-commodity").on("click","li",function a(){
        index = $(this).index();
        window.open("./details.html?" + index);
        console.log(index);
    })
//详情界面
