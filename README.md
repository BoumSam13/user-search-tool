# About Project

This project is a single page application built in React that returns a list of users from the jsonplaceholder API. 
Each user has different data displayed related to them and this information also comes from jsonplaceholder. In the
application, there is a search field that allows the functionality to filter for a user by their first name and last name and this will happen after typing into the field. The user can also click enter on the search bar or click the search icon to perform the filter for a user or users. 

## Available Scripts

In the project directory, you can run:

### `npm run start`

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

This starts up the test runner in the interactive watch mode which allows you to see what tests have passed and
which ones have failed.\

### `npm run test -- --coverage`

This command can be used to see if any files are missing test coverage and it will show what lines of code 
need tests written to cover them. 

## Challenges 

### Not able to export Cadence Labs logo

The mockup for this applications shows the Cadence Labs logo. I wasn't able to export it from the Adobe XD mockup
browser URL. In order to provide some sort of logo, I decided to use the React logo that is provided when creating a
new React application using create-react-app. 

### Infinite Scroll

I have never worked on infinite scroll functionality before but wanted to take on the challenge. I decided to use the InfiniteScroll component that React offers from the package `react-infinite-scroll-component`. I researched how to implement it and was successfully able to get it to work when first loading users on the page. When I was testing this functionality, I updated the users jsonplaceholder API to only return 2 users at a time. I also was able to trigger the scroll event on the InfiniteScroll component by increasing the height of each User component. When I scrolled down the page, another 2 users would get called from the API and load onto the page. One of the areas I struggled with was being able to trigger the scroll event after entering in a name in the search input field. After doing some research, I found that the scroll event can't always be triggered if an input field is focused. When I found this out, I updated the code to remove focus off of the input field when the function that loads more data from the InfiniteScroll component is called. I had one other challenge that I wasn't able to figure out and would have spent more time on it if I had more time. After I entered a name in the search input field and data loaded on the screen, then I tested out removing the name from the search input field. The API was called and it did return the first two users. However, when I scrolled down on the page, the scroll event wasn't triggered to load more data even though the focus was also removed from the input field at that point. Unfortunately, the infinite scroll can not be tested on the frontend in the current state. The users endpoint from the API only has 10 users to return and due to the height of each user on the frontend, you are able to see all users on one page when looking at them on a desktop. The way the infinite scroll can be tested is by changing the `limit` parameter in the `getAllUserData` and `getAllUsersByName` functions in the `api.js` file. Then add a height to the `.user` class of around `600px`. This will cause the first loaded users to exceed the height of the page in the browser and then when you scroll down the page, more users will be fetched from the API. 

### Unit Test

I was able to successfully set up unit tests and the coverage for unit tests in order to help me see what lines of code needed tests written for them. I was able to get all tests to pass but unfortunately, I could not figure out how to write a test for lines 45 and 50 in the App component. I spent a lot of time researching it but didn't have any luck. I do not have a lot of experience in writing unit tests but this is definitely an area I want to grow in. 

## Reasoning Behind Design Decisions

### Search Icon

I didn't update this design but if this was an application I was working on for a company, I would have suggested to the designer to remove the search icon if the functionality were to filter the data on change of the search input field. The reason for this is because if the search input field allows for filtering data when typing, then the call to the API is going to happen before the user would have time to click the search icon, which then the API would be called again. I left the design so that I could show in the code how I would implement the functionality of fetching the API when clicking the search icon.

### Design Below 428px

I decided to move the text for each user below the user album image up to 427px. The reason I decided to do this is because on smaller screen sizes, the text started to not fit on the screen. I decided to change the design up to 427px since the mockup starts at 428px. 

### Design 1025px and Above

I updated the design on screen size 1025px and higher since this a known breakpoint and I thought this would be a good start to allow for more than one user to be shown on a row. At this point, since there isn't one user per row and each user isn't directly next to or below each other, I decided to remove the every other background color for each user and add a border.  

## New Features

### Throttling on Search Field

I added throttling to the search field where when the user enters in a name, the API to call users filtered by that name isn't fetched until after the user has stopped typing for one second. This way the API isn't called for every key press in the search field. 

## Future Improvements

## Infinite Scroll

If I had more time, one future improvement I would work on is figuring out why the scroll event from the InfiniteScroll component won't trigger when scrolling down the page after removing text from the input search field. If I still wasn't able to figure this out after some time, I would try implementing the infinite scroll using the Intersection Observer API. If this was a project I was working on for a client and they didn't mind whether or not we implemented infinite scroll or a button that can be clicked to load more data, then I would choose the button if the client wanted the work done as quickly as possible.

## Unit Tests

Another future improvement I would add if I had more time would be to research more on finding the code needed for the unit test that needs coverage for lines 45 and 50 in the App component. 

## Albums

A third future improvement that I would add if I had more time would be to show a page of all the albums the user has once you click on a user on the main page. The albums page would contain each album with information about each album. 