// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment =  {
  production: false,
  
  // yours server
  dataURL: "http://localhost:8080",
  rewardURL: "http://localhost:9090",

  multiURL: [{"id":1, "name":"laveena" ,"url": "http://localhost:2727" },
  {"id":2, "name":"nikita" , "url" :"http://localhost:7700"},
  {"id":3, "name":"piyush" , "url" :"http://localhost:1111"},
  {"id":4, "name":"prashant" , "url" :"http://localhost:3000"},
  {"id":5, "name":"sonakshi" , "url" :"http://localhost:1011"},
  {"id":6, "name":"suhasee" , "url" :"http://localhost:2121"}
]


};


  

  

  // rewardURL: "http://localhost:1010",

  
  // rewardURL: "http://localhost:9090",
  
/*
 * For easier debugging in development mode, you can import the following file

 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
