import { chatSession } from "@/configs/AIModel";
import { NextResponse } from "next/server";

export async function POST (req: Request) {
    try {
        const { prompt } = await req.json();
        // console.log(prompt);

        const result = await chatSession.sendMessage(prompt)
        // console.log(result.response.text());

        return NextResponse.json({ "Result": JSON.parse(result.response.text()) })
    } catch (error) {
        return  NextResponse.json({"Error": error})
    }
}