import { Factory } from '@mikro-orm/seeder';
import { faker } from '@faker-js/faker';
import {Category} from "../../src/category/category.entity";

export class CategoryFactory extends Factory<Category> {
    model = Category;

    definition(): Partial<Category> {
        let name = faker.lorem.word(2)
        return {
            name: name,
            slug: name.replace(' ','-'),
            description: faker.lorem.sentence(5),
        };
    }
}