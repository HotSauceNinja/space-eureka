// * Wait for the DOM to load before fetching the data
function init() {
  // confirm that the DOM has loaded
  console.log('DOM Loaded!')

  // * VARIABLES
  // declare an empty array to store the upcomingLaunchesData objects
  let upcomingLaunchesData = []

  // empty ul tag in index.html
  const eventList = document.querySelector('#events')

  // * async function to fetch the data and store it in the upcomingLaunchesData array
  async function getLaunches() {
    // fetch data and log it in the console
    try {
      const response = await window.fetch('https://api.spacexdata.com/v4/launches/upcoming')
      upcomingLaunchesData = await response.json()
      console.log('Upcoming Launches : ', upcomingLaunchesData)

      // if data cannot be fetched, log the error in the console
    } catch (err) {
      console.log('An error occured : ', err)
    }
  }

  // call the getLaunches function to fetch the data
  getLaunches()

  // Displaying the data
  function displayLaunches() {
    console.log('Displaying launches : ', upcomingLaunchesData)
    eventList.innerHTML = 'event list goes here'
  }

  displayLaunches()
}

window.addEventListener('DOMContentLoaded', init)