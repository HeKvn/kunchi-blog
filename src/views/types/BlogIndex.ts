import { Article } from './Base'

export type ArticleList = Omit<Article, 'content'>[]
