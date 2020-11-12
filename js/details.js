var xqlist = document.getElementById("main-left");

var url = location.search;
    //如果url里有?号
    if (url.indexOf("?") != -1) {
    //获取?后面的字符串
    var oIndex = url.substr(1); 
}
// alert(str);

var oP1 = document.getElementById("p1");
var oP2 = document.getElementById("p2");
var oIpt = document.getElementById("ipt");
var oSub = document.getElementById("submit");

axios.get("http://localhost:3000/products").then(res => {
    var id = oIndex;
    // console.log(id);
    var str = "";
        str += `
            <li>
                <img src="${res.data[id].img}">
                <p>${res.data[id].p}</p>
                <h1>${res.data[id].h1}</h1>
                <h3>价格:</h3>
                <span>${res.data[id].price}</span>
            </li>
        `;
        xqlist.innerHTML = str;

        
        oSub.onclick = function () {
            
            axios.post("http://localhost:3000/cartlist" ,{
                id: oIndex,
                p: res.data[oIndex].p,
                img: res.data[oIndex].img,
                price: res.data[oIndex].price,
                number: oIpt.value,
                totalprice:0
            }).then(res =>{})
        
            window.open("cart.html?" + oIndex);
        }

});




oP1.onclick = function () {
    oIpt.value--;
    if (oIpt.value < 1) {
        oIpt.value = 1;
    }
}
oP2.onclick = function () {
    oIpt.value++;
}
oIpt.onchange = function () {
    if (oIpt.value < 1) {
        oIpt.value = 1;
    }
}

// console.log(id);

