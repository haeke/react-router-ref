
# React Router Reference

The motivation for this repository is to keep a reference to a pattern for defining routes to use in other projects.

# Usage 
1. Create a constants folder to consolidate the routes, each route represents a page in the application.
2. Modify the App component to use the Navigation component (created manually) and Router component provided by React Router.
3. Created the Navigation component with Link component provided by React Router. The Links point to all of the routes in the constants folder.
4. Programmatic Navigation using the Redirect component provided by React Router or use withRouter a HOC provided by React Router to redirect a user.

 - The Home component uses the Redirect component - a local state variable is used to keep track of when a user submits the form before redirecting to the Contact component.

 - The Contact component uses the withRouter component - it does not require a local state change. It uses the History library to redirect to the Landing page.

 - The Switch component provided by React Router gets wrapped around the Routes so that we can render the ErrorMessage component to be rendered whenever a user navigates to a route that does isn't defined in routes file.

 # Credits
  - Constants for routes and the Navigation component - taken from The Road to React with Firebase by Robin Wieruch.
  - Handling 404 pages in react router - https://tylermcginnis.com/react-router-handling-404-pages/
  - Programmatically Navigate with React Router - https://tylermcginnis.com/react-router-programmatically-navigate/
