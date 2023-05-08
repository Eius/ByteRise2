export interface PostMeta {
    pubDate: string;
    author: string;
    tags: string[];
}

export interface PartialPostData {
    thumbnail: string;
    title: string;
    meta: PostMeta;
}