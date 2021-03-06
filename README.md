# README
## BeachBnb

### Ruby version: 2.5.1

## Technologies 
Ruby on Rails, React, Redux, AWS, Google Maps API, React Dates, HTML, SASS

## About
BeachBnb is an application clone of Airbnb (https://www.airbnb.com/). Because this project was built with a time constraint, I was unable to clone all of Airbnb's many features. Instead, I aimed to attain the basic listing, reservation, and reviews structure. This README consists of design, features, schema, and code details.

## Design 
BeachBnb was built using a Ruby on Rails backend with a React-Redux frontend. The google maps and react-dates APIs were incorporated for listing location and selecting date-ranges respectively. PostgreSQL was used for database storage. All photos are stored with AWS, and user authentication implements BCrypt and cookies for secure, persisting sessions. Styling was aimed to generally mimick Airbnb but with a beach theme and color scheme.

## Features 
* Homepage
* * Search form to filter by location, number of guests, and available dates
* * Access to popular cities index
* Nav Bar 
* * Sign in/ Log in modals 
* * When signed in, access to user profile, trips, and logout
* * BeachBnb logo link to homepage
* * Search bar
* Cities Index 
* * Popular cities with links to listings in the area
* Listings Index
* * Displays listing's photo and description
* * Link to listing showpage 
* Listing Show 
* * Listing and owner information
* * New reservation form 
* * Reviews 
* * Map detailing property location
* User Profile
* * User can edit profile and upload profile picture 
* * User can view owned listings
* * Includes link to creating a new listing
* User Trips 
* * Displays current and past reservations 
* * Link to creating a new review on old reservations
* * Link to reservation showpage on new reservations
* Reservation Show
* * Displays listing, dates, and number of guests of user's reservation
* * Link to listing showpage
* Search
* * Filter by location, number of guests, and or price 
* * Brings to search listing index
* Search Listing Index 
* * shows listings with link to showpage 
* * map detailing listings locations

## Schema 
### Tables 
* users 
* listings 
* reservations
* reviews 

## Homepage 
![Picture](https://user-images.githubusercontent.com/48730725/67796550-9d051c00-fa56-11e9-87c9-47a670109ac6.png)

## Homepage Popular Cities Index
![Picture](https://user-images.githubusercontent.com/48730725/67796584-aabaa180-fa56-11e9-8d2b-52ad358e5a8e.png)

## Search Code Snippet 
![Picture](https://user-images.githubusercontent.com/48730725/67796678-d178d800-fa56-11e9-8e5c-65400a71753d.png)





