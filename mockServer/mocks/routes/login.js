module.exports = [
  {
    id: "get-login", // route id
    url: "/api/login", // url in express format
    method: ["GET","POST"], // HTTP method
    variants: [
      {
        id: "success", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: {
            'message':'success'
          }, // body to send
        },
      }
    ]
  }
];
