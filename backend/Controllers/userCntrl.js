import { prisma } from "../config/prismaConfig.js"
import cron from 'node-cron';
import axios from 'axios';
import asyncHandler from 'express-async-handler'
import { log } from "console";

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

export const monitorSite = asyncHandler(async (req, res) => {
    try {
        // Start the cron job when this function is called
        cron.schedule('*/1 * * * *', async () => {
            console.log("Running the cron job to monitor sites...");
            try {
                const users = await prisma.user.findMany({ where: { NOT: [] } });
                users.forEach(user => {
                    user.sites.forEach(async (url) => {
                        try {
                            const response = await axios.get(url);
                            console.log(`${url} is up, Status: ${response.status}`);
                        } catch (error) {
                            console.log(`${url} is down`);
                        }
                    })
                })
            }
            catch (error) {
                console.log('Error fetching sites:', error);
            }
        });
        // Send only one response when the API is called
        res.send('Cron job started to monitor sites every minute');
    }
    catch (error) {
        console.log(error);
    }
})