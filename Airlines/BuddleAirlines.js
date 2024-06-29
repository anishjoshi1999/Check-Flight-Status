const axios = require("axios");
const https = require("https");
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false, // Ignore SSL issues (not recommended for production)
  }),
});
// Define the function to fetch flight availability
async function fetchBuddhaFlightAvailability() {
  const BUDDHA_AIRLINES_URI = `${process.env.BUDDHA_AIRLINES}`;

  try {
    const response = await axiosInstance.post(BUDDHA_AIRLINES_URI, {
      intAdult: 1,
      intChild: 0,
      strFlightDate: "01-Jul-2024",
      strNationality: "NP",
      strReturnDate: null,
      strSectorFrom: "KTM",
      strSectorTo: "DHI",
      strTripType: "O",
    });
    //response.data.data.outbound.flightsector.flightdetail
    return response.data.data.outbound.flightsector.flightdetail;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { fetchBuddhaFlightAvailability };
