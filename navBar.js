
class NavBar extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement("template");
      template.innerHTML = `
        <link rel="stylesheet" href="style.css">
        
        <div class="nav" style="border-bottom:0.5px solid var(--border-color)">
            <div style="display: flex;align-items: center;gap: 1em;">
            <div class="menu-sidebar" style="padding: 0.5em;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </div>
                <!-- add extra logo -->
                <div class="logo">

                    <img class="logo-main" src="wlogo.png" alt="">
                    <span class="text w-title">worksetu</span>
                </div>
            </div>
            <input class="search" type="text" placeholder="Search...">
            <div style="display: flex;align-items: center;gap: 1em;">
                <div class="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <div class="profile-image-nav">
                    <img src="sender.png" alt="Me"
                        style=" width: 40px; height:40px; margin-right:2.5em; border-radius:0.5em; cursor:pointer;">
                </div>
            </div>
        </div>
      `;
  
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define("nav-bar", NavBar);
  