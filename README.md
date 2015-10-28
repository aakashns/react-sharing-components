# react-sharing-components
Sharing components between React and React Native


Running the code
----------------

To run Android, first start an android emulator, then run the following commands :
```bash
nmp install -g react-native-cli
npm install
react-native run-android
```

To run the web example, first run the following commands :
```bash
cd web
npm install -g webpack-dev-server
npm install
webpack-dev-server --progress --colors
```

Now navigate to http://localhost:8080/


Important files
---------------

The base cross-platform component is defined in `shared/Name.js`

The web view is defined in `web/NameViewWeb.js`

The native view is defined in `NameViewNative.js`

The sample native app is defined in `SampleApp.js`, which is used in both `index.android.js` and `index.ios.js`

The sample web app is defined in `web/main.js`
