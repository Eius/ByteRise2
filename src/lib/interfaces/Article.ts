export interface Article {
    title: string,
    slug: string,
    description: string,
    tags: string[],
    thumbnail: string,
    author: string,
    publishDate: Date,
}

export interface PostMeta {
    pubDate: string,
    tags: string[]
}