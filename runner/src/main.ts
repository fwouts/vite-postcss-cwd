import path from "path";
import * as vite from "vite";

const PORT = 3002;

async function main() {
  const root = path.resolve(__dirname, "..", "..", "app");
  const server = await vite.createServer({
    root,
  });
  await server.listen(PORT);
}

main().catch(console.error);
