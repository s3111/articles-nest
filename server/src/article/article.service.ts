import { Injectable } from '@nestjs/common';
import { QueryOrder, wrap } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs'
import { EntityRepository } from '@mikro-orm/mysql';

import { Article } from './article.entity';
import { IArticleRO, IArticlesRO} from './article.interface';
import { CreateArticleDto, CreateCommentDto } from './dto';

@Injectable()
export class ArticleService {

  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: EntityRepository<Article>,
  ) {}

  async findAll(query: any): Promise<IArticlesRO> {
    let offset = query.offset || 0;
    let limit = 10;
    let articles = [];
    let count = 0;
    if ('category' in query) {
      [articles, count] = await this.articleRepository.findAndCount({ category: query.category }, {orderBy: { createdAt: QueryOrder.DESC }, limit, offset });
    }else{
      [articles, count] = await this.articleRepository.findAndCount({},{limit, offset });
    }
    return { articles, articlesCount:count };
  }
}
