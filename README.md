## Installation Guide

### Requirements
- [Nodejs](https://nodejs.org/en/download)
- [Mongodb](https://www.mongodb.com/docs/manual/administration/install-community/)

Both should be installed and make sure mongodb is running.

```shell
git clone https://github.com/raviyadav17/ChitChat
cd ChitChat
```


Now install the dependencies
```shell
cd server
npm i express mongoose nodemon socket.io bcrypt cors dotenv
cd ..
cd public
yarn add axios styled-components react-router-dom react-toastify emoji-picker-react@3.5.1
```

We are almost done, Now just start the development server.

For Frontend.
```shell
cd public
yarn start
```

For Backend.

Open another terminal in folder, Also make sure mongodb is running in background.
```shell
cd server
npm start
```

Done! Now open localhost:3000 in your browser.
