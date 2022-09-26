// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'angularproject1-5c150',
    appId: '1:147226440656:web:7f4f10df9112a178707fd5',
    databaseURL: 'https://angularproject1-5c150-default-rtdb.firebaseio.com',
    storageBucket: 'angularproject1-5c150.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCJ3RogrvhyuOBWZb-FxO8t_YOKj7zHKUo',
    authDomain: 'angularproject1-5c150.firebaseapp.com',
    messagingSenderId: '147226440656',
    measurementId: 'G-ERKF7RFL83',
  },
  production: false,
  baseUrl : "http://localhost:4000/api/auth"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
