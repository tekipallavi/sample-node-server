const { client } = require("./db/db.connection"); 
const express = require("express"); 
const cors = require('cors');
const bodyparser = require('body-parser');

const route1 = require("./routes/route1.js");
const setDetails = require("./controllers/controller1.js").setDetails;

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use('/route1', route1);


const startDB = async () => {
    try{
        await client.connect();
        console.log("Connected to MongoDB");
    }catch(err){
        console.log(err);
    }
}

startDB();

app.get('/', (req, res) => {
  setDetails({body: {name: 'test1', techStack: ['React'], experience: 2}}, {json: (data) => console.log(data)}, res);
  res.send('Hello World!');
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});