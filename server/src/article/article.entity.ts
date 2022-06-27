import { ArrayType, Collection, Entity, EntityDTO, ManyToOne, OneToMany, PrimaryKey, Property, wrap } from '@mikro-orm/core';
//import slug from 'slug';
import {Category} from "../category/category.entity";

//import { User } from '../user/user.entity';
//import { Comment } from './comment.entity';

@Entity()
export class Article {

  @PrimaryKey()
  id: number;

  @ManyToOne()
  category: Category;

  @Property()
  slug: string;

  @Property()
  title: string;

  @Property()
  description = '';

  @Property()
  body = '';

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  //@Property({ type: ArrayType })
  //categoryList: string[] = [];

  @Property()
  likes = 0;
/*
  constructor(title: string, description: string, body: string) {
    this.title = title;
    this.description = description;
    this.body = body;
    this.slug = slug(title, { lower: true }) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
  }
*/
  /*
  toJSON() {
    const o = wrap<Article>(this).toObject() as ArticleDTO;
    return o;
  }
*/
}

export interface ArticleDTO extends EntityDTO<Article> {}
