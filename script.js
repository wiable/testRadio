var subscriptionRadio = document.getElementById("calendly-subscription");
var freeRadio = document.getElementById("free-calendly");
var threePageSiteCheckbox = document.getElementById("three-page-site-info");
var totalAmount = document.getElementById("total-amount");
var fivePageSiteCheckbox = document.getElementById("five-page-site-info");
var tenPageSiteCheckbox = document.getElementById("ten-page-site-info");
var twentyPageSiteCheckbox = document.getElementById("twenty-page-site-info");

subscriptionRadio.on("click", function () {
  updateTotalAmount();
});

freeRadio.on("click", function () {
  updateTotalAmount();
});

threePageSiteCheckbox.on("change", function () {
  updateTotalAmount();
});

fivePageSiteCheckbox.on("change", function () {
  updateTotalAmount();
});

tenPageSiteCheckbox.on("change", function () {
  updateTotalAmount();
});

twentyPageSiteCheckbox.on("change", function () {
  updateTotalAmount();
});

function updateTotalAmount() {
  var amount = 0;

  if (subscriptionRadio.checked || freeRadio.checked) {
    amount = 500;
  }

  if (threePageSiteCheckbox.checked) {
    amount += 600;
  }

  if (fivePageSiteCheckbox.checked) {
    amount += 1000;
  }

  if (tenPageSiteCheckbox.checked) {
    amount += 2000;
  }

  if (twentyPageSiteCheckbox.checked) {
    amount += 4000;
  }

  totalAmount.textContent = amount;
}
