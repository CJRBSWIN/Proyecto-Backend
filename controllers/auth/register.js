const { register } = require(".");
const db = require("../../configs/db");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/register", async (req, res) => {
    const {name, password} = req.body;

    try {
        await db.query(sql.unsafe`
        INSERT INTO users (name, password) VALUES (${name}, ${password})
        `);
    } catch (error){
        console.log(error);
    }
});

register()

module.exports = (db) => async (req, res, next) => {
    res.status(200).json({
        success: true,
    })
}