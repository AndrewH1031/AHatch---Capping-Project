Please note: this project was cloned from its original private repository with full permissions from its other authors.

Original date of completion: __12/12/23__

Website and ride sharing service hosted until __8/17/2024__

# CS-Capping

## FoxRide

Providing Marist students who lack a means of travel, a secure way of finding one through hosting and sharing rides with their fellow students.

### [Project Demo Link](https://cs-capping.web.app/views/home.html)

<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/FoxRide/public/images/new_foxridelogo.png" width="700" alt="FoxRide Logo">

## Contents
- [Website Previews](#website-previews)
	- [Home Preview](#home-preview)
	- [Trip View Preview](#trip-view-preview)
	- [Trip Request View Preview](#trip-request-view-preview)
	- [Trip Host View Preview](#trip-host-view-preview)
	- [Login Signup Preview](#login-signup)
	- [Profile Preview](#profile-preview)  
- [Website Preview Explanations](#website-preview-explanations)
- [Website Features](#website-features)
	- [Website Components](#website-components)
	- [Server Components](#server-components)
- [Applications Used](#applications-used)
- [APIs Used](#apis-used)
- [Authors](#authors)

## Website Previews

### Home Preview

<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/documentation%20images/Home.png" width="1000" alt="Home Preview">

### Trip View Preview

<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/documentation%20images/TripView.png" width="1000" alt="Trip View Preview">

### Trip Request View Preview

<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/documentation%20images/CreateRequest.png" width="1000" alt="Trip Request View Preview">

### Trip Host View Preview

<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/documentation%20images/CreateTrip.png" width="1000" alt="Trip Host View Preview">

### Login / Signup Preview

<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/documentation%20images/Login.png" width="1000" alt="Login Preview">
<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/documentation%20images/SignUp.png" width="1000" alt="Signup Preview">

### Profile Preview

<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/documentation%20images/Profile.png" width="1000" alt="Profile Preview">
<img src="https://github.com/JosephLoRusso/CS-Capping/blob/main/documentation%20images/DriverRegistry.png" width="1000" alt="Driver Preview">

## Website Preview Explanations

`FoxRide/views/`

### Home

- `home.html` - The objective of  the website's homepage is to attract visitors' attention and encourage them to explore more of the website app.

### Trip View

- `tripView.html` - An overview of all ongoing trips, detailing where they’re starting, ending, what time they’re occurring, and the number of passengers.

### Trip Request View

- `tripRequest.html` - Grants the user the ability to request a trip to occur at a specific time and location.

### Trip Host View

- `tripHost.html` - Grants the user the ability to plan and host a trip.

### Login Signup

- `login.html` - Allows registered users to gain access to their accounts.
- `signup.html` - Grants the user a way to create their own account.

### Profile 

- `profile.html` - Displays all user account data.
- `verifyDriver.html` - Checks the eligibility of registered users who are capable of being drivers

## Website Features

### Website Components

`FoxRide/public/js/`

- `Script.js` - Provides functionality to the login/signup and other html pages that are linked to it.
- `sqlServer.js` - Inserts and queries data from the FoxRide database.
- `tripToggle.js` - Links the trip web pages' location search bar to the Google Maps API.

### Server Components

`server/`

- `index.js` - Serves as the entry point for the module, typically used for importing and exporting various functionalities from the module.
- `server.js` - Initializes and configures the server for the web application, setting up routes, middleware, and any other necessary configurations.

`server/controller/`

- `postController.js` - Manages the control flow for handling HTTP requests related to posts in a web application.
- `userController.js` - Handles the logic and flow for processing HTTP requests related to users in a web application.

`server/model/`

- `post.js` - Defines the data model and schema for a post in the application, specifying the structure and characteristics of post objects.
- `user.js` -  Defines the data model and schema for a user in the application, specifying the structure and characteristics of user objects.

`server/route/`

- `postRoutes.js` - Defines the routes and their corresponding handlers for post-related HTTP endpoints in the web application.
- `userRoutes.js` - Defines the routes and their corresponding handlers for user-related HTTP endpoints in the web application.

`server/service/`

- `postService.js` - Contains the business logic and functions responsible for handling operations related to posts, such as creation, retrieval, and deletion.
- `userService.js` - Contains the business logic and functions responsible for handling operations related to users, such as user creation, authentication, and profile management.

## Applications Used

|                 Name                     | Description                                                                                    |
| :--------------------------------------: | ---------------------------------------------------------------------------------------------- |
|            Google Firebase               | Google Firebase is a platform for the development, hosting, and building of applications       |
|          Google Cloud Platform           | Offers a number of useful development services, such as data storage and analysis              |
|               NodeJS                     | An open-source JavaScript runtime environment for usage within a web browser                   |

## APIs Used

- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview)
- [Google Cloud API](https://cloud.google.com/apis/#section-1)

## Authors

Joseph LoRusso,
Andrew Riotto,
Samuel Viola,
Saeed Abdilahi,
Andrew Hatch


