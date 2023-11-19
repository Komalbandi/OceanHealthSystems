// Use this file only as a guide for first steps using routes. Delete it when you have added your own route files.
// For a detailed explanation regarding each routes property, visit:
// https://mocks-server.org/docs/usage/routes

// users data
const NOTIFICATIONS = [
    {
      id: 1,
      header: "Potential covid infection",
      location: "Sydney facility",
      date: "03/09/2027 : 11:23:00",
      details:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id: 2,
      header: "Potential tuberculosis infection",
      location: "Sydney facility",
      date: "03/09/2027 : 11:23:00",
      details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis."
    },
    {
        id: 3,
        header: "Potential tuberculosis infection",
        location: "Sydney facility",
        date: "03/09/2027 : 11:23:00",
        details:"Reported by nurse mcnurse. Stafff Mr X is sent for skin test. Results pending. Contact: mcnurse@mcnursehealth.com"
      },
  ];
  
  module.exports = [
    {
      id: "get-notifications", // route id
      url: "/api/notifications", // url in express format
      method: "GET", // HTTP method
      variants: [
        {
          id: "success", // variant id
          type: "json", // variant handler id
          options: {
            status: 200, // status to send
            body: NOTIFICATIONS, // body to send
          },
        },
      ],
    },
  ];
  