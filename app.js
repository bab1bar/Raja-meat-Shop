// ===============================
// Chicken Shop Product Database
// ===============================


const products = [

{
name:"Whole Chicken",
urdu:"پورا چکن",
price:650,
category:"chicken",
image:"assets/chicken1.jpg"
},


{
name:"Boneless Chicken",
urdu:"بون لیس چکن",
price:900,
category:"special",
image:"assets/chicken2.jpg"
},


{
name:"Chicken Steak",
urdu:"چکن سٹیک",
price:950,
category:"special",
image:"assets/chicken3.jpg"
},


{
name:"Stir Fry Pieces",
urdu:"اسٹر فرائی پیس",
price:850,
category:"pieces",
image:"assets/chicken4.jpg"
},


{
name:"Karahi Cut",
urdu:"کڑاہی کٹ",
price:700,
category:"pieces",
image:"assets/chicken5.jpg"
},


{
name:"Normal Cut",
urdu:"عام کٹ",
price:650,
category:"pieces",
image:"assets/chicken6.jpg"
},


{
name:"Nihari Cut",
urdu:"نہاری کٹ",
price:720,
category:"special",
image:"assets/chicken7.jpg"
},


{
name:"Gardanain",
urdu:"گردنیں",
price:350,
category:"special",
image:"assets/chicken8.jpg"
},


{
name:"Pota Kaleji",
urdu:"پوٹا کلیجی",
price:500,
category:"special",
image:"assets/chicken9.jpg"
},


{
name:"Chicken Head",
urdu:"چکن سر",
price:250,
category:"special",
image:"assets/chicken10.jpg"
},


{
name:"Desi Chicken",
urdu:"دیسی چکن",
price:1200,
category:"chicken",
image:"assets/chicken11.jpg"
},


{
name:"Chicken Wings",
urdu:"چکن ونگز",
price:750,
category:"pieces",
image:"assets/chicken12.jpg"
},


{
name:"Golden Pieces",
urdu:"گولڈن پیس",
price:800,
category:"pieces",
image:"assets/chicken13.jpg"
},


{
name:"Chicken Qeema",
urdu:"چکن قیمہ",
price:850,
category:"special",
image:"assets/chicken14.jpg"
}


];





let cart=[];

let urduMode=false;






const productBox=document.getElementById("products");

const cartCount=document.getElementById("cartCount");

const total=document.getElementById("total");






// ===============================
// Display Products
// ===============================


function showProducts(list=products){


productBox.innerHTML="";


list.forEach((item,index)=>{


productBox.innerHTML += `


<div class="card">


<img src="${item.image}"
onerror="this.src='https://via.placeholder.com/300'">


<div class="card-content">


<h2>
${urduMode ? item.urdu:item.name}
</h2>


<p class="urdu">
${urduMode ? item.name:item.urdu}
</p>



<p class="price">
Rs ${item.price} / kg
</p>



<select id="unit${index}">

<option value="1">
1 kg
</option>

<option value="0.5">
Half kg
</option>

</select>



<button class="add-btn"
onclick="addCart(${index})">

Add Cart

</button>


</div>

</div>


`;


});


}



showProducts();








// ===============================
// Add To Cart
// ===============================


function addCart(index){


let quantity=
document.getElementById("unit"+index).value;



let item=products[index];


cart.push({

name:item.name,
price:item.price,
qty:Number(quantity)

});



updateCart();


}






// ===============================
// Update Cart
// ===============================


function updateCart(){


let count=0;

let amount=0;



cart.forEach(item=>{


count++;

amount += item.price * item.qty;


});



cartCount.innerHTML=count;

total.innerHTML=amount;


}








// ===============================
// Language Toggle
// ===============================


document
.getElementById("languageBtn")
.onclick=()=>{


urduMode=!urduMode;


document.getElementById("languageBtn")
.innerHTML=
urduMode ? "English":"اردو";


showProducts();


};








// ===============================
// Dark Mode
// ===============================


document
.getElementById("darkBtn")
.onclick=()=>{


document.body.classList.toggle("dark");


};








// ===============================
// Search
// ===============================


document
.getElementById("search")
.oninput=(e)=>{


let value=e.target.value.toLowerCase();


let result=products.filter(item=>


item.name.toLowerCase()
.includes(value)

);



showProducts(result);



};








// ===============================
// Category Filter
// ===============================


document
.getElementById("category")
.onchange=(e)=>{


let cat=e.target.value;



if(cat==="all"){

showProducts();

}

else{


showProducts(
products.filter(
item=>item.category===cat
)
);


}


};








// ===============================
// WhatsApp Order
// ===============================


document
.getElementById("orderBtn")
.onclick=()=>{


if(cart.length===0){

alert("Cart is empty");

return;

}



let message=
"Chicken Shop Order%0A%0A";



cart.forEach(item=>{


message +=
`${item.name} - ${item.qty}kg%0A`;


});



message +=
`%0ATotal: Rs ${total.innerHTML}`;



window.open(

"https://wa.me/923000000000?text="+message

);


};