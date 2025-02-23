import express, { Router } from 'express';
import { createUser, monitorSite } from '../Controllers/userCntrl.js';

const router = Router();

router.post("/register", createUser);
router.get("/monitoring", monitorSite);

export { router as userRoute };