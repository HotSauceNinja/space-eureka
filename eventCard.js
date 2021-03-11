const template = document.createElement('template')
template.innerHTML = `
  <style>
    li {
      background-color: lightblue;
      width: 350px;
      height: 650px;
      margin: 10px;
      padding: 5px 20px;
      border: 18px solid teal;
      border-radius: 25px;
      text-align: center;

      display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

    }

    .about {
      flex-grow: 2;
    }

    .content {
      justify-content: space-evenly;
    }

  </style>

  <li>
    <div>
      <h3></h3>
      <p id="event-date"></p>
      <img />
    </div>
    <div class="content">
      <div class="about">
        <strong>
          <p>More info: </p>
        </strong>
        <p id="event-details"></p>
        <p id="event-failures"></p>
        <div>
          <a id="wikipedia-link"></a>
        </div>
        <div>
          <a id="youtube-link"></a>
        </div>
      </div>
    </div>
  </li> 
`
class EventCard extends HTMLElement {
  constructor() {
    super()

    // Create shadow DOM
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
    this.shadowRoot.querySelector('#event-date').innerText = this.getAttribute('date')
    this.shadowRoot.querySelector('img').src = this.getAttribute('patch')
    this.shadowRoot.querySelector('#event-details').innerText = this.getAttribute('details')
    this.shadowRoot.querySelector('#event-failures').innerText = this.getAttribute('failures')
    this.shadowRoot.querySelector('#wikipedia-link').href = this.getAttribute('wikipedia')
    this.shadowRoot.querySelector('#wikipedia-link').innerText = 'Read more on Wikipedia'

    // I also wanted to display the webcast but was unable to do so because of x frame bypass - Left a note about this in my README
    this.shadowRoot.querySelector('#youtube-link').href = this.getAttribute('webcast')
    this.shadowRoot.querySelector('#youtube-link').innerHTML = 'Watch on Youtube'

  }
}

window.customElements.define('event-card', EventCard)

