const template = document.createElement('template')
template.innerHTML = `
  <style>
    li {
      background-color: lightblue;
      width: 390px;
      height: 670px;
      margin: 10px;
      padding: 5px 0;
      border: 18px solid teal;
      border-radius: 25px;
      text-align: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
    }

    li.false {
      border: 18px solid sandybrown;
    }

    .success {
      background-color: red;
    }

    #card-header {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      // align-items: center;
      margin: 0;
      padding-bottom: 0;
    }

    .content {
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      // justify-content: flex-start;
      margin: 0 10px;
      padding: 0;
      // background-color: teal;
      height: 40%;
    }

    .about {
      // background-color:teal;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }

    h3 {
      color: darkslategray;
      font-size: 35px;
      font-weight: 800;
      margin:0;
      padding:0;
    }

    h4 {
      color: darkslategray;
      font-size: 20px;
      margin: 0 0 10px 0;
    }

    li > div.content > div > p  {
      margin: 0 0 5px 0;
      font-family: 'Roboto Condensed', sans-serif;
    }

    a {
      text-decoration: none;
      font-weight: 700;
      text-shadow: 0.5px 0.5px darkslategray;
      // color: darkslategray;
      color: dodgerblue;
    }

    a:hover {
      color: teal;
      font-weight: 900;
      text-shadow: 1px 1px darkteal;      
      // text-shadow: 1px 2px 10px red;

    }


  </style>

  <li>
    <div id="card-header">
      <h3></h3>
      <p id="event-date"></p>
      <img />
    </div>

    <div class="content">
        <strong>
          <h4>Rocket Launch info: </h4>
        </strong>
      <div class="about">
        <p id="event-details"></p>
        <p id="event-failures"></p>
        <div class="info-links">
          <a id="wikipedia-link"></a>
          &nbsp;&nbsp;
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
    this.shadowRoot.querySelector('#wikipedia-link').innerText = 'Wikipedia'

    // I also wanted to display the webcast but was unable to do so because of x frame bypass - Left a note about this in my README
    this.shadowRoot.querySelector('#youtube-link').href = this.getAttribute('webcast')
    this.shadowRoot.querySelector('#youtube-link').innerHTML = 'Youtube'

    // Assign true or false class name depending if launch was successful or not 
    this.shadowRoot.querySelector('li').classList.add(this.getAttribute('success'))

  }
}

window.customElements.define('event-card', EventCard)

