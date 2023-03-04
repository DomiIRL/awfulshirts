
function injectShopItemContent(title, price, image, afterInject = () => {}) {
    fetch("/templates/item.html")
        .then(response => response.text())
        .then(text => {
            text = text.replaceAll("%title%", title)
                .replaceAll("%price%", price)
                .replaceAll("%image%", image);
            document.getElementById("inject_content").innerHTML = text;
            injectSmallImage(image, true);
            afterInject();
        });
}

function injectSmallImage(image, defaultEnabled = false) {
    classes = "small_image" + (defaultEnabled ? " active" : "");
    document.getElementById("inject_small_images").insertAdjacentHTML("beforeend", `<button class="${classes}" onclick="onSmallImageClick(this)" style="background-image: url(${image});"></button>`);
}

function injectSizeSetting() {
    injectSetting(`
         <label>Größe*</label>
         <select id="setting_size">
          <option>Größe Auswählen</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
          <option value="3xl">3XL</option>
          <option value="4xl">4XL</option>
          <option value="5xl">5XL</option>
        </select>
    `)
}

function injectSetting(option) {
    document.getElementById("inject_settings").insertAdjacentHTML("afterbegin", `${option}`)
}

// End Injecting
// Start Functionality

function onSmallImageClick(imageElement) {

    var children = document.getElementById("inject_small_images").children;
    for (let i = 0; i < children.length; i++) {
        var child = children[i];
        child.classList.remove("active");
    }

    document.getElementById("inject_big_image_src").style.backgroundImage = imageElement.style.backgroundImage;
    imageElement.classList.add("active");
}

