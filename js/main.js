// In js/main.js

class CommonFooter extends HTMLElement {
  constructor() {
    super();
    // 1. Create a shadow root (the isolated "shadow" world)
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // 2. Fetch the footer's HTML content
    fetch('footer.html')
      .then(response => response.text())
      .then(html => {
        // 3. Inject the fetched HTML into the shadow root
        this.shadowRoot.innerHTML = html;
      })
      .catch(error => console.error('Error loading the footer:', error));
  }
}

// 4. Define the new custom element so the browser recognizes <common-footer>
customElements.define('common-footer', CommonFooter);