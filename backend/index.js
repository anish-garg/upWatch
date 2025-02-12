const express = require('express');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

async function testMongoDBConnection() {
    try {
        await prisma.$connect();
        console.log("✅ MongoDB connected successfully via Prisma!");

        //   const testRecord = await prisma.yourModelName.findFirst();
        //   console.log("Sample Record:", testRecord);
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error);
    } finally {
        await prisma.$disconnect();
    }
}

testMongoDBConnection();

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
