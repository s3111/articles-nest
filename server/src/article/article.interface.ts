import { ArticleDTO } from './article.entity';

export interface IArticleRO {
  article: ArticleDTO;
}

export interface IArticlesRO {
  articles: ArticleDTO[];
  articlesCount: number;
}
