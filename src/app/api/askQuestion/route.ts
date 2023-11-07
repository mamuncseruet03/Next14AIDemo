
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../../lib/queryApi";
import admin from "firebase-admin";
import { adminDB } from "../../../firebase/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";


type Data = {
  answer: string;
};



export async function POST(req: NextRequest) {
 
  const data = await req.json();

  if (!data.prompt) {
    NextResponse.json({ answer: "Please provide a prompt!" });
  }

  if (!data.chatId) {
    NextResponse.json({ answer: "Please provide valid Chat ID!" });
  }
  //? ChatGPT Query
  const response = await query(data.prompt, data.chatId, data.model);

  const message = {
    text: response || "ChatGPT was unable to find an answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar:
        "https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png",
    },
  };

  await adminDB
    .collection("users")
    .doc(data.session?.user?.email)
    .collection("chats")
    .doc(data.chatId)
    .collection("messages")
    .add(message);

    return NextResponse.json({ answer: message.text });
 

}