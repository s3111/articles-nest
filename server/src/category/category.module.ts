import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs'
import {Category} from "./category.entity";
import {CategoryController} from "./category.controller";
import {CategoryService} from "./category.service";

@Module({
  controllers: [
    CategoryController,
  ],
  exports: [],
  imports: [MikroOrmModule.forFeature({ entities: [Category] })],
  providers: [CategoryService],
})
export class CategoryModule { }
