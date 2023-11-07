This is a React Native app that contains four screens: login, register, test, and context. The UI is developed from the project and the backend is in Node.js.

Requirements
Before running the app, you will need to have the following installed:

Node.js
React Native CLI
CockroachDB
Render
Installation
Clone the repository to your local machine.
Install the dependencies by running npm install in the project directory.
Create a .env file in the root directory of the project.
Add the following line to the .env file:
DATABASE_URL=YOUR_COCKROACHDB_URL
Replace YOUR_COCKROACHDB_URL with the URL of your CockroachDB database.
Start the backend server by running npm start in the backend directory.
Start the React Native app by running npx react-native start in the project directory.
Running the App
To run the app, simply open the project in your IDE and run the following command:

npx react-native start
The app will then start up and you will be able to see the login screen.

Note
If the registration fails the first time, it means the Render backend is sleeping. Simply try again and it should work.
