import {Dictionary, EntityManager} from '@mikro-orm/core';
import {Seeder} from '@mikro-orm/seeder';
import {ArticleFactory} from './factories/article.factory'
import {CategoryFactory} from "./factories/category.factory";

export class DatabaseSeeder extends Seeder {

    async run(em: EntityManager, context: Dictionary): Promise<void> {
        for (let i = 0; i < 10; i++) {
            let articleTmp = new CategoryFactory(em).makeOne();
            new ArticleFactory(em).each(article => {
                article.category = articleTmp
            }).make(25);
        }
    }
}
