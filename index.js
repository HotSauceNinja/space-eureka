// * Wait for the DOM to load before running any JavaScript to make user experience smoother
function init() {
  // Confirm the DOM has loaded
  console.log('DOM Loaded!')

  // * VARIABLE DECLARATIONS
  // Declare an empty array to store the upcomingEventData objects
  let upcomingEventData = []

  // Access empty ul tag in index.html
  const eventList = document.querySelector('#events')

  // Store number of events listed on page in variable
  let numberOfResultsDisplayed = 10

  // Access the addEventsButton 
  const addEventsButton = document.querySelector('#addEventsButton')



  //* FUNCTION DECLARATIONS
  // async function to fetch the data and store it in the upcomingEventData array
  async function getEvents() {

    // fetch data and log it in the console
    try {
      const response = await window.fetch('https://api.spacexdata.com/v4/launches/')
      upcomingEventData = await response.json()
      console.log('Upcoming Launches : ', upcomingEventData)

      // Display list of events within the ul
      displayEvents()

      // if data cannot be fetched, log the error in the console
    } catch (err) {
      console.log('An error occured : ', err)
    }
  }


  // Function to display the data
  function displayEvents() {

    // Store required number of displayed items into a new array with the length of numberOfResultsDisplayed
    const listToDisplay = upcomingEventData.slice(0, numberOfResultsDisplayed)
    // console.log('listToDisplay', listToDisplay)

    // Map through the listToDisplay array and display the respective event cards for all array items
    const eventsHTML = listToDisplay.map(event => {
      // console.log('event.links.wikipedia', event.links.wikipedia)
      return ` 
        <event-card 
          name="${event.name}" 
          date="${event.date_utc}"
          patch="${event.links.patch.small}"
          details="${(event.details !== null) ? event.details : ''}"
          wikipedia="${(event.links.wikipedia !== null) ? event.links.wikipedia : ''}"
          success="${event.success}" 
          webcast="${(event.links.webcast !== null) ? event.links.webcast : ''}"
          failures="${(event.failures.length === 0) ?
          ''
          :
          event.failures.map(failure => {
            return `Failure Reason: ${failure.reason}`
          })
        }"
        >
        </event-card>
      ` // return each event as string
    }).join(' ')

    // Turn all the event data returned previously as string into HTML content
    eventList.innerHTML = eventsHTML
  }


  // Function to increase number of events displayed by 10
  function addMoreEvents() {

    // When the addEventsButton is clicked, increase the number of results displayed with 10
    numberOfResultsDisplayed = numberOfResultsDisplayed + 10
    displayEvents()

    // If we reach the end of the event array, hide the button
    if (numberOfResultsDisplayed >= upcomingEventData.length) {
      addEventsButton.style.display = 'none'
    }
  }


  //* FUNCTION CALLS
  // Call the getEvents function to fetch the data
  getEvents()

  //Listen to the addEventsButton, when it is clicked run function addMoreEvents
  addEventsButton.addEventListener('click', addMoreEvents)
}

window.addEventListener('DOMContentLoaded', init)