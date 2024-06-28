//typeorm.config.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          type: 'mssql',
          host: configService.get<string>('MSSQL_SERVER', 'localhost'),
          port: parseInt(configService.get<string>('MSSQL_PORT', '1433'), 10),
          username: configService.get<string>('MSSQL_USER', 'root'),
          password: configService.get<string>('MSSQL_PASSWORD', ''),
          database: configService.get<string>('MSSQL_DB_NAME', 'DB_NestRedis'),
          // entities: [],
          autoLoadEntities: true,
          synchronize: false, 
          // migrations: ['dist/migrations/*.js'],
          // cli: {
          //   migrationsDir: 'src/migrations',
          // },
          options: {
            encrypt: true,
            trustServerCertificate: true,
          },
        }),
        inject: [ConfigService],
      }),
  ],
})
export class CustomTypeOrmModule {}