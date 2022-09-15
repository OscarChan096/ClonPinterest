const grid_content = document.getElementById("grid-content");

for (let i = 1; i <= 30; i++) {
    const card_image = document.createElement("div");
    card_image.classList.add("card-image");
    card_image.innerHTML = `<img src="./img/pict (${i}).jpg" alt="imagen">
                            <div class="overview">
                            <div class="header-card-image">
                            <button type="button" class="save-btn">Guardar</button>
                            </div>
                            <div class="footer-card-image">
                            <div class="url-btn">
                            <input type="button" class="url" value="/img/pict (${i}).jpg">
                            </div>
                            <div class="up-icon-div">
                            <input type="image" src="./img/up.png" class="up">
                            </div>
                            <div class="more-btn">
                            <input type="image" src="./img/puntos.png" class="more">
                            </div>
                            </div>
                            </div>`;
    grid_content.appendChild(card_image);
}