const grid_content = document.getElementById("grid-content");

for (let i = 1; i <= 30; i++) {
    const card_image = document.createElement("div");
    card_image.classList.add("card-image");
    card_image.innerHTML = `<img src="/img/pict (${i}).jpg" alt="imagen">
                            <div class="overview">
                            <button type="button" class="know-more">View</button>
                            </div>`;
    grid_content.appendChild(card_image);
}