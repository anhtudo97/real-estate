import express from "express";
import { getLeasePayments, getLeases } from "../controllers/lease.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", authMiddleware(["manager", "tenant"]), getLeases);
router.get(
    "/:id/payments",
    authMiddleware(["manager", "tenant"]),
    getLeasePayments
);

export default router;
