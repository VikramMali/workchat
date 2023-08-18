class MessageBox extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
        <link rel="stylesheet" href="style.css">
        
        <div class="row message">
          <img class="img" src="" alt="">
            <div class="column" style="gap: 0.3em;">
              <div class="row message-name-time">
              <span class="message-owner"></span>
              <span class="message-time"></span>
              </div>
              <span class="messagetext"></span>
          </div>
        </div>
      `;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  setMessageData(data) {
    const shadowRoot = this.shadowRoot;
    const ownerElement = shadowRoot.querySelector(".message-owner");
    const timeElement = shadowRoot.querySelector(".message-time");
    const textElement = shadowRoot.querySelector(".messagetext");
    const nameTime = shadowRoot.querySelector(".message-name-time");
    const imgElement = shadowRoot.querySelector(".img");
    const messageContainer = shadowRoot.querySelector(".message");

    ownerElement.textContent = data.owner || "";
    timeElement.textContent = data.time || "";
    textElement.textContent = data.text || "";
    imgElement.src = data.owner === "You" ? "sender.png" : "receiver.jpeg";

    if (data.owner === "You") {
      messageContainer.classList.add("sender");
      textElement.classList.add("sender-text");
      nameTime.classList.add("sender-name-time");
    } else {
      messageContainer.classList.add("receiver");
      textElement.classList.add("receiver-text");
    }
  }
}

customElements.define("message-box", MessageBox);
