import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import sneakerRouter from "./routes/sneaker.ts";

const application = new Application();
const port: number = 8080;

const router = new Router();

router.get("/", ({ response }: { response: any }) => {
  response.body = {
    message: "Rest API built with DENO",
  };
});

application.use(router.routes());
application.use(router.allowedMethods());

application.use(sneakerRouter.routes());
application.use(sneakerRouter.allowedMethods());

application.addEventListener("listen", ({ secure, hostname, port }) => {
  const protocol = secure ? "https://" : "http://";
  const url = `${protocol}${hostname ?? "localhost"}:${port}`;
  console.log(`listening on: ${port}`);
});

console.log("running on port ", port);
await application.listen({ port });
