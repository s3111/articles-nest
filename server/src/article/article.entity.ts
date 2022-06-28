import {Entity, EntityDTO, ManyToOne, PrimaryKey, Property} from '@mikro-orm/core';
import {Category} from "../category/category.entity";

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

    @Property({onUpdate: () => new Date()})
    updatedAt = new Date();


}

export interface ArticleDTO extends EntityDTO<Article> {
}
