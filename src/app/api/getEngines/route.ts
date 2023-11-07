// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openai from "../../../lib/chatGPT";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

  type Option = {
    value: string;
    label: string;
  };
  
  type Data = {
    modelOptions: Option[];
  };
  
  const models = await openai.models.list();
  console.log(models);
  for await (const model of models) {
    console.log("model");
    console.log(model);
  }

  const modelOptions = models.data.map((model: { id: any; }) => ({
    value: model.id,
    label: model.id,
  }));
 
  return NextResponse.json({ modelOptions });
}
