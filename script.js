$.ajax({
    type: "GET",
    url: "package.json",
    dataType: "json",
    success: function(data) {
        console.log(data);
        var prdtmame = '';
        $.each(data, function(key, value) {
            prdtname = get.getElementById('pname');
            prdtname = value.name;
        })


    }


});






var btn = document.getElementById('addBtn');
var spn = document.getElementById('span');
let count = 0;

function addCart() {
    count += 1;
    document.getElementById('span').innerHTML = count;
    console.log(count);
    alert("Product added to the cart");
}


var btn = document.getElementById('removeBtn');
var spn = document.getElementById('span');


function remCart() {
    if (count = 1) {
        count -= 1;
        document.getElementById('span').innerHTML = count;
        alert("Product removed from the cart");

    } else {
        alert("Add product first");
    }
}