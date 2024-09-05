



for (var i = 1; i < product.length; i++) {
    document.getElementById("select1").innerHTML += `
    <option value="${i}">${product[i].title}</option>
    `;
    document.getElementById("select2").innerHTML += `
    <option value="${i}">${hello[i].title}</option>
    `;
}

function item1(a) {
    {
        document.getElementById("img1").src = product[a].image
        document.getElementById("price1").innerHTML = "$ " + product[a].price
        document.getElementById("desc1").innerHTML = product[a].description
        document.getElementById("brand1").innerHTML = product[a].brand

    }
}

function item2(a) {
    {
        document.getElementById("img2").src = hello[a].image
        document.getElementById("price2").innerHTML = "$ " + hello[a].price
        document.getElementById("desc2").innerHTML = hello[a].description
        document.getElementById("brand2").innerHTML = hello[a].brand
    }
}