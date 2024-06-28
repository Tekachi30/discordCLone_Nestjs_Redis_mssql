import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryPermissionService } from './category_permission.service';
import { CreateCategoryPermissionDto } from './dto/create-category_permission.dto';
import { UpdateCategoryPermissionDto } from './dto/update-category_permission.dto';

@Controller('category-permission')
export class CategoryPermissionController {
  constructor(private readonly categoryPermissionService: CategoryPermissionService) {}

  @Post()
  create(@Body() createCategoryPermissionDto: CreateCategoryPermissionDto) {
    return this.categoryPermissionService.create(createCategoryPermissionDto);
  }

  @Get()
  findAll() {
    return this.categoryPermissionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryPermissionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryPermissionDto: UpdateCategoryPermissionDto) {
    return this.categoryPermissionService.update(+id, updateCategoryPermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryPermissionService.remove(+id);
  }
}
