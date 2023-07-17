const slides = [
  "https://cdn.shopify.com/s/files/1/0565/7814/6463/products/PHOTO-2021-03-03-02-11-47_grande.jpg",
  "https://static-bebeautiful-in.unileverservices.com/natural_remedies_for_acne_treatment_at_home_mobilehome.jpg",
  "https://aliyakg.flpretail.com/media/cache/product/photo/6b/6ba4/6ba44be4/6ba44be4fdb942dc/bdc5d8a57c61148cb370ff31450cd5f2.png"
];

let start = 0;
const img = document.getElementById("img");

function slider() {
  if (start < slides.length) {
    start = start + 1;
  } else {
    start = 1;
  }
  img.innerHTML = `<img src="${slides[start - 1]}">`;
}

setInterval(slider, 3000); // Change slide every 3 seconds (adjust as needed)
