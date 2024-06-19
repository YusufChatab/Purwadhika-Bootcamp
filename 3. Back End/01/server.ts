import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8000;

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/api" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });

      res.write("Hello This is my first API");

      res.end();
    }
  }
);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
