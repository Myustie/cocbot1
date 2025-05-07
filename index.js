const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// "images" klasörünü doğrudan web'te yayınla
app.use("/", express.static(path.join(__dirname, "images")));

app.listen(PORT, () => {
  console.log(`CDN sunucusu çalışıyor: http://localhost:${PORT}`);
});
