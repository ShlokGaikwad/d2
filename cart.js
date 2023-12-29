let cartContainer = document.getElementById("cart_container");
let tbody = document.getElementById("tbody");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

let cartCount = document.querySelector("#cart-count") ;
cartCount.innerText = cartItems.length ;

let appendProducts = (cartItems) => {
  tbody.innerHTML = "";
  cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.forEach( (product) => {
    let productRow = document.createElement("tr");

    let productImageRow = document.createElement("td");

    let image = document.createElement("img");
    image.src = product.imageUrl ;
    image.classList.add("img");

    let name = document.createElement("td");
    name.innerText = product.name ;

    let price = document.createElement("td");
    price.innerText = product.price ;

    let removebuttonRow = document.createElement("td");
    let removebutton = document.createElement("button");
    removebutton.setAttribute("id","remove");
    removebutton.innerText = "Remove" ;
    const productDetails = {
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
    };
    removebutton.addEventListener("click",(event) => {
      
      let currRemovingItemObj = {
        imageUrl: productDetails.imageUrl,
        name: productDetails.name,
        price: productDetails.price,  
      };
      

      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [] ;

      let updatedCartItems = cartItems.filter((item) => {
          return item.name !== currRemovingItemObj.name || item.imageUrl !== currRemovingItemObj.imageUrl || item.price !== currRemovingItemObj.price;
      })
   
      cartCount.innerText = updatedCartItems.length ;
      
   
      localStorage.setItem("cartItems",JSON.stringify(updatedCartItems) );

  
      tbody.innerHTML = "";
      appendProducts(updatedCartItems);

      
      
    })

    productImageRow.append(image); 
    removebuttonRow.append(removebutton); 

    productRow.append(productImageRow, name, price, removebuttonRow);

    tbody.append(productRow);

  });
}

appendProducts(cartItems);
