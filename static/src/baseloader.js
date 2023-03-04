
/**
 * This script's only purpose is to inject static html templates and properties into any html document.
 *
 * Injected templates:
 *  - navbar.html -> #inject_navbar
 *  - footer.html -> #inject_footer
 *
 * Injected header properties:
 *  - Style: /style/base.css
 *  - Title: Awfulshirts
 *  - Favicon: /assets/favicon.png
 *
 */

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

injectNavbar();
injectFooter();
