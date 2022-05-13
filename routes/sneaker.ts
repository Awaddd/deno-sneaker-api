import { Router } from "https://deno.land/x/oak/mod.ts";

//controller
import controller from "../controllers/sneakers.ts";

const router = new Router();

router.get("/sneakers", controller.getAll);
router.post("/sneakers/add", controller.add);
router.get("/sneakers/:id", controller.getByID);

export default router;
