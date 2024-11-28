let cart = [];
let sautePanDiv = document.querySelector(".sautePanDiv");
let sautePan = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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

  // loader for 1/2 secs 
  function loader(){
    document.addEventListener("DOMContentLoaded", function () {
        const loader = document.getElementById("loader");
        const mainContent = document.body;
      
        // Show loader for 1/2 seconds
        setTimeout(() => {
          loader.style.display = "none"; // Hide the loader
          mainContent.style.display = "block"; // Show the main content
        }, 500); // 
      });
  }

// call loader function
  loader();
8// function to hide navbar items
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
  };
  

  // Add to cart functionality
  function displaySautePanData(products) {
    let htmlContent = `<div class="row">`;
  
    // Loop through each item in the data array
    products.forEach((product) => {
      htmlContent += `
        <div class="product">
          <img src="${product.img}" alt="${product.title}" 
               onmouseover="this.src='${product.hoverImg}'" 
               onmouseout="this.src='${product.img}'">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p>Category: ${product.category} - ${product.categoryType}</p>
          <p class="price">$${product.price.toFixed(2)}
            ${
              product.priceBeforeSale
                ? `<span class="price-before-sale text-decoration-line-through text-secondary">$${product.priceBeforeSale.toFixed(
                    2
                  )}</span>`
                : ""
            }
          </p>
          <p>Ex Tax: $${product.exTax.toFixed(2)}</p>
          <div class="product-buttons">
            <button class="btn btn-secondary add-to-cart" data-id="${
              product.id
            }" onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="btn btn-transparent quick-view" data-id="${
              product.id
            }" onclick="showQuickView(${
        product.id
      })"><i class="fa-regular fa-eye"></i></button>
          </div>
        </div>
      `;
    });
    // Close the parent container div
    htmlContent += `</div>`;
  
    // Update the container's innerHTML once after the loop
    sautePanDiv.innerHTML = htmlContent;
  }
  // Call the displaySautePanData function with the sautePan data
  
  displaySautePanData(sautePan);

  // cart review js 
//get current tab
// cart review js
//get current tab
let currentTab = "latest"; // Default tab
//get cart reivew elements
const cartDisplay = document.getElementById("cartDisplay");
const toggleCartButton = document.querySelector(".toggle-cart-button");
const cartItemsList = document.getElementById("cartItems");
const cartPreview = document.getElementById("cartPreview");
let nbrOfCartspan = document.getElementById("nbrOfcart");
// Listen for tab change events to update the currentTab value
document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((tab) => {
  tab.addEventListener("shown.bs.tab", (event) => {
    // Get the ID of the active tab's target
    currentTab = event.target.getAttribute("data-bs-target").replace("#", "");
  });
});

// Function to add a product to the cart
function addToCart(productId) {
  let product = [];
  // Find the product in the corresponding version array
  if (currentTab === "latest") {
    product = latestVersion.find((item) => item.id === productId);
  } else if (currentTab === "bestseller") {
    product = bestsellerVersion.find((item) => item.id === productId);
  } else if (currentTab === "special") {
    product = specialVersion.find((item) => item.id === productId);
  }
  if (product) {
    cart.push(product);
    alert(`${product.title} has been added to the cart!`);

    updateCartPreview();
  }

  // Update the cart count display
  nbrOfCartspan.innerHTML = `(${cart.length})`;
  //print cart
  console.log(cart);
  console.log(cart.length);
}

// Function to toggle the cart display

function toggleCartDisplay() {
  cartDisplay.classList.toggle("d-none");
}
// Function to update cart preview
function updateCartPreview() {
  if (cart.length === 0) {
    cartPreview.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  // Map cart items to HTML
  cartPreview.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <h5>${item.title}</h5>
      <p>$${item.price.toFixed(2)}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    </div>
  `
    )
    .join("");
}
// Function to remove an item from the cart
function removeFromCart(productId) {
  // Find the product in the cart by its ID and remove it
  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex > -1) {
    cart.splice(productIndex, 1); // Remove the item
    updateCartPreview(); // Refresh the cart preview
    nbrOfCartspan.innerHTML = `(${cart.length})`; // Update cart count
  }
}
// Hide cart display when clicking (X))
function closeCartPreview() {
  cartDisplay.classList.add("d-none");
}
// Function to show Quick View modal with product details

  // Function to show Quick View modal with product details
function showQuickView(productId) {
    let product = [];
    product = sautePan.find((item) => item.id === productId);

    if (product) {
      // Update modal content dynamically
      const modalContent = document.getElementById("quickViewContent");
      console.log(modalContent);
      modalContent.innerHTML = `
        <img src="${product.img}" alt="${product.title}" class="img-fluid">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Category: ${product.category} - ${product.categoryType}</p>
        <p class="price">$${product.price.toFixed(2)}
          ${
            product.priceBeforeSale
              ? `<span class="price-before-sale text-decoration-line-through text-secondary">$${product.priceBeforeSale.toFixed(
                  2
                )}</span>`
              : ""
          }
        </p>
        <p>Ex Tax: $${product.exTax.toFixed(2)}</p>
      `;
  
      // Show the modal
      const myModal = new bootstrap.Modal(
        document.getElementById("quickViewModal")
      );
      myModal.show();
      let title = document.querySelector(".modal-title");
      console.log(title);
  
      title.innerHTML= `${product.title} Detail Modal`;
  
      // Add to Cart from modal
      document.getElementById("addToCartModalBtn").onclick = () =>
        addToCart(product.id);
    }
  }

  // function to return Fork Category
function returnForkCategory() {
    //
    // Filter the sautePan array based on categoryType "Fork"
    const forkCategory = sautePan.filter(
      (category) => category.categoryType === "Fork"
    );
    console.log(forkCategory);
    sautePanDiv.innerHTML = ``;

    displaySautePanData(forkCategory);
    return forkCategory;
     // Add a return statement to return the filtered result
  }
  returnForkCategory(sautePan);
  // function to return Fork Category
  function returnCupCategory() {
   
    // Filter the sautePan array based on categoryType "Cup"
    const cupCategory = sautePan.filter(
      (category) => category.categoryType === "Cup"
    );
    //console.log(cupCategory);

    sautePanDiv.innerHTML = ``;

    //console.log(cupCategory);
    displaySautePanData(cupCategory);
    // Call the loader function to handle loader visibility
    return cupCategory; // Add a return statement to return the filtered result

  }