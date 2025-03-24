cron.schedule("*/3 * * * *", async () => {
    console.log("Running the cron job to monitor sites...");
    try {
        const users = await prisma.user.findMany({
            select: { id: true, email: true, monitors: true }
        });

        for (const user of users) {
            for (const monitor of user.monitors) {
                try {
                    const response = await axios.get(monitor.url);

                    // Handle specific status codes
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
                        sendEmail(
                            user.email,
                            `⚠️ Your website ${monitor.url} is down!`,
                            `Hello,\n\nYour website ${monitor.url} appears to be down. Please check and resolve the issue.\n\n- Upwatch`
                        );
                    }
                } catch (error) {
                    if (error.response) {
                        // Server responded with an error status (e.g., 404, 500)
                        const statusCode = error.response.status;
                        let statusText = "Down";

                        if (statusCode === 404) {
                            statusText = "Not Found";
                        } else if (statusCode >= 500) {
                            statusText = "Server Error";
                        }

                        await prisma.monitor.update({
                            where: { id: monitor.id },
                            data: { status: statusText }
                        });
                        // console.log(`${monitor.url} returned ${statusCode}, marking as ${statusText}`);
                    } else {
                        // Network error, timeout, DNS issue
                        await prisma.monitor.update({
                            where: { id: monitor.id },
                            data: { status: "Unknown" }
                        });
                        // console.log(`${monitor.url} request failed:`, error.message);
                    }

                    sendEmail(
                        user.email,
                        `⚠️ Your website ${monitor.url} is down!`,
                        `Hello,\n\nYour website ${monitor.url} appears to be down. Please check and resolve the issue.\n\n- Upwatch`
                    );
                }
            }
        }
    } catch (error) {
        console.error("Error fetching sites:", error);
    }
});