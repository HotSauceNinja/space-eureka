// * Wait for the DOM to load before fetching the data
function init() {
  // confirm that the DOM has loaded
  console.log('DOM Loaded!')

  // * VARIABLES
  // declare an empty array to store the upcomingEventData objects
  let upcomingEventData = []

  // empty ul tag in index.html
  const eventList = document.querySelector('#events')

  // * async function to fetch the data and store it in the upcomingEventData array
  async function getEvents() {
    // fetch data and log it in the console
    try {
      const response = await window.fetch('https://api.spacexdata.com/v4/launches/upcoming')
      upcomingEventData = await response.json()
      console.log('Upcoming Launches : ', upcomingEventData)

      // if data cannot be fetched, log the error in the console
    } catch (err) {
      console.log('An error occured : ', err)
    }
  }

  // call the getEvents function to fetch the data
  getEvents()

  // Displaying the data
  function displayEvents() {
    console.log('Displaying launches : ', upcomingEventData)
    eventList.innerHTML = 'event list goes here'
  }

  displayEvents()
}

window.addEventListener('DOMContentLoaded', init)