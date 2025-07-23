class Header {
  constructor() {
    this.root = document.querySelector("#app");
    this.renderTemplate();
  }

  renderTemplate() {
    this.root.innerHTML += /*html*/ `
            <header class="header">
                  <h1 class="header__title">
                       Contact List on JS
                  </h1>
                    <a class="header__link" target="_blank" href="https://github.com/Danilo666228/js-practice">GitHub Repository Link</a>
            </header>
            `;
  }
}

export default Header;
