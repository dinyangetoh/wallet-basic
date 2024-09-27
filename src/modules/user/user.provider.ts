import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { Provider } from '@nestjs/common';

export const userProviders: Provider[] = [
  {
    provide: 'USER',
    useFactory: async (datasource: DataSource) =>
      await datasource.getRepository(User),
  },
];
