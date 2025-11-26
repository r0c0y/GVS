import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "analytics.json");

export async function POST() {
    try {
        let data = { visitors: 0 };

        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, "utf-8");
            data = JSON.parse(fileContent);
        }

        data.visitors += 1;

        fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
