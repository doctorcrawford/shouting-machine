window.onload = function() {
  const form = document.querySelector("form");
  let counter = 12;
  const shout = document.querySelector("#theShout");

  form.onsubmit = function(event) {
    event.preventDefault();
    counter *= 2;
    const userInput = document.querySelector("#userInput").value;
    shout.style.fontSize = `${counter}px`
    shout.innerText = userInput.toUpperCase();

    document.querySelector("#shout").removeAttribute("class");
  
  }
} 