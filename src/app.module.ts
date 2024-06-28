import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './config_connect/redis/redis.module';
import { UserModule } from './models/user/user.module';
import { MemberModule } from './models/member/member.module';
import { UserRoleModule } from './models/user_role/user_role.module';
import { ServerModule } from './models/server/server.module';
import { RoleModule } from './models/role/role.module';
import { RolePermissionModule } from './models/role_permission/role_permission.module';
import { ChannelModule } from './models/channel/channel.module';
import { PermissionsModule } from './models/permissions/permissions.module';
import { CategoryPermissionModule } from './models/category_permission/category_permission.module';
import { CategoryModule } from './models/category/category.module';
import { AuthModule } from './auth/auth.module';
import { CustomTypeOrmModule } from './config_connect/typeorm.config';
import { UuidModule } from './utils/uuid/uuid.module';

@Module({
  imports: [
    RedisModule,
    UserModule,
    MemberModule,
    UserRoleModule,
    ServerModule,
    RoleModule,
    RolePermissionModule,
    ChannelModule,
    PermissionsModule,
    CategoryPermissionModule,
    CategoryModule,
    AuthModule,
    CustomTypeOrmModule,
    UuidModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
