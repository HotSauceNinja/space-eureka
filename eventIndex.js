//todo   Wait for the DOM to load before fetching the data
function init() {

  //* confirm that the DOM has loaded
  console.log('DOM Loaded!')

  //* declare an empty array to store the upcomingLaunchesData objects
  let upcomingLaunchesData = []

  // * fetching the data and storing it in the upcomingLaunchesData array
  async function getData() {

    try {
      const response = await window.fetch('https://api.spacexdata.com/v4/launches/upcoming')
      upcomingLaunchesData = await response.json()
      console.log('Upcoming Launches : ', upcomingLaunchesData)

    } catch (err) {
      console.log('An error occured : ', err)
    }
  }



  getData()

}

window.addEventListener('DOMContentLoaded', init)