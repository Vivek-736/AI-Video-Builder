import textToSpeech from "@google-cloud/text-to-speech";
import { NextResponse } from "next/server";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/FirebaseConfig";

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function POST(req: Request) {
  const { text, id } = await req.json();
  const storageRef = ref(storage, 'ai-video-builder-files/' + id + '.mp3');

  const request = {
    input: { text: text },
    voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
    audioConfig: { audioEncoding: "MP3" },
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [response] = await client.synthesizeSpeech(request);
  const audioBuffer = Buffer.from(response.audioContent, 'binary');

  await uploadBytes(storageRef, audioBuffer, {contentType: 'audio/mp3'});

  const downloadURL = await getDownloadURL(storageRef);

  console.log(downloadURL);

  return NextResponse.json({ Result: downloadURL });
}