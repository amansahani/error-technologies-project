# React Native App - Login/Register/Test/Context (SCREENS)
#TroubleShoot in case logins fails re run/open.reload the react native app as render server goes to sleep in 15 mins, it will work then.

This is a React Native app with four screens: login, register, test, and context. The app features a user interface (UI) developed with React Native, and a server which is already hosted on Render. The backend is in server folder and it is optional to run and is implemented in Node.js. The node js uses CockroachDB for data storage.

## Requirements

Before running the app, ensure you have the following prerequisites installed on your system:

- Node.js
- React Native CLI

## Installation

To get the app up and running, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
2. Install the project dependencies by running the following command in the client folder (root directory of react native prokect folder):
```
npm install
```

3. (Optional as server is already hosted on render) Create a .env file in the root directory of the server project. Add the following line to the .env file:
```
DATABASE_URL=YOUR_COCKROACHDB_URL
```
4. Optional: Start the backend server by running the following command in the backend directory:
```
npx prisma migrate
npm start
```
5. Start the React Native app by running the following command in the project directory:
```
npx react-native start

```
