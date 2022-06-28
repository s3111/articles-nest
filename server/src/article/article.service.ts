import {Injectable} from '@nestjs/common';
import {QueryOrder} from '@mikro-orm/core';
import {InjectRepository} from '@mikro-orm/nestjs'
import {EntityRepository} from '@mikro-orm/mysql';
import {Article} from './article.entity';
import {IArticleRO, IArticlesRO} from './article.interface';

@Injectable()
export class ArticleService {

    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: EntityRepository<Article>,
    ) {
    }

    async findAll(query: any): Promise<IArticlesRO> {
        let limit = 5;
        let page = Number(query.page) || 1
        let offset = page * limit - limit
        let articles = [];
        let count = 0;
        if ('category' in query) {
            [articles, count] = await this.articleRepository.findAndCount({category: query.category}, {
                orderBy: {createdAt: QueryOrder.DESC},
                limit,
                offset
            });
        } else {
            [articles, count] = await this.articleRepository.findAndCount({}, {limit, offset});
        }
        return {articles, articlesCount: count};
    }

    async findOne(where): Promise<IArticleRO> {
        console.log(where)
        const article = await this.articleRepository.findOne({slug: where});
        return {article: article};
    }
}
