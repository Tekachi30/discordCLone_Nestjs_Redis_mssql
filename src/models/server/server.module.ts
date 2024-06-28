import { Module, forwardRef } from '@nestjs/common';
import { ServerService } from './server.service';
import { ServerController } from './server.controller';
import { v2 as cloudinary } from 'cloudinary';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Server } from './entities/server.entity';
import { RoleModule } from '../role/role.module';

@Module({
  
  imports: [TypeOrmModule.forFeature([Server]),
  forwardRef(() => RoleModule),
],
  controllers: [ServerController],
  providers: [ServerService,
    {
      provide: 'CLOUDINARY',
      useFactory: () => cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret:
          process.env.CLOUDINARY_API_SECRET,
      })
    }
  ],
})
export class ServerModule {}
