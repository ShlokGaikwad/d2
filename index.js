const products = [
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
      name: 'APPLE iPhone 14 (Blue, 128 GB)',
      price: '₹57,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/kg8avm80/mobile/y/7/n/apple-iphone-12-dummyapplefsn-original-imafwg8dpyjvgg3j.jpeg?q=70',
      name: 'APPLE iPhone 12 (Blue, 64 GB)',
      price: '₹42,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70',
      name: 'APPLE iPhone 13 (Blue, 128 GB)',
      price: '₹58,900'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/r/x/-original-imagth5xf4shxcuv.jpeg?q=70',
      name: 'SAMSUNG Galaxy S22 5G (Phantom White, 128 GB)',
      price: '₹39,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/4/x/0/-original-imagtnqjjfgxzpz4.jpeg?q=70',
      name: 'Samsung Galaxy S21 FE 5G with Snapdragon 888 (Navy, 128 GB)',
      price: '₹32,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/w/x/0/-original-imagszg3qxqgdx9c.jpeg?q=70',
      name: 'Infinix Zero 30 5G (Rome Green, 256 GB)',
      price: '₹23,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/l4ln8nk0/mobile/6/s/i/-original-imagfgf9nf8psuyv.jpeg?q=70',
      name: 'OPPO A57 (Glowing Green, 64 GB)',
      price: '₹10,987'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/l0zm64w0/mobile/w/0/i/-original-imagcnn5ahg6pwzd.jpeg?q=70',
      name: 'OPPO A96 (Starry Black, 128 GB)',
      price: '₹15,849'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/j/n/-original-imags37gyajqxkgp.jpeg?q=70',
      name: 'REDMI 12 (Moonstone Silver, 128 GB)',
      price: '₹10,999'
    },
    {
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/a/g/-original-imags37h4prxjazz.jpeg?q=70',
      name: 'REDMI 12 (Pastel Blue, 128 GB)',
      price: '₹10,999'
    }
  ];

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [] ;
  let cartCount = document.querySelector("#cart-count");
  cartCount.innerText = cartItems.length;  
  
  let cardContainer = document.querySelector("#card-container");


    function createCard(product){
      let card = document.createElement("div") ;
      card.classList.add("card");

      let productImage = document.createElement("img");
      productImage.src = product.imageUrl;
      productImage.alt = product.name;

      let productName = document.createElement("h2");
      productName.innerText = product.name;

      let productPrice = document.createElement("p");
      productPrice.innerText = product.price;
      productPrice.classList.add("price");

      let addToCartButton = document.createElement("button");
      addToCartButton.innerText = "ADD TO CART";
      addToCartButton.classList.add("button");

      
      
      addToCartButton.addEventListener("click", () => {
        let cardObject = {
          imageUrl: product.imageUrl,
          name: product.name,
          price: product.price,
       }

       if(isProductInCart( cardObject ) ){
          alert("The product is already in the cart!")
        }else {
          // checking and taking data from localstorage
          let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [] ;
          cartItems.push(cardObject) ;
          localStorage.setItem("cartItems",JSON.stringify(cartItems)) ;
          cartCount.innerText = cartItems.length; 
        }
        
      } )

      card.append(productImage, productName, productPrice, addToCartButton);
      return card ;

    }

    function appendProducts(products){
      products.forEach( (product) => {
        // creating card
        let card = createCard(product);
        //adding cart to html 
        cardContainer.append(card);
      } )
    }
    appendProducts(products) ;

    function isProductInCart( cardObject ){
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [] ;
     
          for(let item of cartItems){
          if(item.imageUrl === cardObject.imageUrl ||
            item.name === cardObject.name ||
            item.price === cardObject.price ) {
            return true;
            }
          }
          return false ;
    }