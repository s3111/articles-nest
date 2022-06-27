import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
} from '@nestjs/swagger';
import {CategoryService} from "./category.service";
import {ICategoriesRO} from "./category.interface";


@Controller('categories')
export class CategoryController {

  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<ICategoriesRO> {
    return this.categoryService.findAll();
  }
}
