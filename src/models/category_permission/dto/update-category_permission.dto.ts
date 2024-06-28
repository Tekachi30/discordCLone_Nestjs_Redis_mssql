import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryPermissionDto } from './create-category_permission.dto';

export class UpdateCategoryPermissionDto extends PartialType(CreateCategoryPermissionDto) {}
