// * Wait for the DOM to load before running any JavaScript
function init() {
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
  //* Async function to fetch the data and store it in the upcomingEventData array
  async function getEvents() {
    displayLoading()

    // Fetch data and log it in the console
    try {
      const response = await window.fetch('https://api.spacexdata.com/v4/launches/past')
      upcomingEventData = await response.json()

      // Display list of events within the ul
      displayEvents()

      // if data cannot be fetched, display error
    } catch (err) {
      displayError(err)
    }
  }

  //* Function to display page load
  function displayLoading() {
    eventList.innerHTML = '<li>...Loading the patches...</li>'
  }

  //* Function to display error
  function displayError(err) {
    console.log('Something went wrong : ', err)

    //Show an error message if the content cannot be loaded
    eventList.innerHTML = '<li>Something went wrong</li>'
    hideLoadButton()
  }

  //* Function to display the data
  function displayEvents() {

    // Store required number of displayed items into a new array with the length of numberOfResultsDisplayed
    const listToDisplay = upcomingEventData.slice(0, numberOfResultsDisplayed)

    // Map through the listToDisplay array and display the respective event cards for all array items
    const eventsHTML = listToDisplay.map(event => {

      // Convert date from unix to Coordinated Universal Time
      const unixTime = event.date_unix
      const date = new Date(unixTime * 1000).toUTCString()

      return ` 
        <event-card 
          name="${event.name}" 
          date="Launch Date: ${date}"
          patch="${event.links.patch.small}"
          details="${(event.details !== null) ? event.details : 'Follow the links below for more information about this launch, or visit again another time to check for updates.'}"
          wikipedia="${(event.links.wikipedia !== null) ? event.links.wikipedia : ''}"
          webcast="${(event.links.webcast !== null) ? event.links.webcast : ''}"
          success="${event.success}"
          failures="${(event.failures.length === 0) ? 'Successfuly launched!' : event.failures.map(failure => `Failure Reason: ${failure.reason}`)}"
        >
        </event-card>
      ` // This returns each event as a string
    }).join(' ')

    // Turn all the event data returned previously as string into HTML content
    eventList.innerHTML = eventsHTML
  }

  //* Function to increase number of events displayed by 10
  function addMoreEvents() {

    // When the addEventsButton is clicked, increase the number of results displayed with 10
    numberOfResultsDisplayed = numberOfResultsDisplayed + 10
    displayEvents()

    // If we reach the end of the event array, hide the button
    if (numberOfResultsDisplayed >= upcomingEventData.length) {
      hideLoadButton()
    }
  }

  //* Function to hide Load More Patches button
  function hideLoadButton() {
    addEventsButton.style.display = 'none'
  }


  //* FUNCTION CALLS
  // Call the getEvents function to fetch the data
  getEvents()

  //Listen to the addEventsButton, when it is clicked run function addMoreEvents
  addEventsButton.addEventListener('click', addMoreEvents)
}

window.addEventListener('DOMContentLoaded', init)