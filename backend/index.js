import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import cors from 'cors';
import { userRoute } from './Routes/userRoute.js';

const app = express();

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// async function testMongoDBConnection() {
//     try {
//         await prisma.$connect();
//         console.log("✅ MongoDB connected successfully via Prisma!");

//         //   const testRecord = await prisma.yourModelName.findFirst();
//         //   console.log("Sample Record:", testRecord);
//     } catch (error) {
//         console.error("❌ Failed to connect to MongoDB:", error);
//         // } finally {
//         //     await prisma.$disconnect();
//     }
// }

// testMongoDBConnection();

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})

app.use("/api/user", userRoute);
