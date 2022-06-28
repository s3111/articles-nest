import {Factory} from '@mikro-orm/seeder';
import {faker} from '@faker-js/faker';
import {Article} from '../../src/article/article.entity';

export class ArticleFactory extends Factory<Article> {
    model = Article;

    definition(): Partial<Article> {
        return {
            slug: faker.lorem.slug(),
            title: faker.lorem.sentence(),
            description: faker.lorem.sentence(15),
            body: faker.lorem.paragraph(4),
            likes: Number(Math.floor(Math.random() * 2000000)),
            image: faker.image.city(800, 600, true)
        };
    }
}