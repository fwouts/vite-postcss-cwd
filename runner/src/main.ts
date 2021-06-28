import path from "path";
import * as vite from "vite";

const PORT = 3002;

async function main() {
  const server = await vite.createServer({
    root: path.resolve(__dirname, "..", "..", "app"),
  });
  await server.listen(PORT);
}

main().catch(console.error);
