## Table of Contents

- [Brief](#brief)
- [Space Events API](#space-events-api)
  - [Short Description](#short-description)
  - [Technology Used](#technology-used)
  - [How to Run](#how-to-run)
  - [Viewing Instructions](#viewing-instructions)

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

![SpaceX Rocket Launch Patches]()

### Short Description

The SpaceX Rocket Patches is a fictitional web page displaying past SpaceX Rocket launches fetched from the [SpaceX-API](https://github.com/r-spacex/SpaceX-API) and framed as retro collectible patches for children.

### Technology Used

Built using Vanilla JavaScript, HTML, CSS and Web Components.

### How to Run

Installation Steps:

- Clone or download the repo
- Open project in your text editor

**_The app does not require installing any dependencies or getting any access tokens._**

### Viewing Instructions

The web application can be viewed in web browsers by navigating to index.html and opening with Live Server.

# License

MIT
