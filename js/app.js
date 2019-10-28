document.addEventListener("DOMContentLoaded",function () {
  console.log("Loaded");
// Variables
  const productQuantity = document.getElementById("productQuantity");
  const estimatedOrder = document.getElementById("estimatedOrder");
  const packageType = document.getElementById("package");
  const accounting = document.getElementById("accounting");
  const rental = document.getElementById("rental");

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
    productsSum.innerText = `$${(this.value*0.5)}`;
    sum1 = (this.value*0.5);
    totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
  });
  productQuantity.addEventListener("keyup", function () {
    productsCalc.innerText = `${this.value} * $0.5`;
    productsSum.innerText = `$${(this.value*0.5)}`;
    sum1 = (this.value*0.5);
    totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
  });
  estimatedOrder.addEventListener("click", function () {
    ordersCalc.innerText = `${this.value} * $0.25`;
    ordersSum.innerText = `$${(this.value*0.25)}`;
    sum2 = (this.value*0.25);
    totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
  });
  estimatedOrder.addEventListener("keyup", function () {
    ordersCalc.innerText = `${this.value} * $0.25`;
    ordersSum.innerText = `$${(this.value*0.25)}`;
    sum2 = (this.value*0.25);
    totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
  });
  packageType.addEventListener("click", function () {
    packageTypeOutcome.innerText = this.value;
    if (this.value === "Basic") {
      packageSum.innerText = '$0';
      sum3 = 0;
      totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
    }  else if (this.value === "Professional") {
      packageSum.innerText = '$25';
      sum3 = 25;
      totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
    } else if (this.value === "Premium") {
      packageSum.innerText = '$60';
      sum3 = 60;
      totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
    } else {
      packageSum.innerText = '';
      sum3 = 0;
      totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
    }
  });
  accounting.addEventListener("click", function () {
    if (this.checked) {
      accountingSum.innerText = `$35`;
      sum4 = 35;
      totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
    } else {
      accountingSum.innerText = `$0`;
      sum4 = 0;
      totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
    }
  });
  rental.addEventListener("click", function () {
    if (this.checked) {
      terminalSum.innerText = `$5`;
      sum5 = 5;
      totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
    } else {
      terminalSum.innerText = `$0`;
      sum5 = 0;
      totalSum.innerText = `$${sum1+sum2+sum3+sum4+sum5}`;
    }
  });


});