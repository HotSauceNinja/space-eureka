## Table of Contents

- [Brief](#brief)
- [SpaceX Rocket Patches](#spacex-rocket-patches)
  - [Short Description](#short-description)
  - [Technology Used](#technology-used)
  - [How to Run](#how-to-run)
  - [Viewing Instructions](#viewing-instructions)
  - [Project Wrap](#project-wrap)
    - [Wins](#wins)
    - [Known Bugs](#known-bugs)
    - [What I Learned](#what-i-learned)
    - [Possible Future Improvements](#possible-future-improvements)
  - [License](#license)
  - [Resources](#resources)

## Brief

Show a list of results pulled from a public API and displayed on a web page.

#### Acceptance Criteria

Given I view the page
When the application fetches data from an API
Then only the first 10 results should be displayed
And I should see a load more button

Given I view the page
And initial results have been loaded
When I press the load more button
Then the next N results should be loaded

#### Requirements 🛠:

- Don’t use any JavaScript/CSS frameworks
- Use Web Components if you’d like!
- README.md with instructions on how to run and view it
- Put it up on a git repo

---

## SpaceX Rocket Patches

![SpaceX Rocket Launch Patches](https://github.com/HotSauceNinja/space-eureka/blob/main/images/SpaceX_patches_demo.gif?raw=true)

### Short Description

The SpaceX Rocket Patches is a fictitional web page displaying past SpaceX rocket launches fetched from the [SpaceX-API](https://github.com/r-spacex/SpaceX-API) and showcased as a collection of retro collectible patches for children.

### Technology Used

Built using Vanilla JavaScript, HTML, CSS and Web Components.

### How to Run

Installation Steps:

- Clone or download the repo
- Open the project in your text editor

**_The app does not require installing any dependencies or getting any access tokens._**

### Viewing Instructions

The web application can be viewed in web browsers by navigating to the project index.html file and opening with Live Server.

### Project Wrap
#### Wins

- Successfully implemented a basic web component (event-card).
- Converted time and date from Unix to Coordinated Universal Time.
- Used the requested API information in a creative way.

#### Known Bugs

- The AMOS-6 patch image return the error: **'Failed to load resource: the server responded with a status of 403 ()"**. 
  To find out what happened I tried manually copying the link from the request and opening it in a new browser window, which displays the photo in the browser correctly.

  In investigating my console error message, the 403: Forbidden error is a server error, meaning the request was a legal request, but the server is refusing to respond to it. However, when checking the network tab, I noticed the image is requested twice, with the 403 response returned for the second request, while the first request is returning a 301: Moved Permanently error. 

  Looking closer at the request URL, my original request is directed to 'https://imgur.com/OADkTym.png', but when I follow this link I am automatically redirected to another URL: https://i.imgur.com/OADkTym.png which contains the image. 
  
  This is possibly the reason the image cannot be displayed, as there is no image at the initial URL. I am still looking into possible ways to fix this.

- When the Rocket Launch info section length exceeds 850 characters, the **text spills over the allocated div**. 

  In looking into possible solutions, I think an option would be to add:
```
  text-overflow: ellipsis;
  overflow: hidden;
```
  to the <code>li > div.content > div > p</code>, and to add a <code>:hover</code> with:
```
  overflow: visible;
  background-color: lightblue;
```

#### What I learned

- Basic use of Web Components.
- Refreshed my understanding of the DOM and DOM events.
- I need more practice using props and passing information down from parent to child, and managing state.

#### Possible future improvements

- Adding a filter to search for a particular rocket launch.
- Sorting the launches by date / name.
- Adding an event launch page which would open when the event card is selected. This would display further information - i.e. import the YouTube launch video, leverage the Wikipedia API to display further launch information.

### License

MIT

### Resources

The project includes the use of a [photo by Pixabay from Pexels](https://www.pexels.com/photo/aerospace-engineering-exploration-launch-34521/) and the (unofficial) [SpaceX-API](https://github.com/r-spacex/SpaceX-API).
