// * Wait for the DOM to load before fetching the data
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



  //* FUNCTIONS
  // async function to fetch the data and store it in the upcomingEventData array
  async function getEvents() {

    // fetch data and log it in the console
    try {
      const response = await window.fetch('https://api.spacexdata.com/v4/launches/upcoming')
      upcomingEventData = await response.json()
      console.log('Upcoming Launches : ', upcomingEventData)

      // Displaying list of events within the UL
      displayEvents()

      // if data cannot be fetched, log the error in the console
    } catch (err) {
      console.log('An error occured : ', err)
    }
  }


  // Function to display the data
  function displayEvents() {

    // storing to required number of displayed items into a new array with the length of numberOfResultsDisplayed
    const listToDisplay = upcomingEventData.slice(0, numberOfResultsDisplayed)
    // console.log('listToDisplay', listToDisplay)

    // mapping through the listToDisplay array and displaying the respective event cards for all array items
    const eventsHTML = listToDisplay.map(event => {
      return ` <event-card name=${event.name}></event-card>` // returns each event as string
    })

    // turn all the event data returned previously as string into HTML content
    eventList.innerHTML = eventsHTML
  }

  // Function to add more events
  function addMoreEvents() {
    // Each time the button is clicked increase the number of results displayed with 10
    numberOfResultsDisplayed = numberOfResultsDisplayed + 10
    // console.log('New number of events', numberOfResultsDisplayed)

    displayEvents()
  }


  //* FUNCTION CALLS
  // call the getEvents function to fetch the data
  getEvents()

  //When the addEventsButton is clicked, run function addMoreEvents
  addEventsButton.addEventListener('click', addMoreEvents)
}

window.addEventListener('DOMContentLoaded', init)