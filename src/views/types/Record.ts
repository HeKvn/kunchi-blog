import { Tag } from './Base'

export interface RecordObj {
  createTime: string
  id: number
  tags: Tag[]
  title: string
}

export interface SplitRecord {
  year: string;
  record: RecordObj[]
}
