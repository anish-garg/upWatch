import { prisma } from "../config/prismaConfig.js"
import cron from 'node-cron';
import axios from 'axios';
import asyncHandler from 'express-async-handler'

export const createUser = asyncHandler(async (req, res) => {
    let { email } = req.body;
    console.log(email);
    const userExists = await prisma.user.findUnique({ where: { email: email } });
    if (!userExists) {
        const newUser = await prisma.user.create({
            data: req.body
        });
        res.send({
            message: "User registered successfully",
            user: newUser,
        });
    } else res.status(201).send({ message: "User already registered" })
})

cron.schedule("*/1 * * * *", async () => {
    console.log("Running the cron job to monitor sites...");
    try {
        const users = await prisma.user.findMany({
            include: { monitors: true } // Fetch associated monitors
        });

        for (const user of users) {
            for (const monitor of user.monitors) {
                try {
                    const response = await axios.get(monitor.url);
                    console.log(`${monitor.url} is up, Status: ${response.status}`);
                } catch (error) {
                    console.log(`${monitor.url} is down`);
                }
            }
        }
    } catch (error) {
        console.error("Error fetching sites:", error);
    }
});

export const createMonitor = asyncHandler(async (req, res) => {
    const { id } = req.params;  // User ID from URL
    try {
        const monitor = await prisma.monitor.create({
            data: {
                ...req.body,
                userId: id, // Assuming your Monitor model has a userId field
            },
        });

        console.log(`${monitor.id} Monitor created successfully`);
        res.status(201).json({ message: "Monitor created successfully", monitor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});