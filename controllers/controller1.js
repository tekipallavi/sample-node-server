const { db } = require("../db/db.connection.js");   
const getDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const details = await db.collection("sample").findOne({ _id: id });
        res.json(details);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const setDetails = async (req, res) => {
    // now creating a new entry with default _id
    try {
        const { name, techStack, experience } = req.body;
        const result = await db.collection("sample").insertOne(
            { name, techStack, experience }
        );
        console.log("inserted")
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getDetails, setDetails };    