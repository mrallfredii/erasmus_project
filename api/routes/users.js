import express from "express";

const router = express.Router();

router.get("/test", (req,res)=> {
    res.send("working");
});

export default router;