const express = require("express");
const app = express();

app.set("port", process.env.PORT || 4020);
app.use(express.static(__dirname + "/dist"));

app.listen(app.get("port"), function() {
    console.log("Node app is running at localhost:" + app.get("port"));
});
