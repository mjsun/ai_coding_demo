import { createServer, IncomingMessage, ServerResponse } from "http";

const PORT = 3008;

export function requestHandler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "GET" && req.url === "/api/home") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is a dummy response");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
}

const server = createServer(requestHandler);

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
  });
}

export default server;
