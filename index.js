const axios = require("axios");

// رابط سيرفرك في اتيرنوس (مثال)
const URL = "https://add.aternos.org/Workers-kmSA";

setInterval(async () => {
  try {
    await axios.get(URL);
    console.log("Ping sent to Aternos!");
  } catch (e) {
    console.error("Error:", e.message);
  }
}, 60000); // كل دقيقة
