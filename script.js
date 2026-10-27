$(document).ready(function () {
  //    PRODUCT DATA

  const products = [
    {
      id: 1,
      name: "Classic Oxford Shirt",
      category: "shirt",
      price: 799,
      oldPrice: 999,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 2,
      name: "Slim Fit Casual Shirt",
      category: "shirt",
      price: 899,
      oldPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 3,
      name: "Premium White Shirt",
      category: "shirt",
      price: 999,
      oldPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 4,
      name: "Oversized Graphic T-Shirt",
      category: "tshirt",
      price: 599,
      oldPrice: 799,
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 5,
      name: "Essential Black T-Shirt",
      category: "tshirt",
      price: 499,
      oldPrice: 699,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 7,
      name: "Premium Beige T-Shirt",
      category: "tshirt",
      price: 549,
      oldPrice: 749,
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 8,
      name: "Relaxed Fit T-Shirt",
      category: "tshirt",
      price: 649,
      oldPrice: 899,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 9,
      name: "Regular Blue Jeans",
      category: "jeans",
      price: 1199,
      oldPrice: 1499,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 10,
      name: "Dark Wash Slim Jeans",
      category: "jeans",
      price: 1299,
      oldPrice: 1699,
      image:
        "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 11,
      name: "Classic Straight Jeans",
      category: "jeans",
      price: 1399,
      oldPrice: 1799,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 12,
      name: "Comfort Stretch Jeans",
      category: "jeans",
      price: 1249,
      oldPrice: 1599,
      image:
        "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 13,
      name: "Formal Black Trousers",
      category: "trouser",
      price: 999,
      oldPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 14,
      name: "Cotton Beige Trousers",
      category: "trouser",
      price: 899,
      oldPrice: 1199,
      image:
        "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 15,
      name: "Slim Fit Office Trousers",
      category: "trouser",
      price: 1099,
      oldPrice: 1399,
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 16,
      name: "Casual Cargo Trousers",
      category: "trouser",
      price: 1149,
      oldPrice: 1499,
      image:
        "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 17,
      name: "Everyday Pullover Hoodie",
      category: "hoodie",
      price: 1099,
      oldPrice: 1399,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 18,
      name: "Minimal Grey Hoodie",
      category: "hoodie",
      price: 999,
      oldPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 19,
      name: "Oversized Street Hoodie",
      category: "hoodie",
      price: 1199,
      oldPrice: 1599,
      image:
        "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 20,
      name: "Classic Black Hoodie",
      category: "hoodie",
      price: 1049,
      oldPrice: 1399,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 21,
      name: "Classic Denim Jacket",
      category: "jacket",
      price: 1499,
      oldPrice: 1899,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 22,
      name: "Black Casual Jacket",
      category: "jacket",
      price: 1599,
      oldPrice: 1999,
      image:
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 23,
      name: "Lightweight Bomber Jacket",
      category: "jacket",
      price: 1699,
      oldPrice: 2199,
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80",
    },

    {
      id: 24,
      name: "Urban Winter Jacket",
      category: "jacket",
      price: 1799,
      oldPrice: 2299,
      image:
        "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=700&q=80",
    },
  ];

  //    VARIABLES

  let cart = JSON.parse(localStorage.getItem("menzoCart")) || [];

  let currentFilter = "all";

  let currentSearch = "";

  //    MONEY

  function money(amount) {
    return "₹" + amount.toLocaleString("en-IN");
  }

  //    CATEGORY NAME

  function categoryName(category) {
    if (category === "shirt") return "Shirts";

    if (category === "tshirt") return "T-Shirts";

    if (category === "jeans") return "Jeans";

    if (category === "trouser") return "Trousers";

    if (category === "hoodie") return "Hoodies";

    if (category === "jacket") return "Jackets";

    return category;
  }

  const productColors = {
    1: ["White", "Light Blue", "Navy"],
    2: ["White", "Light Blue", "Black"],
    3: ["White"],
    4: ["Black", "White", "Grey"],
    5: ["Black"],
    7: ["Beige"],
    8: ["Black", "White", "Navy"],
    9: ["Blue", "Black"],
    10: ["Dark Blue", "Black"],
    11: ["Blue", "Black"],
    12: ["Blue", "Dark Blue", "Black"],
    13: ["Black"],
    14: ["Beige"],
    15: ["Black", "Navy"],
    16: ["Olive", "Black", "Khaki"],
    17: ["Black", "Grey", "Navy"],
    18: ["Grey"],
    19: ["Black", "Grey"],
    20: ["Black"],
    21: ["Blue"],
    22: ["Black"],
    23: ["Black", "Olive"],
    24: ["Black", "Navy"],
  };

  const topSizes = ["S", "M", "L", "XL", "XXL"];
  const bottomSizes = ["28", "30", "32", "34", "36", "38"];

  function sizeOptions(product) {
    return product.category === "jeans" || product.category === "trouser"
      ? bottomSizes
      : topSizes;
  }

  function openVariantModal(productId, cartIndex = null) {
    const product = products.find(function (item) {
      return item.id === productId;
    });

    if (!product) {
      return;
    }

    const existingItem = cartIndex === null ? null : cart[cartIndex];
    if (cartIndex !== null && !existingItem) {
      return;
    }

    const colors = productColors[product.id] || ["Black"];
    pendingVariantSelection = {
      productId: product.id,
      cartIndex: cartIndex,
    };

    $("#variantProductName").text(product.name);
    $("#variantSize").empty().append(new Option("Choose a size", ""));
    $("#variantColor").empty().append(new Option("Choose a color", ""));

    $.each(sizeOptions(product), function (index, size) {
      $("#variantSize").append(new Option(size, size));
    });

    $.each(colors, function (index, color) {
      $("#variantColor").append(new Option(color, color));
    });

    $("#variantSize").val(existingItem ? existingItem.size || "" : "");
    $("#variantColor").val(
      existingItem
        ? existingItem.color || ""
        : colors.length === 1
          ? colors[0]
          : "",
    );
    $("#saveVariantBtn").text(
      cartIndex === null ? "ADD TO BAG" : "SAVE OPTIONS",
    );

    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("variantModal"),
    ).show();
  }

  let pendingVariantSelection = null;

  //    DISPLAY PRODUCTS

  function renderProducts() {
    let list = products.slice();

    /* CATEGORY FILTER */

    if (currentFilter !== "all") {
      list = list.filter(function (product) {
        return product.category === currentFilter;
      });
    }

    /* SEARCH */

    if (currentSearch !== "") {
      list = list.filter(function (product) {
        let text = product.name + " " + categoryName(product.category);

        return text.toLowerCase().includes(currentSearch.toLowerCase());
      });
    }

    /* SORT */

    let sortValue = $("#sortSelect").val();

    if (sortValue === "low") {
      list.sort(function (a, b) {
        return a.price - b.price;
      });
    }

    if (sortValue === "high") {
      list.sort(function (a, b) {
        return b.price - a.price;
      });
    }

    if (sortValue === "name") {
      list.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
    }

    /* NO PRODUCTS */

    if (list.length === 0) {
      $("#productGrid").html(`

            <div class="col-12">

                <div class="empty-products">

                    <i class="bi bi-search fs-1"></i>

                    <h4 class="mt-3">
                        No products found
                    </h4>

                    <p>
                        Try another search
                        or category.
                    </p>

                </div>

            </div>

        `);

      return;
    }

    /* PRODUCT HTML */

    let html = "";

    $.each(list, function (index, product) {
      let wished = isInWishlist(product.id);

      html += `

                <div
                    class="col-12
                    col-sm-6
                    col-lg-4
                    col-xl-3"
                >

                    <div class="product-card">


                        <div
                            class="product-image-wrap"
                        >

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >


                            <span
                                class="sale-badge"
                            >
                                SALE
                            </span>


                            <button
                                class="
                                    wishlist-btn
                                    ${wished ? "active" : ""}
                                "
                                data-id="${product.id}"
                            >

                                <i
                                    class="
                                        bi
                                        ${wished ? "bi-heart-fill" : "bi-heart"}
                                    "
                                ></i>

                            </button>


                        </div>



                        <div class="product-body">


                            <div
                                class="product-category"
                            >

                                ${categoryName(product.category)}

                            </div>



                            <h3
                                class="product-name"
                            >

                                ${product.name}

                            </h3>



                            <div class="mb-3">


                                <span
                                    class="product-price"
                                >

                                    ${money(product.price)}

                                </span>


                                <span
                                    class="old-price"
                                >

                                    ${money(product.oldPrice)}

                                </span>


                            </div>



                            <button
                                class="
                                    btn
                                    btn-dark
                                    add-cart
                                "
                                data-id="${product.id}"
                            >

                                <i
                                    class="bi bi-bag-plus"
                                ></i>

                                ADD TO BAG

                            </button>


                        </div>

                    </div>

                </div>

            `;
    });

    $("#productGrid").html(html);
  }

  //    SAVE CART

  function saveCart() {
    localStorage.setItem("menzoCart", JSON.stringify(cart));
  }

  //    DISPLAY CART

  function renderCart() {
    let html = "";
    let subtotal = 0;
    let itemCount = 0;

    if (cart.length === 0) {
      html = `
            <div class="empty-cart">
              <i class="bi bi-bag-x"></i>
              <p class="mt-3">Your cart is empty.</p>
              <a href="#shop" class="btn btn-dark" data-bs-dismiss="offcanvas">
                START SHOPPING
              </a>
            </div>
        `;
    } else {
      $.each(cart, function (index, item) {
        const product = products.find(function (p) {
          return p.id === item.id;
        });

        if (!product) {
          return;
        }

        const lineTotal = product.price * item.qty;
        const hasOptions = Boolean(item.size && item.color);
        const optionText = hasOptions
          ? "Size: " + item.size + " · Color: " + item.color
          : "Choose size and color before ordering.";
        const optionAction = hasOptions ? "CHANGE OPTIONS" : "SELECT OPTIONS";

        subtotal += lineTotal;
        itemCount += item.qty;

        html += `
          <div class="cart-item">
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-item-info">
              <h6>${product.name}</h6>
              <div class="cart-variant">${optionText}</div>
              <strong>${money(product.price)}</strong>
              <button
                type="button"
                class="variant-edit-btn"
                data-cart-index="${index}"
              >${optionAction}</button>
              <div class="qty-controls">
                <button
                  type="button"
                  class="qty-btn"
                  data-cart-index="${index}"
                  data-action="minus"
                  aria-label="Decrease quantity"
                >−</button>
                <span>${item.qty}</span>
                <button
                  type="button"
                  class="qty-btn"
                  data-cart-index="${index}"
                  data-action="plus"
                  aria-label="Increase quantity"
                >+</button>
                <button
                  type="button"
                  class="remove-btn"
                  data-cart-index="${index}"
                  aria-label="Remove item"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      });
    }

    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    $("#cartItems").html(html);
    $("#cartCount").text(itemCount);
    $("#subtotal").text(money(subtotal));
    $("#gst").text(money(gst));
    $("#grandTotal").text(money(total));
  }

  //    TOAST

  function showToast(message) {
    $("#toastText").text(message);

    bootstrap.Toast.getOrCreateInstance(
      document.getElementById("liveToast"),
    ).show();
  }

  /*
   PRODUCT OPTIONS / ADD TO CART
*/
  $(document).on("click", ".add-cart, .wishlist-add-cart", function () {
    openVariantModal(Number($(this).data("id")));
  });

  $(document).on("click", ".variant-edit-btn", function () {
    const cartIndex = Number($(this).data("cart-index"));
    const item = cart[cartIndex];

    if (item) {
      openVariantModal(item.id, cartIndex);
    }
  });

  $("#saveVariantBtn").click(function () {
    if (!pendingVariantSelection) {
      return;
    }

    const size = $("#variantSize").val();
    const color = $("#variantColor").val();

    if (!size || !color) {
      showToast("Please choose both a size and a color.");
      return;
    }

    const productId = pendingVariantSelection.productId;
    const cartIndex = pendingVariantSelection.cartIndex;

    if (cartIndex === null) {
      const existingItem = cart.find(function (item) {
        return item.id === productId && item.size === size && item.color === color;
      });

      if (existingItem) {
        existingItem.qty++;
      } else {
        cart.push({
          id: productId,
          size: size,
          color: color,
          qty: 1,
        });
      }

      showToast("Item added to cart!");
    } else {
      const item = cart[cartIndex];

      if (!item) {
        return;
      }

      const duplicateIndex = cart.findIndex(function (candidate, index) {
        return (
          index !== cartIndex &&
          candidate.id === item.id &&
          candidate.size === size &&
          candidate.color === color
        );
      });

      if (duplicateIndex >= 0) {
        cart[duplicateIndex].qty += item.qty;
        cart.splice(cartIndex, 1);
      } else {
        item.size = size;
        item.color = color;
      }

      showToast("Product options saved.");
    }

    saveCart();
    renderCart();
    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("variantModal"),
    ).hide();
    pendingVariantSelection = null;
  });

  /*
   PLUS / MINUS
*/
  $(document).on("click", ".qty-btn", function () {
    const cartIndex = Number($(this).data("cart-index"));
    const item = cart[cartIndex];
    const action = $(this).data("action");

    if (!item) {
      return;
    }

    if (action === "plus") {
      item.qty++;
    } else {
      item.qty--;
    }

    if (item.qty <= 0) {
      cart.splice(cartIndex, 1);
    }

    saveCart();
    renderCart();
  });

  /*
   REMOVE
 */
  $(document).on("click", ".remove-btn", function () {
    const cartIndex = Number($(this).data("cart-index"));

    if (!Number.isInteger(cartIndex) || !cart[cartIndex]) {
      return;
    }

    cart.splice(cartIndex, 1);
    saveCart();
    renderCart();
    showToast("Item removed from cart.");
  });

  /* 
   CLEAR CART
 */

  $("#clearCart").click(function () {
    cart = [];

    saveCart();

    renderCart();

    showToast("Cart cleared.");
  });

  /* 
   BUY NOW
 */

  $("#buyBtn").click(function () {
    if (cart.length === 0) {
      showToast("Please add items to the cart first.");
      return;
    }

    if (cart.some(function (item) {
      return !item.size || !item.color;
    })) {
      showToast("Please choose a size and color for every cart item.");
      return;
    }

    let subtotal = 0;
    let html = "";

    $.each(cart, function (index, item) {
      const product = products.find(function (p) {
        return p.id === item.id;
      });

      if (!product) {
        return;
      }

      const lineTotal = product.price * item.qty;
      subtotal += lineTotal;
      html +=
        '<div class="d-flex justify-content-between mb-3">' +
        '<span>' +
        product.name +
        '<br><small class="text-muted">Size: ' +
        item.size +
        ' · Color: ' +
        item.color +
        '</small><br>× ' +
        item.qty +
        '</span>' +
        "<strong>" +
        money(lineTotal) +
        "</strong></div>";
    });

    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;

    $("#billDetails").html(html);
    $("#billSubtotal").text(money(subtotal));
    $("#billGST").text(money(gst));
    $("#billTotal").text(money(total));

    bootstrap.Offcanvas.getOrCreateInstance(
      document.getElementById("cartCanvas"),
    ).hide();

    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("billModal"),
    ).show();

    cart = [];
    saveCart();
    renderCart();
  });

  $("#whatsappOrderBtn").click(function () {
    if (cart.length === 0) {
      showToast("Add items to your cart before ordering.");
      return;
    }

    if (cart.some(function (item) {
      return !item.size || !item.color;
    })) {
      showToast("Please choose a size and color for every cart item.");
      return;
    }

    const orderItems = [];
    let subtotal = 0;

    $.each(cart, function (index, item) {
      const product = products.find(function (p) {
        return p.id === item.id;
      });

      if (!product) {
        return;
      }

      const lineTotal = product.price * item.qty;
      subtotal += lineTotal;
      orderItems.push(
        product.name +
          " | Size: " +
          item.size +
          " | Color: " +
          item.color +
          " × " +
          item.qty +
          " — " +
          money(lineTotal),
      );
    });

    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;
    const message = [
      "Hi MENZO, I’d like to place an order:",
      "",
      ...orderItems,
      "",
      "Subtotal: " + money(subtotal),
      "GST (18%): " + money(gst),
      "Total: " + money(total),
      "",
      "Please confirm size/color availability and delivery details.",
    ].join("\n");
    const whatsappNumber = "919629393679";
    const whatsappUrl =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message);

    window.location.href = whatsappUrl;
  });

  /* 
   FILTER
 */

  $(".filter-btn").click(function () {
    $(".filter-btn").removeClass("active");

    $(this).addClass("active");

    currentFilter = $(this).data("filter");

    renderProducts();

    $("#shop")[0].scrollIntoView({
      behavior: "smooth",
    });
  });

  /* 
   CATEGORY BUTTON
 */

  $(".category-btn").click(function () {
    let category = $(this).data("category");

    currentFilter = category;

    $(".filter-btn").removeClass("active");

    $('.filter-btn[data-filter="' + category + '"]').addClass("active");

    renderProducts();

    $("#shop")[0].scrollIntoView({
      behavior: "smooth",
    });
  });

  /*
   SORT
*/

  $("#sortSelect").change(function () {
    renderProducts();
  });

  /*
   SEARCH OPEN
 */

  $("#searchToggle").click(function () {
    $("#searchBox").toggleClass("show");

    if ($("#searchBox").hasClass("show")) {
      $("#searchInput").focus();
    }
  });

  /*
   SEARCH
 */

  $("#searchInput").on("input", function () {
    currentSearch = $(this).val().trim();

    renderProducts();
  });

  /*
   CLEAR SEARCH
*/

  $("#clearSearch").click(function () {
    $("#searchInput").val("");

    currentSearch = "";

    renderProducts();

    $("#searchInput").focus();
  });

  /* 
   WISHLIST
*/
  /* 
   WISHLIST
*/

  function getWishlist() {
    return JSON.parse(localStorage.getItem("menzoWishlist")) || [];
  }

  function saveWishlist(wishlist) {
    localStorage.setItem("menzoWishlist", JSON.stringify(wishlist));
  }

  /* 
   CHECK WISHLIST
*/

  function isInWishlist(id) {
    let wishlist = getWishlist();

    return wishlist.includes(id);
  }

  /* 
   RENDER WISHLIST
*/

  function renderWishlist() {
    let wishlist = getWishlist();

    let html = "";

    if (wishlist.length === 0) {
      html = `

      <div class="empty-wishlist">

        <i class="bi bi-heart"></i>

        <h5 class="mt-3">
          Your wishlist is empty
        </h5>

        <p>
          Save your favourite products here.
        </p>

        <a
          href="#shop"
          class="btn btn-dark"
          data-bs-dismiss="offcanvas"
        >
          EXPLORE PRODUCTS
        </a>

      </div>

    `;
    } else {
      $.each(wishlist, function (index, id) {
        let product = products.find(function (p) {
          return p.id === id;
        });

        if (!product) {
          return;
        }

        html += `

        <div class="wishlist-item">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

          <div class="wishlist-item-info">

            <h6>
              ${product.name}
            </h6>

            <div class="wishlist-category">
              ${categoryName(product.category)}
            </div>

            <div>

              <span class="wishlist-price">
                ${money(product.price)}
              </span>

              <span class="wishlist-old-price">
                ${money(product.oldPrice)}
              </span>

            </div>

            <div class="wishlist-actions">

              <button
                class="wishlist-add-cart"
                data-id="${product.id}"
              >
                <i class="bi bi-bag-plus"></i>
                ADD TO BAG
              </button>

              <button
                class="wishlist-remove"
                data-id="${product.id}"
              >
                <i class="bi bi-trash"></i>
                REMOVE
              </button>

            </div>

          </div>

        </div>

      `;
      });
    }

    $("#wishlistItems").html(html);

    $("#wishlistCount").text(wishlist.length);
  }

  /*
   ADD / REMOVE WISHLIST
*/

  $(document).on("click", ".wishlist-btn", function () {
    let id = Number($(this).data("id"));

    let wishlist = getWishlist();

    let index = wishlist.indexOf(id);

    if (index === -1) {
      wishlist.push(id);

      showToast("Added to wishlist ❤️");
    } else {
      wishlist.splice(index, 1);

      showToast("Removed from wishlist.");
    }

    saveWishlist(wishlist);

    renderProducts();

    renderWishlist();
  });

  /*
   REMOVE FROM WISHLIST
*/

  $(document).on("click", ".wishlist-remove", function () {
    let id = Number($(this).data("id"));

    let wishlist = getWishlist();

    wishlist = wishlist.filter(function (itemId) {
      return itemId !== id;
    });

    saveWishlist(wishlist);

    renderProducts();

    renderWishlist();

    showToast("Product removed from wishlist.");
  });

  /*
   ADD WISHLIST PRODUCT TO CART
*/

  $(document).on("click", ".wishlist-add-cart", function () {
    let id = Number($(this).data("id"));

    let existing = cart.find(function (item) {
      return item.id === id;
    });

    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id: id,

        qty: 1,
      });
    }

    saveCart();

    renderCart();

    showToast("Product added to cart! 🛍️");
  });

  /*
   INITIAL WISHLIST LOAD
*/

  renderWishlist();

  /* 
   LOGIN
 */

  $("#loginForm").submit(function (event) {
    event.preventDefault();

    let name = $("#loginName").val();

    bootstrap.Modal.getOrCreateInstance(
      document.getElementById("loginModal"),
    ).hide();

    showToast("Welcome " + name + "! Sign in successful.");

    this.reset();
  });

  /* 
   CONTACT
 */

  $("#contactForm").submit(function (event) {
    event.preventDefault();

    showToast("Your enquiry has been submitted successfully!");

    this.reset();
  });

  /* 
   INITIAL LOAD
 */

  renderProducts();

  renderCart();

  renderWishlist();
});
