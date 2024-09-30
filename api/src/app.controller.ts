import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { convertToCoreMessages, Message, streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('generate')
  async generate(@Body() body: {messages: Message[]}, @Res() res: Response) {
    const systemMessage: Message = {
      id: 'system',
      content: 'You will act as a text enhancer assistant. You will respond JUST with the improved and corrected message. The user message is:',
      role: 'system',
    };

    const result = await streamText({
      model: google('gemini-1.5-pro-latest'),
      messages: convertToCoreMessages([systemMessage, ...body.messages]),
    });

    result.pipeDataStreamToResponse(res);
  }
}
