import openai from "./chatGPT";

const query = async (prompt: string, chatId: string, model: string) => {



  const { data: chatCompletion, response: raw } = await openai.chat.completions
  .create({ messages: [{ role: 'user', content: prompt }], model: model })
  .withResponse();
console.log(raw.headers.get('X-My-Header'));
console.log(chatCompletion.choices);
console.log(chatCompletion.choices[0].message.content);



  // const stream = await openai.beta.chat.completions.stream({
  //   model: model,
  //   messages: [{ role: 'user', content: prompt }],
  //   stream: true,
  // });

  // stream.on('content', (delta, snapshot) => {
  //   process.stdout.write(delta);
  // });

  // // or, equivalently:
  // for await (const chunk of stream) {
  //   process.stdout.write(chunk.choices[0]?.delta?.content || '');
  // }

  // const chatCompletion = await stream.finalChatCompletion();
   return chatCompletion.choices[0].message.content
};

export default query;
