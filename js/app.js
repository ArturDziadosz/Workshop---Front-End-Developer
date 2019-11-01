document.addEventListener("DOMContentLoaded", function () {
  console.log("Loaded");
// Variables
  const productQuantity = document.getElementById("productQuantity");
  const estimatedOrder = document.getElementById("estimatedOrder");
  const packageType = document.getElementById("package");
  const accounting = document.getElementById("accounting");
  const rental = document.getElementById("rental");
  const cover = document.getElementById("cover");
  const options = document.getElementById("options");
  const arrow = document.getElementById("arrow");
  const basic = document.getElementById("basic");
  const professional = document.getElementById("professional");
  const premium = document.getElementById("premium");
  const beginBasic = document.getElementById("beginBasic");
  const beginProfessional = document.getElementById("beginProfessional");
  const beginPremium = document.getElementById("beginPremium");
  const hamburgerMenuBtn = document.getElementById("hamburgerMenu");
  const allLiNavBar = document.querySelectorAll(".header__nav__list li");
  const navBar = document.getElementById("navBar");

  const productsCalc = document.getElementById("productsCalc");
  const productsSum = document.getElementById("productsSum");
  const ordersCalc = document.getElementById("ordersCalc");
  const ordersSum = document.getElementById("ordersSum");
  const packageTypeOutcome = document.getElementById("packageType");
  const packageSum = document.getElementById("packageSum");
  const accountingSum = document.getElementById("accountingSum");
  const terminalSum = document.getElementById("terminalSum");
  const totalSum = document.getElementById("totalSum");
  let sum1 = 0,
    sum2 = 0,
    sum3 = 0,
    sum4 = 0,
    sum5 = 0;

  // media query
  const TabletSize = window.matchMedia("(max-width: 768px)");

  //always showing navBar for wider screens
  TabletSize.addListener(tablet);

  //not closing nav menu on bigger screens
  //resetting hamburger Menu
  function tablet(size) {
    if (size.matches) {
      navBar.style.display === "block" ? navBar.style.display = "none" : navBar.style.display = "block";
      if (hamburgerMenuBtn.lastElementChild.classList.contains("visible")) {
        hamburgerMenuBtn.firstElementChild.classList.contains("rotate45") ? (hamburgerMenuBtn.firstElementChild.classList.toggle("rotate-45")) && (hamburgerMenuBtn.firstElementChild.classList.toggle("rotate45")) : (hamburgerMenuBtn.firstElementChild.classList.toggle("rotate45")) && (hamburgerMenuBtn.firstElementChild.classList.toggle("rotate-45"));
        hamburgerMenuBtn.children[1].classList.contains("rotate135") ? (hamburgerMenuBtn.children[1].classList.toggle("rotate-45v2")) && (hamburgerMenuBtn.children[1].classList.toggle("rotate135")) : (hamburgerMenuBtn.children[1].classList.toggle("rotate135")) && (hamburgerMenuBtn.children[1].classList.toggle("rotate-45v2"));
        hamburgerMenuBtn.lastElementChild.classList.toggle("visible");
      }

    } else {
      navBar.style.display = "block";
    }
  }

  //Events
  productQuantity.addEventListener("input", function () {
    productsCalc.parentElement.classList.remove("visible");
    productsCalc.innerText = `${this.value} * $0.5`;
    productsSum.innerText = `$${(this.value * 0.5)}`;
    sum1 = (this.value * 0.5);
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    console.log(productQuantity.value);
    if (productQuantity.value === "") {
      productsCalc.parentElement.classList.add("visible");
    }
  });

  estimatedOrder.addEventListener("input", function () {
    ordersCalc.parentElement.classList.remove("visible");
    ordersCalc.innerText = `${this.value} * $0.25`;
    ordersSum.innerText = `$${(this.value * 0.25)}`;
    sum2 = (this.value * 0.25);
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    if (estimatedOrder.value === "") {
      ordersCalc.parentElement.classList.add("visible");
    }
  });

  accounting.addEventListener("click", function () {
    if (this.checked) {
      accountingSum.parentElement.classList.remove("visible");
      accountingSum.innerText = `$35`;
      sum4 = 35;
      totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    } else {
      accountingSum.parentElement.classList.add("visible");
      accountingSum.innerText = `$0`;
      sum4 = 0;
      totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    }
  });
  rental.addEventListener("click", function () {
    if (this.checked) {
      terminalSum.parentElement.classList.remove("visible");
      terminalSum.innerText = `$5`;
      sum5 = 5;
      totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    } else {
      terminalSum.parentElement.classList.add("visible");
      terminalSum.innerText = `$0`;
      sum5 = 0;
      totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    }
  });

  //Rotating arrow and showing options
  cover.addEventListener("click", function () {
    options.classList.toggle("visible");
    arrow.classList.toggle("rotate180");
  });

  basic.addEventListener("click", function () {
    options.classList.toggle("visible");
    arrow.classList.toggle("rotate180");
    packageTypeOutcome.parentElement.classList.remove("visible");
    packageType.value = "Basic";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$0';
    sum3 = 0;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  professional.addEventListener("click", function () {
    options.classList.toggle("visible");
    arrow.classList.toggle("rotate180");
    packageTypeOutcome.parentElement.classList.remove("visible");
    packageType.value = "Professional";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$25';
    sum3 = 25;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  premium.addEventListener("click", function () {
    options.classList.toggle("visible");
    arrow.classList.toggle("rotate180");
    packageTypeOutcome.parentElement.classList.remove("visible");
    packageType.value = "Premium";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$60';
    sum3 = 60;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });

  //pricing btns go into calculator
  beginBasic.addEventListener("click", function () {
    packageTypeOutcome.parentElement.classList.remove("visible");
    packageType.value = "Basic";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$0';
    sum3 = 0;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  beginProfessional.addEventListener("click", function () {
    packageTypeOutcome.parentElement.classList.remove("visible");
    packageType.value = "Professional";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$25';
    sum3 = 25;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  beginPremium.addEventListener("click", function () {
    packageTypeOutcome.parentElement.classList.remove("visible");
    packageType.value = "Premium";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$60';
    sum3 = 60;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });


  //hamburger Menu
  hamburgerMenuBtn.addEventListener("click", function () {
    this.firstElementChild.classList.contains("rotate45") ? (this.firstElementChild.classList.toggle("rotate-45")) && (this.firstElementChild.classList.toggle("rotate45")) : (this.firstElementChild.classList.toggle("rotate45")) && (this.firstElementChild.classList.toggle("rotate-45"));
    this.children[1].classList.contains("rotate135") ? (this.children[1].classList.toggle("rotate-45v2")) && (this.children[1].classList.toggle("rotate135")) : (this.children[1].classList.toggle("rotate135")) && (this.children[1].classList.toggle("rotate-45v2"));
    this.lastElementChild.classList.toggle("visible");

    this.previousElementSibling.style.display === "block" ? this.previousElementSibling.style.display = "none" : this.previousElementSibling.style.display = "block";
  });

  //closing menu after clicking element in nav list
  allLiNavBar.forEach(function (elem) {
    elem.addEventListener("click", function () {
        tablet(TabletSize);
        }
      );
  });

  //input number not negative
  productQuantity.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58)
      || e.keyCode == 8)) {
      return false;
    }
  };
  estimatedOrder.onkeydown = function(e) {
    if(!((e.keyCode > 95 && e.keyCode < 106)
      || (e.keyCode > 47 && e.keyCode < 58)
      || e.keyCode == 8)) {
      return false;
    }
  };
});