# react-sharing-components

Sample code for my article : [Sharing components between React and React Native](https://medium.com/@aakashns/sharing-components-between-react-and-react-native-f6ce3713658a)

Running the code
----------------

Make sure you have [Node JS](https://nodejs.org/en/) 4.0.0 or higher installed.

To run the web example, first run the following commands :
```bash
cd web
npm install -g webpack-dev-server
npm install
webpack-dev-server --progress --colors
```

Now navigate to [http://localhost:8080/](http://localhost:8080/)

To run Android, first start an android emulator (or connect your phone with [USB debugging enabled](http://developer.android.com/tools/device.html)), then run the following commands :
```bash
npm install -g react-native-cli
npm install
react-native run-android
```

To run iOS, open up [`ios/SampleApp.xcodeproj`](ios/SampleApp.xcodeproj) in XCode, and click Run (the big play button).


Important files
---------------

The base cross-platform component is defined in [`shared/Name.js`](shared/Name.js)

The web view is defined in [`web/NameViewWeb.js`](web/NameViewWeb.js)

The native view is defined in [`NameViewNative.js`](NameViewNative.js)

The sample native app is defined in [`SampleApp.js`](SampleApp.js), which is used in both [`index.android.js`](index.android.js) and [`index.ios.js`](index.ios.js)

The sample web app is defined in [`web/main.js`](web/main.js)
