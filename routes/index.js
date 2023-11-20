import { Router } from "express";
import commentRoutes from "./comment.js";
import eventRoutes from "./event.js";
import postRoutes from "./post.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/comment", commentRoutes);
router.use("/event", eventRoutes);
router.use("/post", postRoutes);
router.use("/users", usersRoutes);

export default router;
