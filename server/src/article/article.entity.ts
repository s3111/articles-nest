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
  description: string;

  @Property()
  body: string;

  @Property()
  likes: number;

  @Property()
  image: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();


}

export interface ArticleDTO extends EntityDTO<Article> {}
