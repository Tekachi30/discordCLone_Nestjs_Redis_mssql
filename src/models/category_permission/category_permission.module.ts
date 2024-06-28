import { Module } from '@nestjs/common';
import { CategoryPermissionService } from './category_permission.service';
import { CategoryPermissionController } from './category_permission.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryPermission } from './entities/category_permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryPermission]),],
  controllers: [CategoryPermissionController],
  providers: [CategoryPermissionService],
})
export class CategoryPermissionModule {}
