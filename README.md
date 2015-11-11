# Google Places
[Live link][heroku]

This is a simple one-page app using Backbone.js to display results from the google places library.
The app consists of an index view and an index item view. The index view is placed in a scrolling div
for readability. The index items link to their location on google maps.

[heroku]: http://peterbenavides.site/google_places/index.html
## app.js
The app.js file initializes a default google places service which allows for querying immediately on page load. The initializer checks to see if geolocation is enabled on the browser. If so, a call is placed to get the user's location. Because this requires permission, the call is asynchronous. The callback function provided sets the new google places service around the user's location.

# router.js
This file allows switching between various backbone views. However, as there is only one major view, this router doesn't do much.

# models/place.js, collections/places.js
These model and collection files allow backbone to create JS objects and groupings for places. Again, due to the simplicity of the app, these are mainly unused. They could, however, be extended easily to provide formatting functions for long titles or a comparator to sort places by price, closing time, or other attributes.

#views/place-item.js, views/places-index.js
These files contain the logic for displaying the list of place items. The place-item view is very simple, only needing a render function. The places-index view provides the main logic for swapping out index-item elements, providing the loading spinner, and querying for new places.

# Libraries
This app uses backbone.js mainly to organize views. The google places library is loaded to provide location data. jQuery is used for dom manipulation. Additionally, a font-awesome icon is used for the spinner.
