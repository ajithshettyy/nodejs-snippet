const http = require("http");
const PORT = 7777;

const app = (req, res) => {
  console.log(req);
  res.end("Simple server");
};

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
