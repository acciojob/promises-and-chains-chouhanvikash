let age = document.getElementById("age");
let name = document.getElementById("name");
let btn = document.getElementById("btn");

btn.addEventListener("click", fun);

function fun(e) {
  e.preventDefault();

  if (name.value === "" || age.value === "") {
    alert("Please enter valid details");
    return;
  }

  setTimeout(promiseF, 4000);

  function promiseF() {
    const promise = new Promise((resolve, reject) => {
      if (Number(age.value) > 18) {
        resolve(`Welcome, ${name.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${name.value}. You aren't old enough.`);
      }
    });

    promise
      .then(msg => alert(msg))
      .catch(err => alert(err));
  }
}
