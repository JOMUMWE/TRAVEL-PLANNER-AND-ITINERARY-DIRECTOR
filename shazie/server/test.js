var Amadeus = require("amadeus");

var amadeus = new Amadeus({
  clientId: "uRN292AgotWGG0mxFNWyR81AEAOqcmup",
  clientSecret: "eFPH1f4VpRRU0260",
});

// body = JSON.stringify({
//   originDestinations: [
//     {
//       id: "1",
//       originLocationCode: "MIA",
//       destinationLocationCode: "ATL",
//       departureDateTime: {
//         date: "2024-04-01",
//       },
//     },
//   ],
//   travelers: [
//     {
//       id: "1",
//       travelerType: "ADULT",
//     },
//   ],
//   sources: ["GDS"],
// });

// amadeus.shopping.availability.flightAvailabilities
//   .post(body)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (response) {
//     console.error(response);
//   });

// amadeus.shopping.hotelOffersSearch
//   .get({
//     hotelIds: "RTPAR001",
//     adults: "2",
//     checkInDate: "2024-04-10",
//     checkOutDate: "2024-04-12",
//   })
//   .then(function (response) {
//     console.log(response.body);
//   })
//   .catch(function (response) {
//     console.error(response);
//   });

  // Find the cheapest flights from SYD to BKK
// amadeus.shopping.flightOffersSearch.get({
//   originLocationCode: 'SYD',
//   destinationLocationCode: 'BKK',
//   departureDate: '2024-04-01',
//   adults: '1'
// }).then(function (response) {
//   console.log(response.body);
// }).catch(function (response) {
//   console.error(response);
// })
amadeus.referenceData.locations.hotel
  .get({
    keyword: "PARI",
    subType: "HOTEL_GDS",
  })
  .then((response) => console.log(response))
  .catch((err) => console.error(err));