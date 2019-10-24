window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Click count: ${event.detail}`;
   button.innerHTML= xhttp.open("POST", "https://httpbin.org/post ", true);
xhttp.send();
  changecolor("drexel");
});

