export interface Tag {
  id: number
  label: string
}

export interface Article {
  id: number
  author: string
  cover: string
  createTime: string
  description: string
  content: string
  tags: Tag[]
  title: string
  updateTime: string
}
