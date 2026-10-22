
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to Node.js and Express Lab 1</h1>
    <p>Name: Amara Sri Vidya</p>
    <p>Registration Number: 252U1R9007</p>
    <p>Section: GEN AI - 2A</p>
    <p>GitHub: srividya1393-dev</p>
  `);
});

app.get("/about", (req, res) => {
    res.json({
        name: "Amara Sri Vidya",
        registrationNumber: "252U1R9007",
        section: "GEN AI - 2A",
        github: "srividya1393-dev"
    });
});

app.get("/time", (req, res) => {
    res.send(`Server time: ${new Date().toISOString()}`);
});

app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
