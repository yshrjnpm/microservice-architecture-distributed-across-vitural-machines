const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/message", (req, res) => {
    res.json({ message: "USER LIST is from backend 1 " });
	res.json({ message: "but this message is from backend 2 " });
});

app.listen(4000, "192.168.77.129", () => {
    console.log("Backend 2 running on 192.168.77.129:4000");
});
