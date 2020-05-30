// Using Oak middleware
import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(({ response }) => {
  response.body = "Hello World";
});

const port = 5000;

console.log(`App listen at port: ${port}`);
await app.listen({ port });
