var products = document.querySelectorAll( ".card-title" )

var content = document.querySelector(".content")

var btn = document.querySelector("#btn-price")


var totalPrice = 0


products.forEach(function(item){
    item.onclick = function(){
        totalPrice += +(item.getAttribute("price"))
        content.innerHTML += item.textContent + "  -  "

        if (content.innerHTML != ""){
            btn.style.display = "block" ;
        }
}})


btn.onclick = function (){
    // document.getElementsByClassName("v")[0].innerHTML = "The Total price is : " +totalPrice + " $ ";
    document.getElementById("test-div").innerHTML = " Total price is : " +totalPrice + " $ ";
}
