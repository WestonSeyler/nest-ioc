import { Injectable, Inject } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  async hasGet(key: string) {
    return await this.redisClient.hGetAll(key);
  }

  async hasSet(key: string, obj: Record<string, any>, ttl?: number) {
    // return await this.redisClient.hSet(key, value);
    for (const name in obj) {
      await this.redisClient.hSet(key, name, obj[name]);
    }

    if (ttl) {
      await this.redisClient.expire(key, ttl);
    }
  }
}
