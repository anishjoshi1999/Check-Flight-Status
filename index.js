const dotenv = require("dotenv");
dotenv.config();

//Different Flight Methods
const { fetchBuddhaFlightAvailability } = require("./Airlines/BuddleAirlines");

(async () => {
  let buddhaAirlinesFlightResult = await fetchBuddhaFlightAvailability();
  console.log(buddhaAirlinesFlightResult);
})();
