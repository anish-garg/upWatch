import { prisma } from "../config/prismaConfig.js"
import cron from 'node-cron';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

export const createUser = asyncHandler(async (req, res) => {
    try {

        let { email, password } = req.body;
        console.log(email);
        const userExists = await prisma.user.findUnique({ where: { email } });
        if (!userExists) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword || undefined
                }
            });
            const token = jwt.sign(
                { id: newUser.id, email },
                process.env.jwtSecret,
                {
                    expiresIn: "24h"
                }
            );
            console.log(token);
            res.send({
                message: "User registered successfully",
                user: newUser,
                token
            });
        } else res.status(201).send({ message: "User already registered" })
    } catch (error) {
        console.log(error);
    }
})

cron.schedule("*/1 * * * *", async () => {
    console.log("Running the cron job to monitor sites...");
    try {
        const users = await prisma.user.findMany({
            select: { id: true, email: true, monitors: true }
        });

        for (const user of users) {
            for (const monitor of user.monitors) {
                try {
                    const response = await axios.get(monitor.url);
                    // console.log(response.status);
                    if (response.status === 200) {
                        await prisma.monitor.update({
                            where: { id: monitor.id },
                            data: { status: "Up" }
                        });
                    } else {
                        await prisma.monitor.update({
                            where: { id: monitor.id },
                            data: { status: "Down" }
                        });
                    }
                    // console.log(`${monitor.url} is up, Status: ${response.status}`);
                } catch (error) {
                    console.log(error);
                }
            }
        }
    } catch (error) {
        console.error("Error fetching sites:", error);
    }
});

export const monitorSite = asyncHandler(async (req, res) => {
    let { id } = req.params;
    try {
        const user = await prisma.user.findUnique({
            where: { id: id },
            include: { monitors: true }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (!user.monitors || user.monitors.length === 0) {
            return res.status(404).json({ message: "No monitors found for this user" });
        }

        for (const monitor of user.monitors) {
            console.log(monitor.status);
        }

        res.json({ monitors: user.monitors });

    } catch (error) {
        console.error("Error fetching user monitors:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export const createMonitor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const monitor = await prisma.monitor.create({
            data: {
                ...req.body,
                userId: id,
            },
        });

        console.log(`${monitor.id} Monitor created successfully`);
        res.status(201).json({ message: "Monitor created successfully", monitor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export const userSignin = asyncHandler(async (req, res) => {
    let { email, password } = req.body;
    try {
        const userExists = await prisma.user.findUnique({ where: { email } });
        if (userExists) {
            const isPasswordValid = await bcrypt.compare(password, userExists.password);
            // console.log("Hashed Password: ", userExists.password);
            // console.log("Password: ", password);
            // console.log(isPasswordValid);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid email or password" });
            } else {
                const token = jwt.sign(
                    { id: userExists.id },
                    process.env.jwtSecret,
                    {
                        expiresIn: "24h"
                    }
                );
                console.log(token);
                res.json({
                    message: "Login successful",
                    userExists,
                    token
                });
            }
        } else {
            return res.status(402).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.log(error);
    }
})




