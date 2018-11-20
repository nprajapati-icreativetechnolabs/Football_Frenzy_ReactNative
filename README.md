# Project Title

Football Frenzy- React Native

### Getting Started
Clone this project
git clone < project-url.git >
Install NodeJS on your computer.

Install yarn on your computer

Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

Launch yarn command in a terminal opened in the project folder.
This command will look into the package.json file and install all the dependencies listed here.

Install react-native-cli globally on your computer
yarn global add react-native-cli

### Running the project
To run the application
Open the terminal/CMD go to the root project directory

For Android : react-native run-android
For IOS : react-native run-ios

To build APK for Android physical device (Debug) :
1 - mkdir android/app/src/main/assets
2 - react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
3 - react-native run-android


## Project Package Detail

Support: Android / iOS

This project template is an application skeleton for front-end application's using React and Redux.

In this repository we have use react navigation for tabbar,navigation drawer,common toolbar,created global styles and classes to avoid recursion of code.

components/
In this folder it will include all UI javascript files.It will include all ui components code.

assest/
Assets like image are include within this folder.

styles/
It will include attributes of the ui components where global properties of the components are written.

Util/
It will include reference of the stack navigator class that can access in whole project with import that class

data/
It will include all the application view data and screen names of navigation view.
