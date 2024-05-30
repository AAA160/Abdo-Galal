let count = document.getElementById("count");

function updateCount() {
  count.innerHTML = parseInt(document.getElementById("num").value) || "...";
}

function update() {
  updateCount();
  if (parseInt(count.innerHTML) === 9000) {
    addCards(`مبرووووك إجابة صحيحة`);
  } else if (parseInt(count.innerHTML) > 9000) {
    addCards(`لا يعم هو مش خول للدرجادي هو اتناك 9000 مرة بس`);
  } else {
    addCards(`غلط ،أبو جلال اتناك 9000 مرة`);
  }
}

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
