console.log("Client side javascript file is loaded!");

// fetch('http://puzzle.mead.io/puzzle').then((res) => {
// 	res.json().then((data => {
// 		console.log(data)
// 	}))
// })
const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  // localhost가 아닌 heroku url을 이용하기 위해서는 앞의 url을 빼고 /만 있어됨
  // fetch('http://localhost:3000/weather?address=' + location).then((response) => {
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
      }
    });
  });
});
