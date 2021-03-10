
class EventCard extends HTMLElement {
  constructor() {
    super()

    // // Create shadow DOM
    // this.attachShadow({ mode: 'open' })
    // this.shadowRoot.appendChild()


    this.innerHTML = 'Testing event card'
  }
}

window.customElements.define('event-card', EventCard)