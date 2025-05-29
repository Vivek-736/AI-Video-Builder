import { AssemblyAI } from "assemblyai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { audioFileUrl } = await req.json();
        
        const client = new AssemblyAI({
            apiKey: process.env.CAPTION_API as string,
        });
        
        const audioFile = audioFileUrl;
        
        const params = {
            audio: audioFile,
            speech_model: "universal" as const,
        };
        
        const transcript = await client.transcripts.transcribe(params);

        console.log(transcript.words);

        return NextResponse.json({ 'Result': transcript.words });
    } catch (error) {
        console.error("Error generating captions:", error);
        return NextResponse.json({ error: "Failed to generate captions" });
    }
}