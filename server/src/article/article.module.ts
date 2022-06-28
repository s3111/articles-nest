import {Module} from '@nestjs/common';
import {MikroOrmModule} from '@mikro-orm/nestjs'
import {ArticleController} from './article.controller';
import {Article} from './article.entity';
import {ArticleService} from './article.service';

@Module({
    controllers: [
        ArticleController,
    ],
    imports: [MikroOrmModule.forFeature({entities: [Article]})],
    providers: [ArticleService],
})
export class ArticleModule {
}
