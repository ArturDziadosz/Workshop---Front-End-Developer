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

  const productsCalc = document.getElementById("productsCalc");
  const productsSum = document.getElementById("productsSum");
  const ordersCalc = document.getElementById("ordersCalc");
  const ordersSum = document.getElementById("ordersSum");
  const packageTypeOutcome = document.getElementById("packageType");
  const packageSum = document.getElementById("packageSum");
  const accountingSum = document.getElementById("accountingSum");
  const terminalSum = document.getElementById("terminalSum");
  const totalSum = document.getElementById("totalSum");
  let sum1 = 0;
  let sum2 = 0;
  let sum3 = 0;
  let sum4 = 35;
  let sum5 = 5;

  //Events
  productQuantity.addEventListener("click", function () {
    productsCalc.innerText = `${this.value} * $0.5`;
    productsSum.innerText = `$${(this.value * 0.5)}`;
    sum1 = (this.value * 0.5);
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  productQuantity.addEventListener("keyup", function () {
    productsCalc.innerText = `${this.value} * $0.5`;
    productsSum.innerText = `$${(this.value * 0.5)}`;
    sum1 = (this.value * 0.5);
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  estimatedOrder.addEventListener("click", function () {
    ordersCalc.innerText = `${this.value} * $0.25`;
    ordersSum.innerText = `$${(this.value * 0.25)}`;
    sum2 = (this.value * 0.25);
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  estimatedOrder.addEventListener("keyup", function () {
    ordersCalc.innerText = `${this.value} * $0.25`;
    ordersSum.innerText = `$${(this.value * 0.25)}`;
    sum2 = (this.value * 0.25);
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  accounting.addEventListener("click", function () {
    if (this.checked) {
      accountingSum.innerText = `$35`;
      sum4 = 35;
      totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    } else {
      accountingSum.innerText = `$0`;
      sum4 = 0;
      totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    }
  });
  rental.addEventListener("click", function () {
    if (this.checked) {
      terminalSum.innerText = `$5`;
      sum5 = 5;
      totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    } else {
      terminalSum.innerText = `$0`;
      sum5 = 0;
      totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
    }
  });
  //Rotating arrow
  cover.addEventListener("click", function () {
    options.classList.toggle("visible");
    arrow.classList.toggle("rotate");
  });
  basic.addEventListener("click", function () {
    options.classList.toggle("visible");
    arrow.classList.toggle("rotate");
    packageType.value = "Basic";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$0';
    sum3 = 0;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  professional.addEventListener("click", function () {
    options.classList.toggle("visible");
    arrow.classList.toggle("rotate");
    packageType.value = "Professional";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$25';
    sum3 = 25;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  premium.addEventListener("click", function () {
    options.classList.toggle("visible");
    arrow.classList.toggle("rotate");
    packageType.value = "Premium";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$60';
    sum3 = 60;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  beginBasic.addEventListener("click", function () {
    packageType.value = "Basic";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$0';
    sum3 = 0;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  beginProfessional.addEventListener("click", function () {
    packageType.value = "Professional";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$25';
    sum3 = 25;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  });
  beginPremium.addEventListener("click", function () {
    packageType.value = "Premium";
    cover.innerText = "";
    packageTypeOutcome.innerText = packageType.value;
    packageSum.innerText = '$60';
    sum3 = 60;
    totalSum.innerText = `$${sum1 + sum2 + sum3 + sum4 + sum5}`;
  })

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
      hamburgerMenuBtn.firstElementChild.classList.contains("rotate45") ? (hamburgerMenuBtn.firstElementChild.classList.toggle("rotate-45")) && (hamburgerMenuBtn.firstElementChild.classList.toggle("rotate45")) : (hamburgerMenuBtn.firstElementChild.classList.toggle("rotate45")) && (hamburgerMenuBtn.firstElementChild.classList.toggle("rotate-45"));
      hamburgerMenuBtn.children[1].classList.contains("rotate135") ? (hamburgerMenuBtn.children[1].classList.toggle("rotate-45v2")) && (hamburgerMenuBtn.children[1].classList.toggle("rotate135")) : (hamburgerMenuBtn.children[1].classList.toggle("rotate135")) && (hamburgerMenuBtn.children[1].classList.toggle("rotate-45v2"));
      hamburgerMenuBtn.lastElementChild.classList.toggle("visible");

      this.parentElement.parentElement.style.display === "block" ? this.parentElement.parentElement.style.display = "none" : this.parentElement.parentElement.style.display = "block";
    });
  });
});