const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 3333; 

// create a GET route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.listen(port, () => console.log(`Listening on port ${port}`)); 