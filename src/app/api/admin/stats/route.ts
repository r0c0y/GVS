import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

export async function GET() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // Read Visitors
        const analyticsPath = path.join(process.cwd(), "analytics.json");
        let visitors = 0;
        if (fs.existsSync(analyticsPath)) {
            const data = JSON.parse(fs.readFileSync(analyticsPath, "utf-8"));
            visitors = data.visitors || 0;
        }

        // Read Subscribers
        const subscribersPath = path.join(process.cwd(), "subscribers.csv");
        let subscribers: { email: string; date: string }[] = [];

        if (fs.existsSync(subscribersPath)) {
            const content = fs.readFileSync(subscribersPath, "utf-8");
            const lines = content.split("\n").filter(line => line.trim() !== "");
            // Skip header
            const dataLines = lines.slice(1);

            subscribers = dataLines.map(line => {
                const [email, date] = line.split(",");
                return { email, date: date ? new Date(date).toLocaleString() : "N/A" };
            }).reverse(); // Show newest first
        }

        return NextResponse.json({
            stats: {
                visitors,
                subscribersCount: subscribers.length
            },
            subscribers
        });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
