
// cart list item
let cart=[]; 
let sautePan = [
  {
    id:1,
    title: "Arcu Vitae Imperdiet verdict",
    description:
      "Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you can respond to busi..",
    category: "Boy",
    categoryType: "Cup",
    price: 337.99,
    priceBeforeSale: "",
    exTax: 279.99,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/16-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/18-220x278.jpg",
  },
  {
    id:2,
    title: "Justo Neque Commodo Nisl",
    description:
      "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    category: "Boy",
    categoryType: "Cup",
    price: 602.0,
    priceBeforeSale: "",
    exTax: 500.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/1-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/6-220x278.jpg",
  },
  {
    id:3,
    title: "Mauris Blandit Vehicula",
    description:
      "Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Mon..",
    category: "Boy",
    categoryType: "Cup",
    price: 122.0,
    priceBeforeSale: "",
    exTax: 100.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/20-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/11-220x278.jpg",
  },
  {
    id:4,
    title: "Phasellus Sit Amet Urna",
    description:
      "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're n..",
    category: "Boy",
    categoryType: "Cup",
    price: 98.0,
    priceBeforeSale: 122.0,
    exTax: 80.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/22-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/4-220x278.jpg",
  },
  {
    id:5,
    title: "Arcu Vitae Imperdiet verdict",
    description:
      "Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you can respond to busi..",
    category: "Boy",
    categoryType: "Fork",
    price: 337.99,
    exTax: 80.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/16-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/18-220x278.jpg",
  },
  {
    id:6,
    title: "Faded Short Sleeves",
    description:
      "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed speci..",
    category: "Boy",
    categoryType: "Fork",
    price: 110.0,
    priceBeforeSale: 122.0,
    exTax: 90.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/1-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/19-220x278.jpg",
  },
  {
    id:7,
    title: "Integer Tempor Lacus Eget",
    description:
      "iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a name o..",
    category: "Boy",
    categoryType: "Fork",
    price: 123.2,
    priceBeforeSale: "",
    exTax: 101.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/19-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/19-220x278.jpg",
  },
  {
    id:8,
    title: "Mauris Blandit Vehicula",
    description:
      "Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Mon..",
    category: "Boy",
    categoryType: "Fork",
    price: 122.0,
    priceBeforeSale: "",
    exTax: 100.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/20-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/11-220x278.jpg",
  },

  {
    id:9,
    title: "Phasellus Sit Amet Urna",
    description:
      "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're n..",
    category: "Boy",
    categoryType: "Fork",
    price: 98.0,
    priceBeforeSale: 122.0,
    exTax: 80.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/22-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/4-220x278.jpg",
  },
  {
    id:10,
    title: "Sem Nec Tristique Tempus run",
    description:
      "Unprecedented power. The next generation of processing technology has arrived. Built into the newest..",
    category: "Boy",
    categoryType: "Fork",
    price: 1202.0,
    priceBeforeSale: "",
    exTax: 1000.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/6-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/20-220x278.jpg",
  },
  {
    id:11,
    title: "Suspendisse Massa Nulla willa",
    description:
      "MacBook Air is ultrathin, ultraportable, and ultra unlike anything else. But you don’t lose in..",
    category: "Boy",
    categoryType: "Fork",
    price: 1202.0,
    priceBeforeSale: "",
    exTax: 1000.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/18-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/17-220x278.jpg",
  },
  {
    id:12,
    title: "Suspendisse Potenti",
    description:
      "Revolutionary multi-touch interface. iPod touch features the same multi-touch screen technology as..",
    category: "Boy",
    categoryType: "Fork",
    price: 122.0,
    priceBeforeSale: "",
    exTax: 100.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/9-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/22-220x278.jpg",
  },
  {
    id:13,
    title: "Tellus Eu Volutpat Varius",
    description:
      "Born to be worn. Clip on the worlds most wearable music player and take up to 240 songs with y..",
    category: "Boy",
    categoryType: "Fork",
    price: 122.0,
    priceBeforeSale: "",
    exTax: 100.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/18-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/2-220x278.jpg",
  },
];

