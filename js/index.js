const grid_content = document.getElementById("grid-content");
const row = document.createElement("div");
row.className = "row-card-image";
grid_content.appendChild(row);

for (let i = 1; i <= 30; i++) {
    const card_image = document.createElement("div");
    card_image.classList.add("card-image");
    card_image.innerHTML = `<img src="/img/pict (${i}).jpg" alt="imagen">`;
    row.appendChild(card_image);
}

