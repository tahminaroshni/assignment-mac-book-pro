function totalCost(item, price) {
  const costId = document.getElementById(item + '-cost');
  costId.innerText = price;
}

function updateTotalPrice() {
  const bestPrice = document.getElementById('best-price').innerText;
  const memoryCost = document.getElementById('memory-cost').innerText;
  const storageCost = document.getElementById('storage-cost').innerText;
  const deliveryCharge = document.getElementById('delivery-cost').innerText;
  let totalPriceId = document.getElementById('total-price');
  totalPriceId.innerText = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge);
  const totalPrice = totalPriceId.innerText;
  document.getElementById('total').innerText = totalPrice;
  return totalPrice;
}


function applyPromoCode() {
  const promoCode = document.getElementById('promo-code').value;
  document.getElementById('promo-code').value = '';
  if (promoCode === 'stevecoke') {
    const discount = updateTotalPrice() * 0.2;
    const discountPrice = updateTotalPrice() - discount;
    document.getElementById('total').innerText = discountPrice;
  }
}


// memory cost
document.getElementById('16gb-memory').addEventListener('click', function () {
  totalCost('memory', 60);
  updateTotalPrice();
  applyPromoCode();
});

document.getElementById('8gb-memory').addEventListener('click', function () {
  totalCost('memory', 0);
  updateTotalPrice();
  applyPromoCode();
});

// storage-cost
document.getElementById('256gb-storage').addEventListener('click', function () {
  totalCost('storage', 0);
  updateTotalPrice();
  applyPromoCode();
});
document.getElementById('512gb-storage').addEventListener('click', function () {
  totalCost('storage', 120);
  updateTotalPrice();
  applyPromoCode();
});
document.getElementById('1tb-storage').addEventListener('click', function () {
  totalCost('storage', 180);
  updateTotalPrice();
  applyPromoCode();
});

// delivery charge
document.getElementById('free-delivery').addEventListener('click', function () {
  totalCost('delivery', 0);
  updateTotalPrice();
  applyPromoCode();
});
document.getElementById('charge-delivery').addEventListener('click', function () {
  totalCost('delivery', 20);
  updateTotalPrice();
  applyPromoCode();
});

// promo code
document.getElementById('btn-apply').addEventListener('click', function () {
  applyPromoCode();
});