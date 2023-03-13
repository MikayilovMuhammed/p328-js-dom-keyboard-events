// // const parentElemnt = document.getElementById("parentId");
// // const buttons = document.getElementsByClassName("btn");
// const parentElemnt = document.querySelector("#parentId");
// const div = document.querySelector("#t");
// const buttons = document.querySelectorAll("#parentId button");

// // console.log(buttons);

// buttons.forEach((btn, idx) => {
//   btn.addEventListener("click", function () {
//     // console.log("TST", this);
//     // console.log("TST", this.innerHTML);

//     // console.log(p);
//     console.log(div.innerHTML);

//     div.innerHTML = `<span>${idx + 1}st clicked</span>`;
//     // this.innerText = idx + 1 + "st clicked";
//   });
// });

// function tst() {
//   console.log("salam");
// }

// // function eventListener(element, event, callback) {
// //   if (event === "click") {
// //     element.onclick = callback();
// //   }
// // }

// // function tstFunc() {
// //   console.log(this);
// // }

// // tstFunc();

// // console.log("parentElemnt", parentElemnt);
// // console.log("buttons", buttons);
// // buttons.forEach((el) => {
// //   console.log(el);
// //   return el;
// // });

// // for (let element of buttons) {
// //   console.log(element);
// // }

// // Array.from(buttons).forEach((el) => {
// //   console.log(el);
// // });

// const form = document.querySelector("form");
// const inputs = document.querySelectorAll("input");
// const info = document.querySelector(".info");
// const infoFields = document.querySelectorAll(".info h2");

// const inputValue = {};

// inputs.forEach((input) => {
//   input.addEventListener("change", function (e) {
//     const { name: inputName, value } = this;
//     // inputValue[this.name] = this.value;
//     inputValue[inputName] = value;
//   });
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   infoFields.forEach((infoField) => {
//     infoField.innerText += inputValue[infoField.id];
//     info.style.display = "block";

//     infoField.classList.add("active");

//     infoField.onclick = (e) => {
//       e.target.classList.remove("active");
//     };
//   });
// });

// document.querySelectorAll(".test").forEach((hElement) => {
//   hElement.addEventListener("click", (e) => {
//     const thisElemet = e.target;
//     thisElemet.classList.toggle("active");

//     // if (e.target.classList.contains("active")) {
//     //   e.target.classList.remove("active");
//     // } else {
//     //   e.target.classList.add("active");
//     // }

//     // console.log(thisElemet.children);
//     console.log(thisElemet.parentElement);
//   });
// });

// console.log(
//   document.querySelector("#second").previousElementSibling.textContent
// );
// console.log(document.querySelector("#second").textContent);
// console.log(document.querySelector("#second").nextElementSibling.textContent);

const snake = document.querySelector("#snake");
let topPosition = 0;
document.addEventListener("keydown", (ev) => {
  const { key: eventKey } = ev;

  console.log(eventKey);

  if (eventKey === "ArrowDown") {
    topPosition += 10;
    snake.style.top += `${topPosition}px`;
  } else if (eventKey === "ArrowRight") {
    topPosition += 15;
    snake.style.left += `${topPosition}px`;
  }
});

// console.log(Array.from(info.children));

// console.log(document.querySelector("body").parentElement);
