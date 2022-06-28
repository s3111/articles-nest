import {Entity, PrimaryKey, Property} from '@mikro-orm/core';

@Entity()
export class Category {

    @PrimaryKey()
    id: number;

    @Property()
    name: string;

    @Property()
    slug: string;

    @Property()
    description: string;

}
