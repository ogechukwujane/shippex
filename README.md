# SHIPPEX

This project was crafted using

- React Native cli and
- Typescript

## Installation:

To get the app running on your emulator, firstly

- Clone the repository and navigate into the project directory,

  ```
  cd project-directory-name
  ```

- Run yarn to install all dependency used,

  ```
  yarn
  ```

- For MacBook users, Run the code below to install all dependency used on ios,

  ```
  cd ios
  pod install
  cd ..
  ```

- To get the app running on your emulator, run the yarn command below and enter `i` to open on ios emulator or `a` to open on android emulator.

  ```
  yarn run start
  ```

The app is up and running.

## Folder Structure:

All the working file of this app can be found in the `src` folder.

- The `baseUrl(folder)` where the app base url was stated.

- The `assets(folder)` which consist of Icon(file) and image(file), It can be found outside the `src(folder)`.

- The `component(folder)` which consist of all reusable component used around the app.

- The `navigation(folder)` which consist of the routing setup.

- The `screens(folder)` which consist of all the screens of the app.

- The `store(folder)` which contains all the api configurations and setup.

- The `utils(folder)` which contains all reusable functions used on the app.

` ** All file within any folder must be exported through it's respective index file **`

## Login Credentials

Login using the credentials bellow.

          * email: 'test@brandimic.com',
          * password: 'testy123@',
