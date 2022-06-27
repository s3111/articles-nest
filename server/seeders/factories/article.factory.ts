import { Factory } from '@mikro-orm/seeder';
import { faker } from '@faker-js/faker';
import { Article } from '../../src/article/article.entity';

export class ArticleFactory extends Factory<Article> {
    model = Article;

    definition(): Partial<Article> {
        return {
            slug: faker.lorem.slug(),
            title: faker.lorem.sentence(),
            description: faker.lorem.sentence(15),
            body: faker.lorem.paragraph( 4),
            //likes: faker.random.numeric()
            //categoryId: context.categoryId
            //createdAt: faker.date.between(),
            //updatedAt: faker.date.between(),
            //tagList: faker.lorem.words(),
            //author: context.author,

        };
    }
}