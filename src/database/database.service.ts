import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool, PoolConfig, QueryResult } from 'pg';

@Injectable()
export class DatabaseService {
  private pool: Pool;

  constructor(private configService: ConfigService) {
    const poolConfig: PoolConfig = {
      user: this.configService.get('DB_USER'),
      host: this.configService.get('DB_HOST'),
      database: this.configService.get('DB_DATABASE'),
      password: this.configService.get('DB_PASSWORD'),
      port: this.configService.get('DB_PORT'),
    };

    this.pool = new Pool(poolConfig);
  }

  async query(text: string, params?: any[]): Promise<QueryResult> {
    return this.pool.query(text, params);
  }

  end() {
    this.pool.end();
  }
}

