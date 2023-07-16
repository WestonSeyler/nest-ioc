import { Controller, Get, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Request() request: FastifyRequest,
    @Response({ passthrough: true }) reply: FastifyReply,
  ): string {
    reply.header('url', request.url);
    //需要send来结束 这一点express一样
    // reply.send('hello');
    return this.appService.getHello();
  }
}
