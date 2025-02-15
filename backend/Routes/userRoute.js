import express, { Router } from 'express';
import { createUser } from '../Controllers/userCntrl.js';

const router = Router();

router.post("/register", createUser);

export { router as userRoute };