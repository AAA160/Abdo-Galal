document.getElementById("how-button").onclick = function () {
  naho = document.querySelector("video");
  naho.hidden = false;
  naho.play();
  console.log("زبي");
};

function addCards(...values) {
  const container = document.getElementById("container");
  container.innerHTML = "";
  values.forEach((value) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = value;
    container.appendChild(card);
  });
}
