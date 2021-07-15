# react-test

This app will render a list of apps, displaying their name and status.
Please complete the following.

- The user should see some kind of indication that the app is loading while data is being fetched.
  - errors should be properly handled and displayed.

- The user should be able to manually refresh the data by clicking the refresh button.
  - A "refreshing" indicator should appear when a refresh is taking place.
  - Old data should remain visible until the new data has finished loading.
 
- The user should be able to filter the list of apps by their status color, only displaying apps that match the filter selections.
  - For example, if they only want to see apps with status of 'red', they would deselect 'green' and 'yellow'

- Performance enhancements
  - The app should efficiently make updates and only run computationally intensive tasks when necessary.

**Stretch Goal**
- have the app refresh its data automatically every 5 seconds.
