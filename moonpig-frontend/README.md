# Courtney's Moonpig Frontend Challenge 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Current State:
Unfortunately, the app is not fully functional due to issues with the API calls (even with the CORS proxy). When I run the project, none of the cards show up on the webpage and the page displays the title "Card List" and the text "No cards available.”.

If the app worked, it would display the list of cards with the card data being fetched from the API. The cards would have basic information such as card name and image. Furthermore, the user would be able to click on a card and see more information about the card.

## Features I would have liked to implement
I planned to add extra features to my app but I wasnt able to due to the issues with the API calls. Below is a list of all the features I would have added, had the app worked and also if I had more time to to work on it.
*	Search Functionality: Implement a search input field to filter cards based on user input.
*	Pagination: Integrate pagination to limit the number of cards displayed per page.
*	Responsive Images: I would have used the src Set attribute to provide different image sources based on screen sizes so that the images adapt to various devices and screen resolutions.
*	Animations: I would have applied CSS animations or transitions to enhance the user experience, if possible I would add a hover effect to enlarge an image of a card when users hover their mouse over it.
*	Styling Enhancements: initially I created a CSS file to enhance the visual appearance of the Card List page. I applied styles to achieve a light pink color for text and headers against a white background to improve readability and also keep in line with the moonpig colours, unfortunately, this file caused errors when running my project so I had to remove it.
*	Hosting on AWS S3: I would have set up an AWS S3 bucket to host the static website. This bucket would’ve been configured for public access.

## Testing:
If my app was fully functional and working as intended, I would test its behaviours on various aspects to ensure it meets requirements and provides a positive user experience. Here are some of the behaviours and functionalities I would test:
*	Rendering components: to ensure that React components render without errors.
*	API data loading: I would test how the app handles data loading from APIs, this will ensure that it handles API requests and responses correctly, including loading states, error handling, and successful data retrieval.
*	Card list display & details: I would test to confirm that the Card List component correctly displays a list of cards and their details/information.
*	Search functionality: if I had been able to implement search functionality, I would test it to see how the search input field interacts with the card list. To ensure that it filters cards based on user input and updates the UI accordingly.
*	Pagination: I would check that pagination controls function as intended so that users can navigate through the pages of cards effectively.
*	User Interactions: to confirm that user interactions, such as clicks and input changes, trigger the correct responses within the app.
*	Responsive design: I would test how components adapt to different screen sizes, to ensures that the app is responsive.
*	Animations: to ensure that animations occur when expected and that the UI remains visually appealing and user-friendly.
*	Error handling: test how the app handles errors, including API failures.
*	Unit and Integration tests: to ensure that the codebase is reliable and that components work as expected in isolation and when integrated.
*	Cross-Browser testing: to ensure that the app has broad compatibility and provides a consistent experience for users.
*	Performance testing: to identify and addresses performance bottlenecks.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

