const express = require('express');
const cors = require(`cors`)
const { codeRoute } = require('./routes/code.routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
  res.status(200).send("CodeConvertor")
})
app.use("/chatgpt",codeRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
