function handleBoxClick(targetBox, sizeElement, radioElement) {
  [box1, box2, box3].forEach((box) => {
    box.style.border = "1px solid rgb(184, 181, 181)";
  });

  [size1, size2, size3].forEach((size) => {
    size.style.display = size === sizeElement ? "block" : "none";
  });


  targetBox.style.border = "2px solid red";

  [radio1, radio2, radio3].forEach((radio) => {
    radio.checked = radio === radioElement;
  });
}

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

const size1 = document.getElementById("size1");
const size2 = document.getElementById("size2");
const size3 = document.getElementById("size3");

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");

const standardPrice = document.getElementById("standardPrice");

box1.addEventListener("click", () => handleBoxClick(box1, size1, radio1));
box2.addEventListener("click", () => handleBoxClick(box2, size2, radio2));
box3.addEventListener("click", () => handleBoxClick(box3, size3, radio3));
