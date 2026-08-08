
// Mobile Menu

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function(){

    if(navbar.style.display === "flex"){

        navbar.style.display = "none";

    }

    else{

        navbar.style.display = "flex";

    }

});






// Products Data

const products = [


    {
        id: 1,
        name: "Whole Chicken",
        price: 700
    },


    {
        id: 2,
        name: "Beef",
        price: 1200
    },


    {
        id: 3,
        name: "Mutton",
        price: 2200
    }


];





// Cart Array

let cart = [];





// Select Buttons

const addButtons = document.querySelectorAll(".product-card button");




addButtons.forEach(function(button, index){


    button.addEventListener("click", function(){


        addToCart(products[index]);


    });


});







// Add Product To Cart

function addToCart(product){


    cart.push(product);


    displayCart();


}







// Display Cart

function displayCart(){


    const cartItems = document.getElementById("cartItems");

    const total = document.getElementById("total");



    cartItems.innerHTML = "";



    let totalPrice = 0;



    cart.forEach(function(item){


        let itemElement = document.createElement("p");


        itemElement.textContent = item.name + " - Rs. " + item.price;


        cartItems.appendChild(itemElement);



        totalPrice = totalPrice + item.price;



    });




    if(cart.length === 0){


        cartItems.innerHTML = "<p>Cart is empty</p>";


    }




    total.textContent = totalPrice;



}
// Order Mode Selection


const personalBtn = document.getElementById("personalBtn");

const businessBtn = document.getElementById("businessBtn");

const modeName = document.getElementById("modeName");





personalBtn.addEventListener("click", function(){


    modeName.textContent = "Personal Order";





});






businessBtn.addEventListener("click", function(){


    modeName.textContent = "Business/Bulk Order";


  


});