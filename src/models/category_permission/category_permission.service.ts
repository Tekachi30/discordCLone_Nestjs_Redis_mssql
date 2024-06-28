import { Injectable } from '@nestjs/common';
import { CreateCategoryPermissionDto } from './dto/create-category_permission.dto';
import { UpdateCategoryPermissionDto } from './dto/update-category_permission.dto';

@Injectable()
export class CategoryPermissionService {
  create(createCategoryPermissionDto: CreateCategoryPermissionDto) {
    return 'This action adds a new categoryPermission';
  }

  findAll() {
    return `This action returns all categoryPermission`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryPermission`;
  }

  update(id: number, updateCategoryPermissionDto: UpdateCategoryPermissionDto) {
    return `This action updates a #${id} categoryPermission`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryPermission`;
  }
}
