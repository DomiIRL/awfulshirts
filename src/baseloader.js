
function injectNavbar() {
    fetch("/templates/navbar.html")
        .then(response => response.text())
        .then(text => document.getElementById("inject_navbar").innerHTML = text);
}

function injectFooter() {
    fetch("/templates/footer.html")
        .then(response => response.text())
        .then(text => document.getElementById("inject_footer").innerHTML = text);
}

function injectHeader() {
    const style = document.createElement("link");
    style.type = "text/css"
    style.rel = "stylesheet"
    style.href = "styles/base.css"
    document.head.appendChild(style);

    const title = document.createElement("title");
    title.innerHTML = "Awfulshirts"
    document.head.appendChild(title);

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/x-icon";
    favicon.href = "/assets/favicon.png"
    document.head.appendChild(favicon);
}

injectHeader();
injectNavbar();
injectFooter();
