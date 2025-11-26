import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ error: "Invalid email" }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), "subscribers.csv");
        const date = new Date().toISOString();
        const line = `${email},${date}\n`;

        // Create file with header if it doesn't exist
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "Email,Date\n");
        }

        // Append to file
        fs.appendFileSync(filePath, line);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Subscription error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
