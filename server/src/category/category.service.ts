import {Injectable} from '@nestjs/common';
import {EntityRepository} from '@mikro-orm/core';
import {InjectRepository} from '@mikro-orm/nestjs'
import {Category} from "./category.entity";
import {ICategoriesRO} from "./category.interface";

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: EntityRepository<Category>,
    ) {
    }

    async findAll(): Promise<ICategoriesRO> {
        const categories = await this.categoryRepository.findAll();
        return {categories};
    }
}
