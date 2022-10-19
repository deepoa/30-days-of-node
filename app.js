// Node history how it is started

//What is near real time data?
//Real-time data is data that's collected, processed, and analyzed on a continual basis. It's information that's available for use immediately after being generated. Near real-time data is a snapshot of historical data, so teams are left viewing a situation as it existed in the recent past rather than as it is now.

var http = require("http");

var host = "127.0.0.1";
var port = 4000;
var fs = require("fs");

var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  // fs.readFile("index.html", (err, data) => {
  //checking for errors

  let jsonResponse = {
    status: 200,
    message: "successfull",
    result: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    code: 2000,
  };
  console.log(`server is running`);
  res.end(JSON.stringify(jsonResponse));

  // fs.readFile("index.pdf", (err, data) => {
  //   if (err) {
  //     res.json({ status: "err", message: err.message });
  //   } else {
  //     fs.write(data);
  //     res.end();
  //   }
  // });
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
