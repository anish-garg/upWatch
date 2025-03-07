import express, { Router } from 'express';
import { createUser, monitorSite, createMonitor, userSignin } from '../Controllers/userCntrl.js';

const router = Router();

router.post("/register", createUser);
router.get("/monitoring/:id", monitorSite);
router.post("/monitoring/:id/createMonitor", createMonitor);
router.post("/login", userSignin);

export { router as userRoute };