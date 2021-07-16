# react-test

This app will render a list of apps, displaying their name and status.

Some boilerplate code is provided, but its not required as long as one or more custom hooks are implemented.

Please complete the following:

- Use the getApps function from api.js to fetch and display the app list inside of index.js. 
  - The user should see some kind of indication that the app is loading while data is being fetched.
  - errors should be properly handled and displayed.

- A "refreshing" indicator should appear only when a refresh is taking place.
  - Old data should remain visible until the new data has finished loading.
 
- The user should be able to filter the list of apps by their status color, only displaying apps that match the filter selections.
  - For example, if they only want to see apps with status of 'red', they would deselect 'green' and 'yellow'

- Performance enhancements
  - The app should efficiently make updates and only run computationally intensive tasks when necessary.

**Stretch Goal**
- have the app refresh its data every few seconds.
