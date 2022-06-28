import {MiddlewareConsumer, Module, NestModule, OnModuleInit} from '@nestjs/common';
import {MikroORM} from '@mikro-orm/core';
import {MikroOrmMiddleware, MikroOrmModule} from '@mikro-orm/nestjs';

import {AppController} from './app.controller';
import {ArticleModule} from './article/article.module';
import {CategoryModule} from "./category/category.module";

@Module({
    controllers: [
        AppController,
    ],
    imports: [
        MikroOrmModule.forRoot(),
        ArticleModule,
        CategoryModule,
    ],
    providers: [],
})
export class AppModule implements NestModule, OnModuleInit {

    constructor(private readonly orm: MikroORM) {
    }

    async onModuleInit(): Promise<void> {
        await this.orm.getMigrator().up();
    }

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(MikroOrmMiddleware)
            .forRoutes('*');
    }

}
