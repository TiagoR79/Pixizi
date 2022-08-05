
This repository is the MVP for a Project called Pixizi that is being developed for the UPSKILL program. 
The Goal is to create a Mobile Application fully hosted on AWS Cloud.

This project was developed and tested on a linux distribution using React-native CLI and Android Studio.
The app was not tested on ios.

## Installation

To Setup a development environment or to test the app using an emulator, use the following guide:

    https://reactnative.dev/docs/environment-setup

After installing Android Studio, use the following guide to setup a virtual device:

    - https://developer.android.com/studio/run/managing-avds

To start the app:

    - Install all the required dependencies using `npm install`;
    - On a terminal window, in the root folder run `npm start`, leave running - This will start Metro, a JavaScript bundler that ships with React Native
    - On a separate terminal window, run `npm run android`, this will build and deploy the app on the emulator;

The following libraries were used to simplify the development:

    - https://reactnavigation.org/;
    - https://reactnativeelements.com/.

## Cloud Integration

To Setup the AWS Cognito integration, an adaptation of the example of the following videos was used:

    - https://www.youtube.com/watch?v=8WZmIdXZe3Q - (Sign Up);
    - https://www.youtube.com/watch?v=yhD2XJVFQUg - (Log in);


Future steps:

    - Integrate AWS Amplify using the packages: `awsmobile-cli` and `aws-amplify-react-native`; 
