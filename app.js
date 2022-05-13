const added = document.querySelector(".added");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".btn");
const list = document.querySelector(".list");
const editBtn = document.querySelector(".fa-pen-to-square");
const deleteBtn = document.querySelector(".fa-solid fa-trash");
const clearBtn = document.querySelector(".clear");
const text = document.querySelector(".text");

let arr = [];

submitBtn.addEventListener("click", () => {
  let inputList = input.value;
  const listInfo = `<li class = 'addedList'>
            <p class = 'text'>${inputList}</p> 
            <div>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
            </div>
        </li>`;
  const timeOut = setTimeout(message, 1000);
  function message() {
    added.style.display = "none";
  }
  if (inputList !== "") {
    arr.push((list.innerHTML += listInfo));
    added.style.display = "block";
    added.style.backgroundColor = "rgb(191, 242, 191)";
    added.innerHTML = "Added Items To The List";
  }

  arr.forEach((el, index) => {
    index, el;
  });

  if (list.innerHTML !== "") {
    clearBtn.style.display = "block";
  } else clearBtn.style.display = "none";
  submitBtn.innerText = "Submit";
  input.value = "";
});

list.addEventListener("click", function (el) {
  const timeOut = setTimeout(message, 1000);
  function message() {
    added.style.display = "none";
  }
  const listInfo = `<li class = 'addedList'>
            <p class = 'text'>${input.value}</p> 
            <div>
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
            </div>
        </li>`;
  if (el.target.className === "fa-solid fa-trash") {
    el.target.parentElement.parentElement.remove();
    added.style.backgroundColor = "red";
    added.style.color = "white";
    added.style.display = "block";
    added.innerHTML = "Item Removed";
  } else if (el.target.className === "fa-solid fa-pen-to-square") {
    // debugger
    submitBtn.innerText = "Edit";
    let itemValue =
      el.target.parentElement.parentElement.firstElementChild.textContent;
    input.value = itemValue;
    added.style.display = "block";
    added.style.backgroundColor = "rgb(191, 242, 191)";
    added.innerHTML = "Value Changed";
    el.target.parentElement.parentElement.remove();
  }
  // console.log('clicked');
});

clearBtn.addEventListener("click", function (el) {
  const timeOut = setTimeout(message, 1000);
  function message() {
    added.style.display = "none";
  }
  added.style.backgroundColor = "red";
  added.style.color = "white";
  added.style.display = "block";
  list.innerHTML = "";
  added.innerHTML = "Empty List";
});
