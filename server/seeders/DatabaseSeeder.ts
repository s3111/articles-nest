import {Dictionary, EntityManager} from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { ArticleFactory } from './factories/article.factory'
import {Article} from "../src/article/article.entity";
import {CategoryFactory} from "./factories/category.factory";


export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager, context: Dictionary): Promise<void> {
    //new UserFactory(em).make(10);
    for(let i=0; i<10; i++){
      let articleTmp = new CategoryFactory(em).makeOne();
      new ArticleFactory(em).each(article => {
        article.category = articleTmp
      }).make(25);

    }
/*
      const articles: Article[] = new ArticleFactory(em).each(article => {
        article.category = articleTmp
      }).make(25);


    const books: Book[] = new BookFactory(orm.em).each(book => {
      book.author = new AuthorFactory(orm.em).makeOne();
    }).make(5);
  */
    /*
    new ArticleFactory(em).each(article => {
      article.authors.set(new UserFactory(em).make(5));
    }).make(5);

    */
  }


}


/*

const books: Book[] = new BookFactory(orm.em).each(book => {
    book.owners.set(new OwnerFactory(orm.em).make(5));
  }).make(5);

export class DatabaseSeeder extends Factory<User> {
  model = User;

  definition(faker: Faker): Partial<User> {
    return {
      username: faker.person.findName(),
      email: faker.internet.email(),
      password: faker.random.number(18, 99),
    };
  }
}
*/
/*
export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    // will get persisted automatically
    const user = em.create(User, {
      username: 'John Snow',
      email: 'snow@wall.st',
      password: 'dkgjcv'
    });

    // but if we would do `const author = new Author()` instead,
    // we would need to call `em.persist(author)` explicitly.
  }

}
*/