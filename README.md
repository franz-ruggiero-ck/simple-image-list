# React Native Demo For Simple Image List

This project was created using React Native CLI.  
The project implemented all items requested. 

## Technical Summary

- Built based on the latest React Framework 0.67
- It does not use any UI library for simplicity.
- Navigation is done using using [React Navigation](https://reactnavigation.org) v5, rather than latest v6, as requested
- Components have their styles in independent `styles.js` file in its directory.

### Use of Redux
I have used react-redux for storing global data for cross-component, and split UI and logics using react-thunk, implemented logics in actions mainly.  
This way is not much used nowadays, I think, as hooks are widely used. Using [React Query](https://react-query.tanstack.com) will be the better option.  

### Third party libraries
- @react-native-async-storage/async-storage
- react-native-fast-image
- redux, react-redux, redux-thunk

### Offline Support
For offline support, I stored and loaded all data from local storage using react-native-async-storage, after and before fetching data from api.  
And react-native-fast-image supports image caching, images can be shown in offline mode.
