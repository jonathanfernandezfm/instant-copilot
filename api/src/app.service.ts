import { Injectable } from '@nestjs/common';
import { convertToCoreMessages, Message, streamText } from 'ai';
import { google } from '@ai-sdk/google';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello';
  }

  async generate(body: {messages: Message[]}): Promise<Response> {
    console.log(body)
    const result = await streamText({
      model: google('gemini-1.5-pro-latest'),
      messages: convertToCoreMessages(body.messages),
    });

    return result.toDataStreamResponse();
  }
}
