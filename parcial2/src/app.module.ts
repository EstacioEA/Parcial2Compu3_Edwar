import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDirectory = dirname(fileURLToPath(import.meta.url));

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        () => ({
          appKey: 'YOUR_APP_KEY',
          appSecret: 'YOUR_APP_SECRET',
          serviceId: 'preparcial',
        }),
      ],
    }),
  TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) =>
                ({
                    type: configService.get<string>('DB_TYPE') ?? 'postgres',
                    host: configService.get<string>('DB_HOST') ?? 'localhost',
                    port: configService.get<number>('DB_PORT') ?? 5433,
                    username: configService.get<string>('DB_USERNAME') ?? 'postgres',
                    password: configService.get<string>('DB_PASSWORD') ?? 'postgres',
                    database: configService.get<string>('DB_DATABASE') ?? 'mydatabase',
                    entities: [currentDirectory + '/**/*.entity{.ts,.js}'],
                    synchronize: configService.get<boolean>('DB_SYNCHRONIZE') ?? true,
                }) as TypeOrmModuleOptions,
        }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
