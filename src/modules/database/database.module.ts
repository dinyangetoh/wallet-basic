import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MONGODB_DATABASE, MONGODB_HOST, MONGODB_PORT } from '../constants';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: MONGODB_HOST,
      port: MONGODB_PORT,
      database: MONGODB_DATABASE,
      autoLoadEntities: true,
    }),
  ],
  exports: [],
})
export class DatabaseModule {}
