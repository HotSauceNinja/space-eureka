class EventCard extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = 'Testing event card'
  }
}

window.customElements.define('event-card', EventCard)