let latestVersion = [
  {
    id:1,
    title: "Arcu Vitae Imperdiet verdict",
    description:
      "Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you can respond to busi..",
    category: "Boy",
    categoryType: "Cup",
    price: 337.99,
    priceBeforeSale: "",
    exTax: 279.99,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/16-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/18-220x278.jpg",
  },
  {
    id:2,
    title: "Justo Neque Commodo Nisl",
    description:
      "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    category: "Boy",
    categoryType: "Cup",
    price: 602.0,
    priceBeforeSale: "",
    exTax: 500.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/1-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/6-220x278.jpg",
  },
  {
    id:3,
    title: "Mauris Blandit Vehicula",
    description:
      "Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Mon..",
    category: "Boy",
    categoryType: "Cup",
    price: 122.0,
    priceBeforeSale: "",
    exTax: 100.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/20-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/11-220x278.jpg",
  },
  {
    id:4,
    title: "Phasellus Sit Amet Urna",
    description:
      "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're n..",
    category: "Boy",
    categoryType: "Cup",
    price: 98.0,
    priceBeforeSale: 122.0,
    exTax: 80.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/22-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/4-220x278.jpg",
  },
];

let bestsellerVersion = [
  {
    id:1,
    title: "Justo Neque Commodo Nisl",
    description:
      "Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.16GHz, t..",
    category: "Boy",
    categoryType: "Cup",
    price: 602.0,
    priceBeforeSale: "",
    exTax: 500.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/1-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/6-220x278.jpg",
  },
  {
    id:2,
    title: "Mauris Blandit Vehicula",
    description:
      "Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Mon..",
    category: "Boy",
    categoryType: "Cup",
    price: 122.0,
    priceBeforeSale: "",
    exTax: 100.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/20-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/11-220x278.jpg",
  },
  {
    id:3,
    title: "Phasellus Sit Amet Urna",
    description:
      "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're n..",
    category: "Boy",
    categoryType: "Cup",
    price: 98.0,
    priceBeforeSale: 122.0,
    exTax: 80.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/22-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/4-220x278.jpg",
  },
];

let specialVersion = [
  {
    id:1,
    title: "Mauris Blandit Vehicula",
    description:
      "Stop your co-workers in their tracks with the stunning new 30-inch diagonal HP LP3065 Flat Panel Mon..",
    category: "Boy",
    categoryType: "Cup",
    price: 122.0,
    priceBeforeSale: "",
    exTax: 100.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/20-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/11-220x278.jpg",
  },
  {
    id:2,
    title: "Phasellus Sit Amet Urna",
    description:
      "Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we're n..",
    category: "Boy",
    categoryType: "Cup",
    price: 98.0,
    priceBeforeSale: 122.0,
    exTax: 80.0,
    img: "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/22-220x278.jpg",
    hoverImg:
      "https://opencart.templatemela.com/OPCADD2/OPC043/image/cache/catalog/4-220x278.jpg",
  },
];

// let hoverdivs=document.querySelectorAll(".support-item");
// console.log(hoverdivs);
// var hoverdivArr = Array.from(hoverdivs);
// //console.log(hoverdivArr);
// hoverdivArr.forEach(function(hoverdiv){
//     hoverdiv.addEventListener("mouseover", function(event){
//         hoverdiv.classList.add("hover");
//         console.log(hoverdiv);
//     });
// });
//console.log("hello");

// function to hide navbar items
  let hideNavBar = function hideNavbarItems() {
    // get the narbar item element
    let navbarItems = document.querySelector(".dropdown-navbar");
    //console.log(navbarItems);
   navbarItems.classList.toggle("d-none");
   // Get the down and up arrow elements
   let downArrow = document.querySelector(".fa-chevron-down");
   let upArrow = document.querySelector(".fa-chevron-up");

   // Toggle the visibility of the arrows
   downArrow.classList.toggle("d-none");
   upArrow.classList.toggle("d-none");
    //console.log("Test");
  }


let tabdata = function () {
 //let tab = document.getElementById("myTabContent");
  let latest = document.getElementById("latest");
  displayTabData(latestVersion, "latest");

  let bestseller = document.getElementById("bestseller");
  displayTabData(bestsellerVersion, "bestseller");

  let special = document.getElementById("special");
  displayTabData(specialVersion, "special");
};

