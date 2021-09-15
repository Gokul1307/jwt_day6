const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const connString = 'mongodb+srv://user1:gokul1234@cluster0.s8vlm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});