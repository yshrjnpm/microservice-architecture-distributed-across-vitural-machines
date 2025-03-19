const express = require("express");
const app = express();

app.use(express.static(__dirname)); // Serve static files

app.listen(8080, () => {
    console.log("Frontend server running at http://localhost:8080");
});
