import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import cors from 'cors';
import { userRoute } from './Routes/userRoute.js';

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "https://up-watch-client.vercel.app", credentials: true }));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})

app.use("/api/user", userRoute);
