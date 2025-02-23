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

export const monitorSite = asyncHandler(async (req, res) => {
    try {
        cron.schedule('*/1 * * * *', async () => {
            try {
                const response = await axios.get('https://github.com');
                res.send(response.status === 200).send('Site is up');
            } catch (error) {
                res.send('Site is down');
            }
        });
    }
    catch (error) {
        console.log(error);
    }
})