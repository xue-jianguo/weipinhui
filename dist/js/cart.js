

var url = location.search;
    //如果url里有?号
    if (url.indexOf("?") != -1) {
    //获取?后面的字符串
    var oIndex = url.substr(1); 
    var cartNub = oIndex + 1;
}
var cartList = document.getElementById("cartlist");

axios.get("http://localhost:3000/cartlist").then(res => {
    // var id = oIndex;
    // console.log(id);
    var ltr = "";

    for (var i = 0;i < res.data.length;i++) {
        ltr += `
            <li>
                <input type="checkbox" class="ck">
                <img src="${res.data[i].img}">
                <span>${res.data[i].p}</span>
                <span>单价:</span>
                <span class="perPrice">${res.data[i].price}</span>
                <span class="minus">-</span>
                <input type="text" value="${res.data[i].number}" class="num">
                <span class="plus">+</span>
                <span>总价:</span>
                <span class="perTotalPrice">${res.data[i].totalprice}</span>
                <span class="del">x</span>
            </li>
        `;
        cartList.innerHTML = ltr;
    }
    var cList = cartList.querySelectorAll("li");
    var minus = document.querySelectorAll(".minus");
    var plus = document.querySelectorAll(".plus");
    //商品数量
    var num = document.querySelectorAll(".num");
    var del = document.querySelectorAll(".del");
    var perTotalPrice = document.querySelectorAll("perTotalPrice");

    // var inputtxt = num.value;

    for(let j = 0; j < cList.length;j++){
        for (let i = 0; i < num.length; i++) {
            num[i].onchange = function(e){
                console.log(e.target.id);
                // axios.patch(`http://localhost:3000/cartlis/${oIndex}` ,{
                //     number: num.value,
                // }).then(res =>{})
            }
        }
    }


    // for(let j = 0; j < cList.length;j++){
    //     for (let i = 0; i < num.length; i++) {
    //         num[i].onchange = function(){
    //             axios.patch(`http://localhost:3000/cartlis/${oIndex}` ,{
    //                 number: num.value,
    //             }).then(res =>{})
    //         }
    //     }
    // }
    
    

    var cks = document.querySelectorAll(".ck");
    this.perPrice = document.querySelectorAll(".perPrice");

    for (let i = 0; i < cks.length; i++) {
        cks[i].onclick = () => {
            // var count = 0; //计数
            // for (let j = 0; j < cks.length; j++) {
            //     if (cks[j].checked) {
            //         count++;
            //     }
            // }
            // if (count == cks.length) {
            //     checkAll.checked = true;
            // } else {
            //     checkAll.checked = false;
            // }
            console.log(res.data[i].price);
            console.log(res.data[i].number);
            var potal = res.data[i].price * res.data[i].number;
            console.log(potal);

            perTotalPrice.innerHTML = potal;

            console.log(perTotalPrice.innerHTML);
        }
    }
    
    for (let i = 0; i < minus.length; i++) {
        //减
        minus[i].onclick = () => {
            num[i].value--;
            if (num[i].value < 1) {
                num[i].value = 1;
            }

        }
        //加
        plus[i].onclick = () => {
            num[i].value++;

        }
        //改input
        num[i].onchange = () => {
            if (num[i].value < 1) {
                num[i].value = 1;
            }
        }
        //删除
        // del[i].onclick = () => {
        //     axios.delete (`http://localhost:3000/product/${this.res.data[i].id}`);
        // }

    }
    //加号

    //减号


});