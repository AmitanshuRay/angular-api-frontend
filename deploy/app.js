let express = require('express');
let app = express();
app.get("/test", (req, resp) => {
  resp.send('<h1>Hello World</h1>');
});

app.use(express.static("./angular-server"));

app.listen(4200,()=>{
  console.log("Node server is running on http://localhost:4200");
});
