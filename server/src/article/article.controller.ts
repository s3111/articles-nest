import {Controller, Get, Param, Query} from '@nestjs/common';
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {IArticlesRO} from './article.interface';
import {ArticleService} from './article.service';

@ApiBearerAuth()
@ApiTags('articles')
@Controller('articles')
export class ArticleController {

    constructor(private readonly articleService: ArticleService) {
    }

    @ApiOperation({summary: 'Get all articles'})
    @ApiResponse({status: 200, description: 'Return all articles.'})
    @Get()
    async findAll(@Query() query): Promise<IArticlesRO> {
        return this.articleService.findAll(query);
    }

    @Get('/:value')
    findOne(@Param('value') value: string) {
        return this.articleService.findOne(value);
    }

}
