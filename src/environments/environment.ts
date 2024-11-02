// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: true,
  // webURL: origin.includes('localhost') ? 'https://sasi-vcs-repo.onrender.com/' : origin,
  // masterURL: origin.includes('localhost') ? 'https://adonai-microservice.onrender.com/' : origin,
  // webURL: 'https://auth-service.vcs.plus/',
  // masterURL: 'https://adonai-serv.vcs.plus/',
  webURL: 'https://vcsauthservice-gqbbhpcvgnfjceas.canadacentral-01.azurewebsites.net/',
  masterURL: 'https://adonai-vcs-fmbqfgbudgendtfu.israelcentral-01.azurewebsites.net/',
  firebase: {
    apiKey: "***************************************",
    authDomain: "************************",
    projectId: "***********************************",
    storageBucket: "************************",
    messagingSenderId: "*********************",
    appId: "*******************************************",
    measurementId: "*********************",
  },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