// display tabs data
function displayTabData(data, id) {
  let tabContainer = document.getElementById(id);
  let htmlContent = `<div class="row tabContent">`;

  // Loop through each item in the data array
  data.forEach((datatab) => {
    htmlContent += `
      <div class="product">
        <img src="${datatab.img}" alt="${datatab.title}" 
             onmouseover="this.src='${datatab.hoverImg}'" 
             onmouseout="this.src='${datatab.img}'">
        <h3>${datatab.title}</h3>
        <p>${datatab.description}</p>
        <p>Category: ${datatab.category} - ${datatab.categoryType}</p>
        <p class="price">$${datatab.price.toFixed(2)}
          ${
            datatab.priceBeforeSale
              ? `<span class="price-before-sale text-decoration-line-through text-secondary">$${datatab.priceBeforeSale.toFixed(2)}</span>`
              : ""
          }
        </p>
        <p>Ex Tax: $${datatab.exTax.toFixed(2)}</p>
        <div class="product-buttons">
          <button class="btn btn-primary add-to-cart" data-id="${datatab.id}" onclick="addToCart(${datatab.id})">Add to Cart</button>
          <button class="btn btn-secondary quick-view" data-id="${datatab.id}" onclick="showQuickView(${datatab.id})"><i class="fa-regular fa-eye"></i></button>
        </div>
      </div>
    `;
  });
  // Close the parent container div
  htmlContent += `</div>`;

  // Update the container's innerHTML once after the loop
  tabContainer.innerHTML = htmlContent;
}

tabdata();

// Function to add product to the cart
function addToCart(productId) {
  const product = specialVersion.find(item => item.id === productId);
  if (product) {
    cart.push(product);
    alert(`${product.title} has been added to the cart!`);
    updateCartPreview();
  }
  //print cart
  console.log(cart);
  console.log(cart.length);


}

// Function to update cart preview
function updateCartPreview() {
  const cartPreview = document.getElementById('cartPreview');
  cartPreview.innerHTML = cart.map(item => `
    <div>
      <h5>${item.title}</h5>
      <p>$${item.price.toFixed(2)}</p>
    </div>
  `).join('');
}

// Function to show Quick View modal with product details
function showQuickView(data,productId) {
  const product = data.find(item => item.id === productId);
  if (product) {
    // Update modal content dynamically
    const modalContent = document.getElementById('quickViewContent');
    modalContent.innerHTML = `
      <img src="${product.img}" alt="${product.title}" class="img-fluid">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Category: ${product.category} - ${product.categoryType}</p>
      <p class="price">$${product.price.toFixed(2)}
        ${product.priceBeforeSale ? `<span class="price-before-sale text-decoration-line-through text-secondary">$${product.priceBeforeSale.toFixed(2)}</span>` : ''}
      </p>
      <p>Ex Tax: $${product.exTax.toFixed(2)}</p>
    `;

    // Show the modal
    const myModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
    myModal.show();
    
    // Add to Cart from modal
    document.getElementById('addToCartModalBtn').onclick = () => addToCart(product.id);
  }
}
// view cart data


//countdown js
let countDownDatefunction = function() {

    var countDownDate = new Date("Jan 5, 2025 00:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id
      document.getElementById("days").innerHTML = days + " Days ";
      document.getElementById("hours").innerHTML = hours + " h ";
      document.getElementById("minutes").innerHTML = minutes + " m ";
      document.getElementById("seconds").innerHTML = seconds + "s ";
        
    
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Sale is Over!";
      }
    }, 1000);
    }
    
    // Call the countDownDate function
    
    countDownDatefunction();


    // function to return Fork Category
    function returnForkCategory(categoryTypes) {
        const forkCategory = categoryTypes.filter(category => category.categoryType === "Fork");
        console.log(forkCategory);
        return forkCategory; // Add a return statement to return the filtered result
    };
    returnForkCategory(sautePan);
    // function to return Fork Category
    function returnCupCategory(categoryTypes) {
        const cupCategory = categoryTypes.filter(category => category.categoryType === "Cup");
        console.log(cupCategory);
        return cupCategory; // Add a return statement to return the filtered result
    };

    returnCupCategory(sautePan);